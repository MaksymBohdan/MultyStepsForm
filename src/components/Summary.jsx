import React, { Component } from "react";
import { connect } from "react-redux";
import {prevStep} from '../redux/actions/buttonPanelActions/buttonPanellAllActions';
import PropTypes from 'prop-types';
import { Modal, Icon, Button } from "semantic-ui-react";

class Summary extends Component {
  state = {
    objectFin: "",
  };

  componentDidMount() { // STARTING OF SUMMARY METHOD
    this.summaryMethod();
  }
  summaryMethod = () => { // VALIDATION OF STATE FILDS AND CREATION OF JSON OBJ
    let obj = {
      content: {
        snmpConfig: {
          version: "3",
          snmpv1: null,
          snmpv2: null,
          snmpv3: {
            readCommunity: `${this.props.readCommunity}`,
            securityOptions: `${this.props.securityOptions}`,
            contextName: `${this.props.contextName}`,
            contextEngineID: `${this.props.contextEngine}`,
            authenticationAlgorithm: {
              password: `${this.props.authenticationAlgorithm}`,
              code: `${this.props.code}`
            }
          },
          encryptionAlgorithm: {
            code: ""
          }
        }
      }
    };

    let objNew = {};

    if (this.props.dropdownValue === "IP") {
      let objIP = {
        inputType: "IP",
        ipAddress: `${this.props.singleIP}`
      };
      objNew = { ...objIP, ...obj };
    } else if (this.props.dropdownValue === "IP Range") {
      let objIP = {
        inputType: "IP Range",
        startIPAddress: `${this.props.startIP}`,
        endIPAddress: `${this.props.endIP}`
      };
      objNew = { ...objIP, ...obj };
    } else {
      objNew = { ...obj };
    }

    let objPrased = JSON.stringify(objNew);
    this.setState({
      objectFin: objPrased
    });
  };
  reload =()=>{ // ON SUMBIT AND RESTART FUNCTION 
    window.location.reload()
  }

  render() {
    const {objectFin} = this.state;
    return (
      <div>
        <Modal open={true} basic size="large">
          <Modal.Content style={{fontSize:20}}>
           {objectFin}
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="red" size="big" inverted onClick={()=>this.props.prevStep(1)}>
              <Icon  name="remove" /> Step back to change
            </Button>
            <Button color="green" size="big" onClick={this.reload} inverted>
              <Icon  name="checkmark" /> Submit and restart
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    readCommunity: state.readCommunity,
    securityOptions: state.securityOptions,
    contextName: state.contextName,
    contextEngine: state.contextEngine,
    code: state.code,
    authenticationAlgorithm: state.authenticationAlgorithm,
    dropdownValue: state.dropdownValue,
    singleIP: state.singleIP,
    startIP: state.startIP,
    endIP: state.endIP,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    prevStep: function(step) {
      dispatch(prevStep(step));
    }
  };
}

Summary.propTypes = {
  readCommunity: PropTypes.string,
  securityOptions: PropTypes.string,
  contextName: PropTypes.string,
  contextEngine: PropTypes.string,
  code: PropTypes.string,
  authenticationAlgorithm: PropTypes.string,
  dropdownValue: PropTypes.string,
  singleIP: PropTypes.string.isRequired,
  startIP: PropTypes.string.isRequired,
  endIP: PropTypes.string.isRequired,
  prevStep:PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
