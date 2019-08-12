import React from "react";
import LandingPage from "../../components/LandingPage";

import { AppContainer } from "./style";

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <LandingPage />
      </AppContainer>
    );
  }
}

App.propTypes = {};

export default App;
