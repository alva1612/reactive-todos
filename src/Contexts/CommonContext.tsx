import React, { SetStateAction } from "react";
import { PropsWithChildren, createContext, useState } from "react";

interface ICommonContext {
  error: boolean;
  setError: React.Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}

const defaultValue: ICommonContext = {
  error: false,
  setError: () => {
    throw new Error();
  },
  loading: true,
  setLoading: () => {
    throw new Error();
  },
};

export const CommonContext = createContext(defaultValue);

export function CommonProvider(propsChildren: PropsWithChildren) {
  const { children } = propsChildren;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <CommonContext.Provider
      value={{
        error,
        setError,
        loading,
        setLoading,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
}
