import * as buffer from "buffer";

export interface UpdateDepartmentInfo {
  phone?: string;
  email?: string;
  address?: string;
  description?: string;
}

export interface AddDepartmentHead {
  phone: string;
  email: string;
  address: string;
  full_name: string;
  photo: File;
}

export interface UpdateDepartmentHead {
  phone?: string;
  email?: string;
  address?: string;
  full_name?: string;
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