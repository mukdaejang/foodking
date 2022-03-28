import {
  getDocs,
  collection,
  DocumentData,
  CollectionReference,
} from 'firebase/firestore';

import { Keyword } from '../type';
import { db } from '@/firebase';

const createCollection = <T = DocumentData>(collectionName: string) =>
  collection(db, collectionName) as CollectionReference<T>;

const postsStore = createCollection<Keyword>('searchkeyword');

export const getKeywordData = async (keyword: string) => {
  const postDocs = await getDocs(postsStore);
  const postKeywordData = postDocs.docs.map((x) => ({ ...x.data(), id: x.id }));
  return postKeywordData;
};
