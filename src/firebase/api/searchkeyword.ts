import {
  getDocs,
  collection,
  DocumentData,
  CollectionReference,
  addDoc,
} from 'firebase/firestore';

import { Posts, PostsOther, FoodLists, Users, Reviews } from '../type';
import { getErrorMessage } from '@/utils';
import { db } from '@/firebase';

const createCollection = <T = DocumentData>(collectionName: string) =>
  collection(db, collectionName) as CollectionReference<T>;

const postsCol = createCollection<PostsOther>('posts');

export const getKeywordData = async (keyword: string) => {
  const postDocs = await getDocs(postsCol);
  const postData = postDocs.docs.map((x) => ({ ...x.data(), id: x.id }));
  return postData;
};
