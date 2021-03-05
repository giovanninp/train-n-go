const Types = {
  login: "auth/LOGIN",
  loginSuccess: "auth/LOGIN_SUCCESS",
  loginError: "auth/LOGIN_ERROR",
};

const INITIAL_STATE = {
  isLogged: false,
  loading: false,
  userData: {},
};

interface IAction {
  type: string;
  [key: string]: any;
}

const reducer = (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case Types.login:
      return { ...state, loading: true };
    case Types.loginError:
      return { ...state, loading: false };
    case Types.loginSuccess:
      return { ...state, loading: false };
    default:
      return state;
  }
};

const get = {
  all: (state: any) => state.auth,
  isLogged: (state: any): boolean => state.auth.isLogged,
  loading: (state: any): boolean => state.auth.loading,
  userData: (state: any): boolean => state.auth.userData,
};

export { reducer, Types, get };
