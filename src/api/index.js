const API_URL = "http://localhost:3000";
const TIMES_URI = `${API_URL}/time`;
const NOTICIA_URI = `${API_URL}/noticia`;

const conecta = (uri, options = {}) => {
  return fetch(uri, options).then(async (resposta) => {
    if (resposta.ok) {
      const dados = await resposta.json();
      return dados;
    }

    console.log(resposta);
    throw new Error(resposta);
  });
};

const listaTimes = () => conecta(TIMES_URI);

const buscaTime = (id) => conecta(`${TIMES_URI}/${id}`);

const buscaTimeFavorito = () => conecta(`${TIMES_URI}?favorito=true`);

const listaNoticias = () => conecta(`${NOTICIA_URI}`);

const buscaNoticia = (id) => conecta(`${NOTICIA_URI}/${id}`);

const buscaNoticiasTime = (idTime) => conecta(`${NOTICIA_URI}?time.id=${idTime}`);

const atualizaTime = (time) =>
  conecta(`${TIMES_URI}/${time.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(time),
  });

const atualizaNoticia = (noticia) =>
  conecta(`${NOTICIA_URI}/${noticia.id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(noticia),
  });

export default {
  listaTimes,
  buscaTime,
  buscaTimeFavorito,
  listaNoticias,
  buscaNoticia,
  buscaNoticiasTime,
  atualizaTime,
  atualizaNoticia,
};
