export interface Posts {
  address: string;
  category: string;
  name: string;
  score: number;
}

export interface Reviews {
  userId: string;
  postId: string;
  date: string;
  score: number;
  images: Array<Blob>;
  text: string;
}
