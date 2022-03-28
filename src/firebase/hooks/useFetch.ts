import { useState, useEffect, useCallback } from 'react';
import {
  doc,
  getDoc,
  DocumentData,
  DocumentReference,
} from 'firebase/firestore';
import { db } from '@/firebase';

import { getErrorMessage } from '@/utils';

interface DocParams {
  docName: string;
  id: string;
}

const createDoc = <T = DocumentData>({ docName, id }: DocParams) =>
  doc(db, docName, id) as DocumentReference<T>;

export const useFetch = <T = DocumentData>({ docName, id }: DocParams) => {
  const [data, setData] = useState<T | null>(null);

  const fetchData = useCallback(async () => {
    const docRef = createDoc<T>({ docName, id });

    try {
      const doc = await getDoc(docRef);
      if (!doc.exists()) {
        return;
      }

      setData(doc.data());
    } catch (error) {
      console.error(getErrorMessage(error));
    }
  }, [docName, id]);

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id, fetchData]);

  return data;
};
