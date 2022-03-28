import {
  getDocs,
  collection,
  DocumentData,
  CollectionReference,
} from 'firebase/firestore';

import { Keyword } from '../type';
import { getErrorMessage } from '@/utils';
import { db } from '@/firebase';

const createCollection = <T = DocumentData>(collectionName: string) =>
  collection(db, collectionName) as CollectionReference<T>;

const postsStore = createCollection<Keyword>('searchkeyword');

export const getKeywordData = async (keyword: string) => {
  const postDocs = await getDocs(postsStore);
  const postData = postDocs.docs.map((x) => ({ ...x.data(), id: x.id }));
  console.log(postData);
  return postData;
};
