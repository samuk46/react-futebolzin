import api from "../api";

const atualizarTime = async (time) => {
  const [timeFavorito] = await api.buscaTimeFavorito();
  console.log(timeFavorito);

  await api.atualizaTime({ ...timeFavorito, favorito: false });
  await api.atualizaTime({ ...time, favorito: true });
};

export default {
  atualizarTime,
};
