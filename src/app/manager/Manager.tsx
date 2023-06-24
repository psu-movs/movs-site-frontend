"use client";

import ControlPanel from "@/app/manager/ControlPanel";
import Divider from "@mui/material/Divider";
import NewsContainer from "@/app/manager/NewsContainer";
import DepartmentContainer from "@/app/manager/DepartmentContainer";
import { Container } from "@mui/material";
import ScienceWorksContainer from "@/app/manager/ScienceWorksContainer";
import { ClientUser } from "@/http/responseModels";
import Applicants from "@/app/manager/Applicants";

export default function Manager({user, active}: {
  user: ClientUser;
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
    </Container>
  )
}