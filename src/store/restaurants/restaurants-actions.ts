import { createAsyncThunk } from '@reduxjs/toolkit';
import { DocParams, ImageType } from '@/firebase/type';
import { createDoc, getImageDocs } from '@/firebase/request';
import { getDoc } from 'firebase/firestore';

interface PromiseAllSettled {
  status: 'fulfilled' | 'pending' | 'rejected';
  value: ImageType;
}

export const request = createAsyncThunk(
  'restaurant/request',
  async ({ docName, id }: DocParams, { rejectWithValue }) => {
    const docRef = createDoc({ docName, id });
    try {
      const doc = await getDoc(docRef);
      if (!doc.exists()) {
        throw new Error();
      }

      const data = doc.data();
      data.images = await Promise.allSettled(
        data.images.map(async (url: string) => ({
          title: url,
          src: await getImageDocs(url, 'restaurants'),
        })),
      );
      data.images = data.images.map(({ value }: PromiseAllSettled) => value);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data);
    }
  },
);
