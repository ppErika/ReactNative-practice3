import React, {createContext, useState} from 'react';

const UserContext = createContext({
  name: '',
  setName: () => {},
});

const UserProvider = ({children}) => {
  // 초기값 여기서 지정
  const [name, setName] = useState('Erika');
  const value = {name, setName};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};
export default UserContext;
