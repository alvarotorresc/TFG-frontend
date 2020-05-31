import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

export interface AuthContext {
  loggedIn: boolean;
  researcherId: string | null;
  token: string | null;
  type: string | null;
  login: (token: string, id: string, type: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContext>({
  loggedIn: false,
  researcherId: null,
  token: null,
  type: null,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export function useAuth() {
  return useContext(AuthContext);
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AUTH_TOKEN_KEY = "token";
export const AUTH_RESEARCHERID_KEY = "researcherId";
export const AUTH_ROL_KEY = "rol";

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<
    Pick<AuthContext, "loggedIn" | "token" | "researcherId" | "type">
  >(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const researcherId = localStorage.getItem(AUTH_RESEARCHERID_KEY);
    const type = localStorage.getItem(AUTH_ROL_KEY);

    return {
      loggedIn: !!token,
      token,
      researcherId,
      type,
    };
  });

  useEffect(() => {
    if (state.token) {
      localStorage.setItem(AUTH_TOKEN_KEY, state.token);
    } else {
      localStorage.removeItem(AUTH_TOKEN_KEY);
    }

    if (state.researcherId) {
      localStorage.setItem(AUTH_RESEARCHERID_KEY, state.researcherId);
    } else {
      localStorage.removeItem(AUTH_RESEARCHERID_KEY);
    }

    if (state.type) {
      localStorage.setItem(AUTH_ROL_KEY, state.type);
    } else {
      localStorage.removeItem(AUTH_ROL_KEY);
    }
  }, [state]);

  const login = useCallback(
    async (
      token = state.token,
      researcherId = state.researcherId,
      type = state.type
    ) => {
      setState((current) => ({
        ...current,
        loggedIn: true,
        token,
        researcherId,
        type,
      }));
    },
    []
  );

  const logout = useCallback(async () => {
    setState((current) => ({
      ...current,
      loggedIn: false,
      token: null,
      researcherId: null,
      type: null,
    }));
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, ...state }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
