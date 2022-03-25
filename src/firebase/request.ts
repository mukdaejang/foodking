import {
  getDocs,
  collection,
  DocumentData,
  CollectionReference,
  addDoc,
} from 'firebase/firestore';
import { db } from '@/firebase';
import { Posts, FoodLists, Users } from './type';
import { Reviews } from './type';
import { getErrorMessage } from '@/utils';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
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

export const getTopScorePostDocs = async (num: number) => {
  const q = query(
    postsCol,
    where('category', '==', '주점'),
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
  category,
  name,
  score,
}: Posts) => {
  const docRef = await addDoc(collection(db, 'posts'), {
    address,
    category,
    name,
    score,
  });
  console.log('Document written with ID: ', docRef.id);
};
