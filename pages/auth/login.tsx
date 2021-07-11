import React, { useState } from "react";
import Link from "next/link";
import { gql, useMutation } from "@apollo/react-hooks";
import { Form, Field } from "react-final-form";

// layout for page

import Auth from "../../layouts/Auth";
import { JwtStorage } from "../../common/auth/jwt/jwt";

enum LoginMethodType {
  Google,
  UsernamePassowrd,
}

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      accessToken
    }
  }
`;

interface LOGIN_MUTATION_VARIABLES {
  username: string;
  password: string;
}

interface LOGIN_MUTATION_RESULT {
  login: {
    __typename: "LoginResponse";
    accessToken: string;
  };
}

const Login = () => {
  const [login] = useMutation<LOGIN_MUTATION_RESULT, LOGIN_MUTATION_VARIABLES>(
    LOGIN_MUTATION
  );

  const [loginMethod, setLoginMethod] = useState<LoginMethodType>(
    LoginMethodType.Google
  );

  const onLoginFormValidation = (values: any) => {
    const errors = {} as any;
    if (!values.email) {
      errors.email = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  const [loginState, setLoginState] = useState({
    error: false,
    errorMessage: "",
  });

  const onLogin = async ({ email, password }: any) => {
    const loginParams: LOGIN_MUTATION_VARIABLES = {
      username: email,
      password: password,
    };

    try {
      const { data } = await login({
        variables: loginParams,
      });

      setLoginSession(data);

      redirectToRouter(getCurrentURLRedirect());
    } catch (e) {
      setLoginState({
        error: true,
        errorMessage: "Wrong username or password. ",
      });
    }
  };

  const setLoginSession = (data: any) => {
    const jwt = new JwtStorage("accessToken");
    jwt.token = data?.login.accessToken || null;
  };

  const getCurrentURLRedirect = () => {
    const redirectURL = new URLSearchParams(location.search).get("redirect");
    return redirectURL;
  };

  const redirectToRouter = (pathname: string) => {
    if (pathname) {
      location.href = location.origin + pathname;
    } else {
      location.href = "/dashboard";
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                    onClick={() =>
                      setLoginMethod(LoginMethodType.UsernamePassowrd)
                    }
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src="/img/certificate.svg"
                    />
                    Credential
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
                    Google
                  </button>
                </div>
                {!!loginMethod &&
                  loginMethod === LoginMethodType.UsernamePassowrd && (
                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                  )}
              </div>
              {!!loginMethod &&
                loginMethod === LoginMethodType.UsernamePassowrd && (
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                      {loginState.error && (
                        <>
                          <br />
                          <small style={{ color: "red" }}>
                            {loginState.errorMessage}
                          </small>
                        </>
                      )}
                    </div>
                    <Form
                      onSubmit={onLogin}
                      validate={onLoginFormValidation}
                      render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                          <Field
                            name="email"
                            render={({ input, meta }) => (
                              <div className="relative w-full mb-3">
                                <label
                                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                  htmlFor="grid-password"
                                >
                                  Email
                                </label>
                                <input
                                  type="text"
                                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                  placeholder="Email"
                                  {...input}
                                />
                                {meta.touched && meta.error && (
                                  <span style={{ color: "red" }}>
                                    {meta.error}
                                  </span>
                                )}
                              </div>
                            )}
                          />

                          <Field
                            name="password"
                            render={({ input, meta }) => (
                              <div className="relative w-full mb-3">
                                <label
                                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                  htmlFor="grid-password"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                  placeholder="Password"
                                  {...input}
                                />
                                {meta.touched && meta.error && (
                                  <span style={{ color: "red" }}>
                                    {meta.error}
                                  </span>
                                )}
                              </div>
                            )}
                          />

                          <div className="text-center mt-6">
                            <button
                              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                              type="submit"
                            >
                              Sign In
                            </button>
                          </div>
                        </form>
                      )}
                    />
                  </div>
                )}
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/register">
                  <a href="#pablo" className="text-blueGray-200">
                    <small>Create new account</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

Login.layout = Auth;
