"use client"

import {Button, Container, Link, Stack, TextField, Checkbox, FormControlLabel, FormGroup} from "@mui/material";

export default function Form() {

    return (
        <Container maxWidth={'sm'}>
            <Stack spacing={5}>
                <img src={"/logo.svg"} alt={'logo'} width={"60%"}/>

                <h1>Добро пожаловать</h1>

                <TextField id="email" label="Электронная почта" variant="outlined" />
                <TextField id="password" label="Пароль" variant="outlined" type={"password"} />

                <Stack direction="row" spacing={10}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked/>} label="Запомнить меня" />
                    </FormGroup>

                    <Link href={"#"}>Забыли пароль?</Link>
                </Stack>

                <Button variant="contained">Войти</Button>
            </Stack>
        </Container>
    )
}