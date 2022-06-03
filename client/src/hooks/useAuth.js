import { useState } from "react";

const useAuth = () => {
  const [data, setData] = useState(() =>
    JSON.parse(sessionStorage.getItem("credentials"))
  );

  const clearStorage = () => {
    sessionStorage.removeItem("credentials");
    setData(null);
  };

  const setDataToStorage = (values) => {
    setData(values);
    sessionStorage.setItem("credentials", JSON.stringify(values));
  };

  return {
    isLoggedin: data ? true : false,
    data,
    setDataToStorage,
    clearStorage,
  };
};

export default useAuth;
