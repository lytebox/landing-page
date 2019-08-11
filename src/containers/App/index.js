import React from "react";
import HelloWorld from "../../components/HelloWorld";

import { AppContainer } from "./style";

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <HelloWorld />
      </AppContainer>
    );
  }
}

App.propTypes = {};

export default App;
