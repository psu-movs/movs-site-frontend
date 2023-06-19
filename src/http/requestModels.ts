import {Content} from './responseModels'

export interface UpdateDepartmentInfo {
  phone?: string;
  email?: string;
  address?: string;
  description?: Content[];
}

export interface AddDepartmentHead {
  phone: string;
  email: string;
  address: string;
  full_name: string;
  post: string;
  photo: File;
}

export interface UpdateDepartmentHead {
  phone?: string;
  email?: string;
  address?: string;
  full_name?: string;
  post?: string;
  photo?: File;
}

export interface AddArticle {
  title: string;
  description: string;
  image: File;
}

export interface UpdateArticle {
  title?: string;
  description?: string;
  image?: File;
}

export interface AddScienceWork {
  title: string;
  description: string;
  image: File;
}

export interface UpdateScienceWork {
  title?: string;
  description?: string;
  image?: File;
}