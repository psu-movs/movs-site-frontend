"use client";

import {
  Button,
  Container,
  Link,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup, Typography
} from "@mui/material";

export default function Form() {
  return (
    <Container maxWidth={"xs"}>
      <Stack spacing={5}>
        <img src={"/logo.svg"} alt={"logo"} width={"60%"} />

        <Typography variant="h4" >Добро пожаловать</Typography>

        <TextField id="email" label="Электронная почта" variant="outlined" sx={{backgroundColor: '#FFFFFF'}} />
        <TextField
          id="password"
          label="Пароль"
          variant="outlined"
          type={"password"}
          sx={{backgroundColor: '#FFFFFF'}}
        />

        <Stack
          direction="row"
          spacing={10}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked size={"medium"}/>}
              label={<Typography sx={{fontWeight: '600'}}>Запомнить меня</Typography>}
            />
          </FormGroup>

          <Link href={"#"}><Typography sx={{fontWeight: '600'}}>Забыли пароль?</Typography></Link>
        </Stack>

        <Button variant="contained" size={"large"} sx={{boxShadow: 0}}>Войти</Button>
      </Stack>
    </Container>
  );
}
