import { useState, useEffect, useCallback } from 'react';
import { getDoc, DocumentData } from 'firebase/firestore';
import { createDoc } from '@/firebase/request';
import { DocParams } from '@/firebase/type';

import { getErrorMessage } from '@/utils';

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
