import httpClient from "@/http";

export default async function isAuthorized() {
  const token = window.localStorage.getItem("token");
  if (!token) return false;

  const user = await httpClient.getMe();
  // unauthorized
  return !user.error;

}