import React, { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";

import api from "../../api";
import Time from "../time";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Times() {
  const [times, setTimes] = useState([]);

  async function buscarTimes() {
    const times = await api.listaTimes();
    setTimes(times);
  }

  function handleAlteracaoTime(refresh) {
    if (refresh) {
      buscarTimes();
    }
  }

  useEffect(() => {
    buscarTimes();
  }, []);

  const BlocoTimes = styled(Grid)`
    background-color: black;
    padding: 25px;
  `;

  const BlocoTime = styled(Grid)`
    background-color: ${({ corprimaria }) => corprimaria};
    cursor: pointer;

    &:hover {
      background-color: yellow;
      font-style: oblique;
      transition: 0.2s ease-out;
    }
  `;

  return (
    <>
      <BlocoTimes container spacing={3}>
        {times.map((time) => {
          return (
            <BlocoTime item xs={4} corprimaria={time.corPrimaria} key={time.id}>
              <Link to={`/time/${time.id}`}>
                <Time {...time} handleAlteracaoTime={handleAlteracaoTime} />
              </Link>
            </BlocoTime>
          );
        })}
      </BlocoTimes>
    </>
  );
}
