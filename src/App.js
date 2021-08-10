import React, {createContext} from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

export default function App() {
  const UserContext = createContext({name: 'Erika'});

  return (
    <Container>
      <UserContext.Consumer>
        {(value) => <StyledText>{value.name}</StyledText>}
      </UserContext.Consumer>
    </Container>
  );
}
