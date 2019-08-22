import React from "react";
import LandingPage from "../../components/LandingPage";
import NavBar from "../../components/NavBar";
import { Helmet } from "react-helmet";

import { AppContainer } from "./style";

const App = () => (
  <AppContainer>
    <Helmet>
      <title>LYTEBOX - All in one web-based multimedia suite </title>
      <link rel="canonical" href="http://lytebox.studio" />
      <meta
        name="description"
        content="Lytebox is the world's first web-based all in one multimedia suite."
      />
    </Helmet>
    <NavBar />
    <LandingPage />
  </AppContainer>
);

App.propTypes = {};

export default App;
