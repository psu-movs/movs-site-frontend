"use client";

import ControlPanel from "@/app/manager/ControlPanel";
import Divider from "@mui/material/Divider";
import NewsContainer from "@/app/manager/NewsContainer";
import DepartmentContainer from "@/app/manager/DepartmentContainer";
import { Container } from "@mui/material";

export default function Manager({user, active}) {

  return (
    <Container maxWidth={"lg"}>
      <ControlPanel user={user} />
      <Divider />
      {active === "news" && <NewsContainer />}
      {active === "department" && <DepartmentContainer />}
    </Container>
  )
}