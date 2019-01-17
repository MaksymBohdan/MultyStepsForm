import React, { Component } from "react";
import { connect } from "react-redux";
import {
  contextNameInput,
  contextEngineInput,
  authenticationInput,
  authenticationAndPrivacy,
  SNMPVersionValue
} from "../redux/actions/discoveryInputDataActions/discoveryInputActions";
import DiscoveryInputDataV1V2 from "./DiscoveryInputDataV1V2";
import PropTypes from "prop-types";
import { Container, Header, Dropdown, Form } from "semantic-ui-react";

class DiscoveryInputDataV3 extends Component {
  state = {
    options: [
      {
        key: 1,
        text: "Autantication and No Privacy",
        value: "Autantication and No Privacy"
      }
    ]
  };

  handleChangeAuth = (e, { value }) => {
    // GETTING RADIO DATA
    this.props.SNMPVersionValue(value);
  };

  getAuthValue = (event, data) => {
    // GETTING DROPDOWN DATA
    let val = data.value;
    this.props.authenticationAndPrivacy(val);
  };

  render() {
    const { options } = this.state;
    const {
      contextNameInput,
      contextEngineInput,
      authenticationInput,
      code
    } = this.props;

    return (
      <Container>
        <DiscoveryInputDataV1V2 />
        <Dropdown
          style={{ marginTop: 25 }}
          fluid
          selection
          options={options}
          value={options.value}
          placeholder="Autantication and No Privacy"
          onChange={this.getAuthValue}
        />

        <Header as="h3" style={{ color: "#D3D3D3" }}>
          Context Name
        </Header>
        <Form.Input
          onChange={contextNameInput}
          name="contextName"
          type="text"
          fluid
          placeholder="sample context"
        />

        <Header as="h3" style={{ color: "#D3D3D3" }}>
          Context Engine ID
        </Header>
        <Form.Input
          onChange={contextEngineInput}
          name="contextEngineID"
          type="text"
          fluid
          placeholder="sample engine"
        />
        <Header as="h3" style={{ color: "#D3D3D3" }}>
          Authentication Algorithm
        </Header>
        <Form>
          <Container textAlign="center">
            <Form.Group inline widths="5">
              <Form.Radio
                label="MD5"
                value="md5"
                checked={code === "md5"}
                onChange={this.handleChangeAuth}
              />
              <Form.Radio
                label="SHA"
                value="sha"
                checked={code === "sha"}
                onChange={this.handleChangeAuth}
              />
              <Form.Radio
                label="HMAC128"
                value="hmac128"
                checked={code === "hmac128"}
                onChange={this.handleChangeAuth}
              />
              <Form.Radio
                label="HMAC192"
                value="hmac192"
                checked={code === "hmac192"}
                onChange={this.handleChangeAuth}
              />
              <Form.Radio
                label="HMAC384"
                value="hmac384"
                checked={code === "hmac384"}
                onChange={this.handleChangeAuth}
              />
            </Form.Group>
          </Container>
        </Form>
        <Header as="h3" style={{ color: "#D3D3D3" }}>
          Authentication Password
        </Header>
        <Form.Input
          onChange={authenticationInput}
          name="authenticationPassword"
          type="password"
          fluid
          placeholder="random password"
        />
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    code: state.code
  };
}

function mapDispatchToProps(dispatch) {
  return {
    contextNameInput: function(event) {
      dispatch(contextNameInput(event));
    },
    contextEngineInput: function(event) {
      dispatch(contextEngineInput(event));
    },
    authenticationInput: function(event) {
      dispatch(authenticationInput(event));
    },
    authenticationAndPrivacy: function(data) {
      dispatch(authenticationAndPrivacy(data));
    },
    SNMPVersionValue: function(data) {
      dispatch(SNMPVersionValue(data));
    }
  };
}

DiscoveryInputDataV3.propTypes = {
  code: PropTypes.string,
  contextNameInput: PropTypes.func.isRequired,
  contextEngineInput: PropTypes.func.isRequired,
  authenticationInput: PropTypes.func.isRequired,
  authenticationAndPrivacy: PropTypes.func.isRequired,
  SNMPVersionValue: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoveryInputDataV3);
