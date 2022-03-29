import {
  getDocs,
  collection,
  DocumentData,
  DocumentReference,
  CollectionReference,
  addDoc,
  doc,
} from 'firebase/firestore';
import { db } from '@/firebase';
import { Posts, FoodLists, Users, Reviews, DocParams } from './type';
import { getErrorMessage } from '@/utils';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { query, orderBy, limit, where, documentId } from 'firebase/firestore';

export const createDoc = <T = DocumentData>({ docName, id }: DocParams) =>
  doc(db, docName, id) as DocumentReference<T>;

const createCollection = <T = DocumentData>(collectionName: string) =>
  collection(db, collectionName) as CollectionReference<T>;

const postsCol = createCollection<Posts>('posts');
const foodListsCol = createCollection<FoodLists>('foodList');
const usersCol = createCollection<Users>('users');

// 모든 음식점 가져오기
export const getPostDocs = async () => {
  const postDocs = await getDocs(postsCol);
  const postData = postDocs.docs.map((x) => ({ ...x.data(), id: x.id }));
  return postData;
};
// 맛집 술집 별로 카테고리 가져오기
export const getCategoryFoodListDocs = async (category: string) => {
  const q = query(foodListsCol, where('category', '==', category));
  const foodListDocs = await getDocs(q);
  const foodListData = foodListDocs.docs.map((x) => ({
    ...x.data(),
    id: x.id,
  }));

  return foodListData;
};

// 술집인지 맛집인지에 따라 배열에 6개로 담아서 리턴 (캐러셀에서 사용)
export const getFoodListDocs = async (title: string) => {
  const q = query(foodListsCol, where('category', '==', title));
  const foodListDocs = await getDocs(q);
  const foodListData = foodListDocs.docs.map((x) => ({
    ...x.data(),
    id: x.id,
  }));

  return foodListData;
};

// post id로 음식점 데이터
export const getPostListDocs = async (posts: string[]) => {
  const q = query(postsCol, where(documentId(), 'in', posts));
  const postDocs = await getDocs(q);
  const postData = postDocs.docs.map((x) => ({ ...x.data(), id: x.id }));

  return postData;
};

// food list의 link로 post 리스트 가져오기
export const getBestRestaurantsIdDocs = async (category: string) => {
  const q = query(foodListsCol, where('link', '==', category));
  const postDocs = await getDocs(q);
  const postListData = postDocs.docs.map((x) => x.data());

  return postListData;
};

// post id 배열로 이미지 이름 가져오기 (2개)
export const getPostImageTitleDocs = async (posts: string[]) => {
  const q = query(postsCol, where(documentId(), 'in', posts), limit(2));
  const postDocs = await getDocs(q);
  const fileData = postDocs.docs.map((x: any) => x.data().images[0]);

  return fileData;
};

// post id로 음식점의 이름가져오기
export const getPostTitleDocs = async (post: string) => {
  const q = query(postsCol, where(documentId(), '==', post), limit(2));
  const postDocs = await getDocs(q);
  const postTitle = postDocs.docs.map((x: any) => x.data().name);

  return postTitle;
};

// 맛집 술집 별로 데이터 가져오기(맛집 술집)
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

  try {
    return await getDownloadURL(imagesRef);
  } catch (error) {
    console.error(getErrorMessage(error));
  }
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
}: Posts) => {
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
