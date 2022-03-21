import {
  getDocs,
  collection,
  DocumentData,
  CollectionReference,
  addDoc,
} from 'firebase/firestore';
import { db } from '@/firebase';
import { Posts } from './type';
import { Reviews } from './type';

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

const postsCol = createCollection<Posts>('posts');

export const getPostDocs = async () => {
  const postDocs = await getDocs(postsCol);
  const postData = postDocs.docs.map((x) => x.data());
  return postData;
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
  // Add a new document with a generated id.

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
