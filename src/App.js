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
    // 컨슈머 컴포넌트는 부모 컴포넌트 중 가장 가까운 provider 컴포넌트가 제공해주는 데이터를 이용함
    // 기본값으로 설정된 데이터 모양과 provider에 value로 설정된 모양이 일치해야 함!
    <UserContext.Provider value={{name: 'Erika Han'}}>
      <Container>
        {/* 컨슈머 컴포넌트의 자식으로 설정되는 컴포넌트에서 전달된 데이터 렌더링 */}
        <UserContext.Consumer>
          {(value) => {
            console.log(value);
            return <StyledText>{value?.name}</StyledText>;
          }}
        </UserContext.Consumer>

        <UserContext.Provider value={{name: 'Erika 2'}}>
          {/* 여러 개의 provider가 있다면 가장 가까운 povider의 값을 가져옴 */}
          <UserContext.Consumer>
            {(value) => {
              console.log(value);
              return <StyledText>{value?.name}</StyledText>;
            }}
          </UserContext.Consumer>
        </UserContext.Provider>

        <UserContext.Consumer>
          {(value) => {
            console.log(value);
            return <StyledText>{value?.name}</StyledText>;
          }}
        </UserContext.Consumer>
      </Container>
    </UserContext.Provider>
  );
}
