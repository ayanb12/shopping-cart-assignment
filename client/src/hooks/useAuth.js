import { useState } from "react";

const useAuth = () => {
  const [data, setData] = useState(() =>
    JSON.parse(localStorage.getItem("credentials"))
  );

  const clearStorage = () => {
    localStorage.removeItem("credentials");
    setData(null);
  };

  const setDataToStorage = (values) => {
    setData(values);
    localStorage.setItem("credentials", JSON.stringify(values));
  };

  return {
    isLoggedin: data ? true : false,
    data,
    setDataToStorage,
    clearStorage,
  };
};

export default useAuth;
