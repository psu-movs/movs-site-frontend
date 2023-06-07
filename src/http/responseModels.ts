export interface ClientUser {
  full_name: string;
  email: string;
  permissions: number;
}

export interface DepartmentInfo {
  phone: string;
  email: string;
  address: string;
  description: string;
}


export interface DepartmentHeadInfo {
  phone: string;
  email: string;
  address: string;
  full_name: string;
  photo_url: string;
}