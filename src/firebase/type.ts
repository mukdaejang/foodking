export interface Posts {
  address: string;
  category: string;
  name: string;
  score: number;
}
interface Address {
  city: string;
  district: string;
  detail: string;
}
interface menu {
  city: string;
  district: string;
  detail: string;
}
export interface PostsOther {
  address: Address;
  name: string;
  phone: string;
  category: string;
  time: string[];
  breakTime: string;
  menu: string[];
  score: number;
  description: string;
  images: string[];
}

export interface Users {
  userId: string;
  favorites: string[];
}

export interface Reviews {
  userId: string;
  postId: string;
  date: string;
  score: number;
  images: Array<Blob>;
  text: string;
}

export interface FoodLists {
  title: string;
  description: string;
  list: string[];
}

export interface Keyword {
  Keyword1: string;
  Keyword2: string;
  Keyword3: string;
  Keyword4: string;
}
