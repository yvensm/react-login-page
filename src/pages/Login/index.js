import React, { useState, useEffect } from "react";

import {
    Container,
    LoginContainer,
    LogoContainer,
    SignInButton,
    Title,
    SubTitle,
    LoginButton,
    Form,
} from "./styles";
import { api } from "../../services/api";
import Ripples from "react-ripples";
import { FaEnvelope } from "react-icons/fa";

function Login({}) {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setEmail("claudioyvens10@gmail.com");
        setPasswd("asd123");
    }, []);
    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        await api
            .post("/authenticate", {
                email: email,
                password: passwd,
            })
            .then((res) => {
                console.log(res);
                setLoading(false);
            });
    };

    return (
        <Container>
            <LogoContainer>
                <h1>logo</h1>
            </LogoContainer>
            <LoginContainer>
                <Title>Bem vindo</Title>
                <SubTitle>Por favor, identifique-se</SubTitle>
                <Form
                    onSubmit={handleLogin}
                    style={{ display: "flex", flexDirection: "column" }}
                >
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                    />
                    <input
                        type="password"
                        value={passwd}
                        onChange={(e) => setPasswd(e.target.value)}
                        placeholder="Senha"
                    />
                    <div
                        style={{
                            display: "inline-flex",
                            borderRadiu: 5,
                            justifyContent: "center",
                        }}
                    >
                        <Ripples during={1000}>
                            <LoginButton loading={loading} type="submit">
                                Entrar
                            </LoginButton>
                        </Ripples>
                    </div>

                    <SignInButton>Registrar</SignInButton>
                </Form>
            </LoginContainer>
        </Container>
    );
}

export default Login;
