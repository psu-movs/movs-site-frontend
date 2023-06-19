import moment from "moment";

export enum UserPermissions {
  none = 0,
  manageNews = 1 << 0,
  manageTeachers = 1 << 1,
  manageInfo = 1 << 2,
  administrator = 1 << 3
}

export interface ClientUser {
  full_name: string;
  email: string;
  permissions: UserPermissions;
}

export enum ContentType {
  text,
  image,
  text_with_image
}

export interface Image {
  url: string;
  label: string;
}

export interface Content {
  type: ContentType;
  meta?: unknown;
  content?: string;
  image?: Image;
}

export interface DepartmentInfo {
  phone: string;
  email: string;
  address: string;
  description: Content[];
}

export interface DepartmentHeadInfo {
  phone: string;
  email: string;
  address: string;
  full_name: string;
  post: string;
  photo_url: string;
}

export interface Article {
  _id: string;
  author_id: string;
  title: string;
  description: string | null;
  description_preview: string;
  creation_date: string;
  thumbnail_url: string;
}

export interface ScienceWork {
  _id: string;
  title: string;
  description: string;
  image_url: string;
}

export interface Company {
  _id: string;
  image_url: string;
}