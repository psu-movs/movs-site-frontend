import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function DrawerMenu({children}: {children: React.ReactNode}) {
  const [opened, setOpened] = useState<boolean>(false);

  const open = () => setOpened(true);
  const close = () => setOpened(false)

  return (
    <>
      <IconButton aria-label="menu" onClick={open}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor={'left'}
        open={opened}
        onClose={close}
        sx={{padding: '5%'}}
      >
        {children}
      </Drawer>
    </>
  )
}