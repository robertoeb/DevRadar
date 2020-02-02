import React, { useState, useEffect } from "react";

import {
  Form,
  InputBlock,
  InputGroup,
  Label,
  Input,
  SubmitButton
} from "./styles";

function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername("");
    setTechs("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputBlock>
        <Label htmlFor="github_username">Usuário do Github</Label>
        <Input
          name="github_username"
          id="github_username"
          required
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
        />
      </InputBlock>

      <InputBlock>
        <Label htmlFor="techs">Tecnologias</Label>
        <Input
          name="techs"
          id="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </InputBlock>

      <InputGroup>
        <InputBlock>
          <Label htmlFor="latitude">Latitude</Label>
          <Input
            type="number"
            name="latitude"
            id="latitude"
            required
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="longitude">Longitude</Label>
          <Input
            type="number"
            name="longitude"
            id="longitude"
            required
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
        </InputBlock>
      </InputGroup>

      <SubmitButton type="submit">Cadastrar</SubmitButton>
    </Form>
  );
}

export default DevForm;
