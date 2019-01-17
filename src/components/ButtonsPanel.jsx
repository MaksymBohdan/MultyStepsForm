import React from 'react';
import { connect } from "react-redux";
import { nextStep, prevStep,validationIp} from "../redux/actions/buttonPanelActions/buttonPanellAllActions";
import Summary from "./Summary";
import PropTypes from 'prop-types';
import { Grid, Button} from "semantic-ui-react";


const ButtonsPanel = ({currentStep, nextStep, prevStep, startIPvalue, endIPvalue, validationIp}) => {
  const stepUp = () => { // NEXT STEP FUNCTION
    if (currentStep < 4) {
     nextStep(1);
    } else {
      return;
    }
  };

  const stepDown = () => { // CLEAR/PREVIOUS STEP FUNCTION
    if (currentStep > 1) {
      prevStep(1);
    } else {
      return;
    }
  };

  const getValidatedId = () => { //VALIDATION OF START/END IP'S INPUTS
    const regStart = startIPvalue;
    const regEnd = endIPvalue;

    const pattern = /^((\d\d?|1\d\d|2([0-4]\d|5[0-5]))\.){3}(\d\d?|1\d\d|2([0-4]\d|5[0-5]))$/;
    let validBooleanStart = pattern.test(regStart);
    let validBooleanEnd = pattern.test(regEnd);

    let ipValidated =
      validBooleanStart && validBooleanEnd && regEnd.length > regStart.length;
    
    validationIp(ipValidated);
  };

  const nextStepValidation = () => { // HOF OF NEXT STEP ACTION
      stepUp();
      getValidatedId();
  };
  return (
    <Grid>
        <Grid.Column width={8}>
          <Button size='massive' onClick={stepDown}>
            Clear
          </Button>
        </Grid.Column>
        <Grid.Column width={8} textAlign="right">
          <Button className="positive massive" onClick={nextStepValidation}>
            {currentStep < 3 ? "Next Step" : "Discover"}
            {currentStep === 4 && <Summary />}
          </Button>
        </Grid.Column>
       
      </Grid>
    );

};

function mapStateToProps(state) {
  return {
    currentStep: state.step,
    startIPvalue: state.startIP,
    endIPvalue: state.endIP,
    singleIP: state.singleIP
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nextStep: function(step) {
      dispatch(nextStep(step));
    },
    validationIp: function(bool) {
      dispatch(validationIp(bool));
    },
    prevStep: function(step) {
      dispatch(prevStep(step));
    }
  };
}

ButtonsPanel.propTypes = {
  currentStep: PropTypes.number.isRequired,
  startIPvalue: PropTypes.string.isRequired,
  endIPvalue: PropTypes.string.isRequired,
  singleIP: PropTypes.string.isRequired,
  nextStep:PropTypes.func.isRequired,
  validationIp:PropTypes.func.isRequired,
  prevStep:PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonsPanel);