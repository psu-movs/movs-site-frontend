import { User, UserPermissions } from "@/http/responseModels";

export const isAdmin = (user: User) => (user.permissions & UserPermissions.administrator) === UserPermissions.administrator;

export const hasManageNewsPermission = (user: User) =>
  (user.permissions & UserPermissions.manageNews) === UserPermissions.manageNews || isAdmin(user);

export const hasManageTeachersPermission = (user: User) =>
  (user.permissions & UserPermissions.manageTeachers) === UserPermissions.manageTeachers || isAdmin(user);

export const hasManageInfoPermission = (user: User) =>
  (user.permissions & UserPermissions.manageInfo) === UserPermissions.manageInfo || isAdmin(user);
