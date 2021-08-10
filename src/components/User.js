import React, {useState, useContext} from 'react';
import styled from 'styled-components/native';
import UserContext from '../contexts/User';

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
`;

const StyledInput = styled.TextInput`
  border: 1px solid #111111;
  font-size: 26px;
  padding: 10px;
  width: 100%;
`;

const User = () => {
  const [text, setText] = useState('');
  const {name, setName} = useContext(UserContext);

  return (
    <>
      <StyledText>Name: {name}</StyledText>
      <StyledInput
        value={text}
        onChangeText={setText}
        onSubmitEditing={() => {
          setName(text);
          setText('');
        }}
      />
    </>
  );
};

export default User;
