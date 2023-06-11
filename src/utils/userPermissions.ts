import { ClientUser, UserPermissions } from "@/http/responseModels";

export const isAdmin = (user: ClientUser) => user.permissions & UserPermissions.administrator;

export const hasManageNewsPermission = (user: ClientUser) =>
  user.permissions & UserPermissions.manageNews || isAdmin;

export const hasManageTeachersPermission = (user: ClientUser) =>
  user.permissions & UserPermissions.manageTeachers || isAdmin;

export const hasManageInfoPermission = (user: ClientUser) =>
  user.permissions & UserPermissions.manageInfo || isAdmin;
