import { ConfigProvider } from "antd";
import { createContext } from "react";

export const AntContext = createContext();

const AntProvider = ({ children }) => {
  return (
    <AntContext.Provider value={{}}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#DF4300",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntContext.Provider>
  );
};

export default AntProvider;
