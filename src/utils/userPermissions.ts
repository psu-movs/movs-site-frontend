import { User, UserPermissions } from "@/http/responseModels";

export const isAdmin = (user: User) => user.permissions & UserPermissions.administrator;

export const hasManageNewsPermission = (user: User) =>
  user.permissions & UserPermissions.manageNews || isAdmin;

export const hasManageTeachersPermission = (user: User) =>
  user.permissions & UserPermissions.manageTeachers || isAdmin;

export const hasManageInfoPermission = (user: User) =>
  user.permissions & UserPermissions.manageInfo || isAdmin;
