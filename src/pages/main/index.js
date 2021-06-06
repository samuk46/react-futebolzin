import { Container, Typography } from "@material-ui/core";
import React from "react";
import Time from "../../components/time";

function Main() {
  return (
    <Container>
      <Typography variant="h3">Futebolzin</Typography>
      <Time nomeTime="santos" imagem="santos" fundacao="02/05/1912" corPrimaria="#ffffff" />
    </Container>
  );
}

export default Main;
