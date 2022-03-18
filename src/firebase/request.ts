import {
  getDocs,
  collection,
  DocumentData,
  CollectionReference,
} from 'firebase/firestore';
import { db } from '@/firebase';
import { Posts } from './type';

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

const postsCol = createCollection<Posts>('posts');

export const getPostDocs = async () => {
  const postDocs = await getDocs(postsCol);
  const postData = postDocs.docs.map((x) => x.data());
  return postData;
};
