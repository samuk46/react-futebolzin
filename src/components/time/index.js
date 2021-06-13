import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Card, ListItem } from "@material-ui/core";

import { EscudoTime } from "../../styles/escudoTime";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import timeService from "../../services/timeService";

export default function Time(props) {
  let [time, setTime] = useState({ ...props });

  const RatingFavorite = () => {
    async function handleOnClickFavorite(favorito) {
      await setTime({ ...time, favorito });
    }

    async function updateRatingFavorite() {
      if (time.favorito != props.favorito) {
        await timeService.atualizarTime(time);
        props.handleAlteracaoTime ? props.handleAlteracaoTime(true) : null;
      }
    }

    useEffect(async () => {
      updateRatingFavorite();
    }, [time.favorito]);

    return !props.naoMarcarFavorito ? (
      time.favorito ? (
        <StarIcon
          onClick={(event) => {
            event.preventDefault();
            handleOnClickFavorite(false);
          }}
        />
      ) : (
        <StarBorderIcon
          onClick={(event) => {
            event.preventDefault();
            handleOnClickFavorite(true);
          }}
        />
      )
    ) : null;
  };

  return (
    <>
      <Card>
        <EscudoTime alt={props.imagem.toUpperCase()} src={`/static/images/${props.imagem}.png`} />
        <ListItem>Nome: {props.nomeTime}</ListItem>
        <ListItem>Fundacao: {props.fundacao}</ListItem>
        <ListItem>COR: {props.corPrimaria}</ListItem>
        <RatingFavorite />
      </Card>
    </>
  );
}

Time.propTypes = {
  nomeTime: PropTypes.string,
  fundacao: PropTypes.string,
  corPrimaria: PropTypes.string,
  imagem: PropTypes.string,
  naoMarcarFavorito: PropTypes.bool,
  favorito: PropTypes.bool,
  handleAlteracaoTime: PropTypes.func,
};
