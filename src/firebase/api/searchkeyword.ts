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

import { Keyword, Posts } from '../type';
import { db } from '@/firebase';

const createCollection = <T = DocumentData>(collectionName: string) =>
  collection(db, collectionName) as CollectionReference<T>;

const keywordData = createCollection<Keyword>('searchkeyword');
const postsData = createCollection<Posts>('posts');

export const getKeywordData = async (keyword: string) => {
  const postDocs = await getDocs(keywordData);
  const postKeywordData = postDocs.docs.map((x) => ({ ...x.data(), id: x.id }));
  return postKeywordData;
};

export const getSearchData = async (keyword: string) => {
  const q = query(
    postsData,
    where('address.city', '>=', keyword),
    where('address.city', '<=', keyword + '\uf8ff'),
    // orderBy('score', 'desc'),
  );
  const q2 = query(
    postsData,
    where('address.district', '>=', keyword),
    where('address.district', '<=', keyword + '\uf8ff'),
    // orderBy('score', 'desc'),
  );

  const q3 = query(
    postsData,
    where('address.detail', '>=', keyword),
    where('address.detail', '<=', keyword + '\uf8ff'),
    // orderBy('score', 'desc'),
  );

  const q4 = query(
    postsData,
    where('name', '>=', keyword),
    where('name', '<=', keyword + '\uf8ff'),
    // orderBy('score', 'desc'),
  );

  const postDocs = await getDocs(q);
  const postSearchData = postDocs.docs.map((x) => ({
    ...x.data(),
    id: x.id,
  }));

  const postSearchDistrict = await getDocs(q2);
  const postSearchDistrictData = postSearchDistrict.docs.map((x) => ({
    ...x.data(),
    id: x.id,
  }));

  const postSearchDetail = await getDocs(q3);
  const postSearchDetailData = postSearchDetail.docs.map((x) => ({
    ...x.data(),
    id: x.id,
  }));

  const postSearchName = await getDocs(q3);
  const postSearchNameData = postSearchName.docs.map((x) => ({
    ...x.data(),
    id: x.id,
  }));

  return [
    ...postSearchData,
    ...postSearchDistrictData,
    ...postSearchDetailData,
    ...postSearchNameData,
  ];
};
