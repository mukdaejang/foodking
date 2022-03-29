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
  description?: string;
  images?: ImageType[];
}
export interface PostsWithId extends Posts {
  id: string;
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
  images: string[];
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

export interface DocParams {
  docName: string;
  id: string;
}
