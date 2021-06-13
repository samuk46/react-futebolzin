import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../api";
import Time from "../../components/time";

export default function TimeView() {
  const { idTime } = useParams();
  const [time, setTime] = useState(null);

  async function buscaTime() {
    const time = await api.buscaTime(idTime);
    setTime(time);
    console.log(time);
  }

  useEffect(() => {
    buscaTime();
  }, []);

  return (
    <>
      <Grid container>{time ? <Time {...time} /> : null}</Grid>
    </>
  );
}
