import { useState, createContext } from "react";
export const UserContext = createContext(null);

const UserStore = ({children}) => {
  // 로그인 여부
  const [isLogin, setIsLogin] = useState(false);
  // 로그인시 쿼리문에 쓰일 회원번호
  const [userNum, setUserNum] = useState(0);

  const contextValue = {
    isLogin,
    userNum,
    setUserNum,
    setIsLogin

  };

  return(
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>    
  )
}
export default UserStore;