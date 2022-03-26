import {
  getDocs,
  collection,
  DocumentData,
  CollectionReference,
  addDoc,
} from 'firebase/firestore';
import { db } from '@/firebase';
import { Posts, PostsOther, FoodLists, Users, Reviews } from './type';
import { getErrorMessage } from '@/utils';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { query, orderBy, limit, where, documentId } from 'firebase/firestore';

const createCollection = <T = DocumentData>(collectionName: string) =>
  collection(db, collectionName) as CollectionReference<T>;

const postsCol = createCollection<Posts>('posts');
const foodListsCol = createCollection<FoodLists>('foodList');
const usersCol = createCollection<Users>('users');

export const getPostDocs = async () => {
  const postDocs = await getDocs(postsCol);
  const postData = postDocs.docs.map((x) => ({ ...x.data(), id: x.id }));
  return postData;
};

export const getFoodListDocs = async () => {
  let temp: any = [];

  const foodListDocs = await getDocs(foodListsCol);
  const foodListData = foodListDocs.docs.map((x) => ({
    ...x.data(),
    id: x.id,
  }));

  const arrFoodListData = [];
  foodListData.forEach((category) => {
    temp.push(category);
    if (temp.length === 6) {
      arrFoodListData.push(temp);
      temp = [];
    }
  });
  if (temp.length) arrFoodListData.push(temp);

  return arrFoodListData;
};

export const getBestPostListDocs = async (posts: string[]) => {
  const q = query(postsCol, where(documentId(), 'in', posts));
  const postDocs = await getDocs(q);
  const postData = postDocs.docs.map((x) => ({ ...x.data(), id: x.id }));

  return postData;
};

export const getPostTitleDocs = async (posts: string[]) => {
  const q = query(postsCol, where(documentId(), 'in', posts), limit(2));
  const postDocs = await getDocs(q);
  const fileData = postDocs.docs.map((x: any) => x.data().images[0]);
  console.log(fileData);

  return fileData;
};

export const getTopScorePostDocs = async (num: number, category: string) => {
  const q = query(
    postsCol,
    where(
      'category',
      'in',
      category === '술집'
        ? ['주점', '이자카야', '호프', '칵테일']
        : [
            '일식',
            '한식',
            '양식',
            '카페',
            '분식',
            '베이커리',
            '브런치',
            '스테이크',
            '베트남',
            '남미',
          ],
    ),
    orderBy('score', 'desc'),
    limit(num),
  );
  const postDocs = await getDocs(q);
  const postData = postDocs.docs.map((x) => ({
    ...x.data(),
    id: x.id,
  }));

  return postData;
};

export const registUser = async (userId: string) => {
  try {
    const q = query(usersCol, where('userId', '==', userId));
    const userData = await getDocs(q);
    const [user] = userData.docs;

    if (user) {
      return;
    }

    await addUsersDocs({
      userId: userId,
      favorites: [],
    });
  } catch (err) {
    console.log(getErrorMessage(err));
  }
};

const reviewsCol = createCollection<Reviews>('reviews');
export const getReviewDocs = async () => {
  const reviewDocs = await getDocs(reviewsCol);
  const reviewData = reviewDocs.docs.map((x) => x.data());
  return reviewData;
};

export const getImageDocs = async (fileName: string) => {
  const imagesRef = ref(storage, fileName);

  return await getDownloadURL(imagesRef)
    .then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      return url;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const postReviewDocs = async ({
  userId,
  postId,
  date,
  score,
  images,
  text,
}: Reviews) => {
  const docRef = await addDoc(collection(db, 'reviews'), {
    userId,
    postId,
    date,
    score,
    images,
    text,
  });
  console.log('Document written with ID: ', docRef.id);
};

export const addUsersDocs = async ({ userId, favorites }: Users) => {
  await addDoc(collection(db, 'users'), {
    userId,
    favorites,
  });
};

// storage (이미지)
const storage = getStorage();

export const postImage = async (file: any) => {
  try {
    const storageRef = ref(storage, file.name);

    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });

    return file.name;
  } catch (e) {
    console.log(getErrorMessage('파일이 정상적으로 업로드되지 않았습니다.'));
  }
};

// restaurant data 넣기 (임시)
export const postRestaurantsDocs = async ({
  address,
  name,
  phone,
  category,
  time,
  breakTime,
  menu,
  score,
  description,
  images,
}: PostsOther) => {
  const docRef = await addDoc(collection(db, 'posts'), {
    address,
    name,
    phone,
    category,
    time,
    breakTime,
    menu,
    score,
    description,
    images,
  });
  console.log('Document written with ID: ', docRef.id);
};
