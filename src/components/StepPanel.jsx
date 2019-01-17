import React from "react";
import { connect } from "react-redux";
import { Step, Container } from "semantic-ui-react";
import PropTypes from "prop-types";

const StepPanel = ({ step }) => {
  // defining of actual status of a step
  const stepStatus = s => {
    if (s > step) {
      return "disabled";
    } else if (s === step) {
      return "active";
    } else {
      return "complited";
    }
  };
  return (
    <Container textAlign="center" className="App">
      <Step.Group
        fluid
        size="huge"
        style={{ marginBottom: "20px", color: "red" }}
      >
        <Step className={stepStatus(1)} style={{ color: "#2ECC40" }}>
          <Step.Content>
            <Step.Title> Discovery Sourse</Step.Title>
          </Step.Content>
        </Step>

        <Step className={stepStatus(2)} style={{ color: "#2ECC40" }}>
          <Step.Content>
            <Step.Title>Discovery Options</Step.Title>
          </Step.Content>
        </Step>

        <Step className={stepStatus(3)} style={{ color: "#2ECC40" }}>
          <Step.Content>
            <Step.Title> Discovery Input Data</Step.Title>
          </Step.Content>
        </Step>
        <Step className={stepStatus(4)} style={{ color: "#2ECC40" }}>
          <Step.Content>
            <Step.Title>Summary</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    step: state.step
  };
}

StepPanel.propTypes = {
  step: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  null
)(StepPanel);
