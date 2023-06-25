"use client";

import ControlPanel from "@/app/manager/ControlPanel";
import Divider from "@mui/material/Divider";
import NewsContainer from "@/app/manager/NewsContainer";
import DepartmentContainer from "@/app/manager/DepartmentContainer";
import { Container } from "@mui/material";
import ScienceWorksContainer from "@/app/manager/ScienceWorksContainer";
import { User } from "@/http/responseModels";
import Applicants from "@/app/manager/Applicants";
import ManageUsers from "@/app/manager/ManageUsers";

export default function Manager({user, active}: {
  user: User;
  active: string;
}) {

  return (
    <Container maxWidth={"lg"}>
      <ControlPanel user={user} />
      <Divider />
      {active === "news" && <NewsContainer />}
      {active === "department" && <DepartmentContainer />}
      {active === "science_works" && <ScienceWorksContainer />}
      {active === "applicants" && <Applicants />}
      {active === "users" && <ManageUsers />}
    </Container>
  )
}