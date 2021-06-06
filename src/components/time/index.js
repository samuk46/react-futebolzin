import React from "react";
import PropTypes from "prop-types";
import { Avatar, Card, ListItem } from "@material-ui/core";

// import santos from "./santos.png";

export default function Time(props) {
  return (
    <>
      <Card>
        <img alt={props.imagem.toUpperCase()} src={`static/images/${props.imagem}.png`} />

        <ListItem>
          Nome: {props.nomeTime} - {props.imagem}
        </ListItem>
        <ListItem>Fundacao: {props.fundacao}</ListItem>
        <ListItem>COR: {props.corPrimaria}</ListItem>
      </Card>
    </>
  );
}

Time.propTypes = {
  nomeTime: PropTypes.string,
  fundacao: PropTypes.string,
  corPrimaria: PropTypes.string,
  imagem: PropTypes.string,
};
