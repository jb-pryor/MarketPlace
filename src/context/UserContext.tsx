import { createContext, useContext, useState } from 'react';

type UserContextType = {
  user: string | null;
  setUser: (user: string | null) => void;
};

const userContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {

  const [user, setUser] = useState<string | null>(null); 

  return (

    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export function useUser() {

  const context = useContext(userContext);

  if(!context) {
    throw new Error("useUser must be used inside UserProvider");
  }
  return context;
}