import React from "react";
import { JwtStorage } from "../../common/auth/jwt/jwt";

export interface SessionProps {
  children: React.ReactNode;
}

export const withSession = (WrappedComponent: React.FC): any => {
  class SessionHOC extends React.Component {
    state = {
      isValid: null,
      restPath: "",
    };

    componentDidMount() {
      // set rest path
      const restPath = location.pathname;

      // check localstorage token
      const { isValid } = new JwtStorage("accessToken");

      this.setState({ isValid, restPath });
    }

    render() {
      if (this.state.isValid === null) {
        return <p>Loading...</p>;
      }

      if (this.state.isValid) {
        return <WrappedComponent {...this.props} />;
      } else {
        const restPathWithQuery = this.state.restPath
          ? `?redirect=${this.state.restPath}`
          : "";

        location.href = `/auth/login${restPathWithQuery}`;
      }
    }
  }
  return SessionHOC;
};
