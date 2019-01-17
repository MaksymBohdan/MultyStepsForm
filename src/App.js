import "./App.css";
import { Container } from "semantic-ui-react";
import StepPanel from './components/StepPanel'
import MainPanel from "./components/MainPanel";

import React from 'react';

const App = () => {
  return (
    <Container>
        <StepPanel/>
        <MainPanel/>
      </Container>
  );
};

export default App;
