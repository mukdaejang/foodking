export interface Address {
  city: string;
  district: string;
  detail: string;
}
interface menu {
  city: string;
  district: string;
  detail: string;
}

export interface ImageType {
  title: string;
  src: string;
}

export interface Posts {
  id?: string;
  address: Address;
  name: string;
  phone?: string;
  category: string;
  time?: string[];
  breakTime?: string;
  menu?: string[];
  menus?: {
    name: string;
    price: string;
  }[];
  score: number;
  star: number;
  description?: string;
  images?: ImageType[];
  reviews?: Review[];
  localPops?: Posts[];
}

export interface PostsWithId extends Posts {
  id: string;
}
export interface Users {
  userId: string;
}

export interface UsersWithImgAndName {
  userId: string;
  userName: string | null;
  profileImgURL: string | null;
}

export interface Review {
  userId: string;
  postId: string;
  date: string;
  score: number;
  images: ImageType[];
  text: string;
}

export interface FoodLists {
  title: string;
  description: string;
  list: string[];
}

export interface Keyword {
  keyword: string[];
}

export interface DocParams {
  docName: string;
  id: string;
}

export interface CategoryType {
  title: string;
  id: string;
  description: string;
  list: string[];
  link: string;
}

interface Promise {
  status: 'fulfilled' | 'pending' | 'rejected';
}

export interface PromiseAllSettled<T> extends Promise {
  value: T;
}

export interface Search {
  location: string;
  keyword: string;
}
