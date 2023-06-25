import httpClient from "@/http";
import UserList from "@/app/manager/components/UserList";

export default async function ManageUsers() {
  const users = await httpClient.getAllUsers();

  return (
    <UserList users={users} />
  )

}