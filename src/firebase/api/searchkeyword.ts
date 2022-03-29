import {
  getDocs,
  collection,
  DocumentData,
  CollectionReference,
  query,
  orderBy,
  limit,
  where,
} from 'firebase/firestore';

import { Keyword } from '../type';
import { db } from '@/firebase';

const createCollection = <T = DocumentData>(collectionName: string) =>
  collection(db, collectionName) as CollectionReference<T>;

const keywordData = createCollection<Keyword>('searchkeyword');
const postsData = createCollection<Keyword>('posts');

export const getKeywordData = async (keyword: string) => {
  const postDocs = await getDocs(keywordData);
  const postKeywordData = postDocs.docs.map((x) => ({ ...x.data(), id: x.id }));
  return postKeywordData;
};

export const getSearchData = async (keyword: string) => {
  // const q = query(postsData, where('address','in',), orderBy('score', 'desc'));
  const postDocs = await getDocs(postsData);
  const postData = postDocs.docs.map((x) => ({
    ...x.data(),
    id: x.id,
  }));
};
