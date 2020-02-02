import React from "react";

import {
  ListItem,
  Header,
  Avatar,
  UserInfo,
  Name,
  Techs,
  Bio,
  GitHubLink
} from "./styles";

function DevItem({ dev }) {
  return (
    <ListItem>
      <Header>
        <Avatar src={dev.avatar_url} alt={dev.name} />
        <UserInfo>
          <Name>{dev.name}</Name>
          <Techs>{dev.techs.join(", ")}</Techs>
        </UserInfo>
      </Header>
      <Bio>{dev.bio}</Bio>
      <GitHubLink
        href={`https://github.com/${dev.github_username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar perfil no Github
      </GitHubLink>
    </ListItem>
  );
}

export default DevItem;
