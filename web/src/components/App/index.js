import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { Container, Aside, Main, List, Title } from "./styles";

import GlobalStyle from "../../styles/global";
import DevItem from "../DevItem";
import DevForm from "../DevForm";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  return (
    <Container id="app">
      <GlobalStyle />
      <Aside>
        <Title>Cadastrar</Title>
        <DevForm onSubmit={handleAddDev} />
      </Aside>
      <Main>
        <List>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id} />
          ))}
        </List>
      </Main>
    </Container>
  );
}

export default App;
