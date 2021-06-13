import { Container, Typography } from "@material-ui/core";
import React from "react";
import Times from "../../components/times";

function Main() {
  return (
    <Container>
      <Typography variant="h3">Futebolzin</Typography>
      <Times />
    </Container>
  );
}

export default Main;
