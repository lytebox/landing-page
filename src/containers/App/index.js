import React from "react";
import LandingPage from "../../components/LandingPage";
import NavBar from "../../components/NavBar";

import { AppContainer } from "./style";

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <NavBar/>
        <LandingPage />
      </AppContainer>
    );
  }
}

App.propTypes = {};

export default App;
