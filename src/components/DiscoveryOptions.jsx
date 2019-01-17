import React, { Component } from "react";
import { connect } from "react-redux";
import { discoveryOptionsValid } from "../redux/actions/discoveryInputDataActions/discoveryInputActions";
import { toggleHandlerSNMP } from "../redux/actions/discoveryOptionsActions/discoveryOptionsAction";
import PropTypes from "prop-types";
import {
  Accordion,
  Menu,
  Form,
  Container,
  Message,
  Header
} from "semantic-ui-react";

class DiscoveryOptions extends Component {
  state = {
    activeIndex: 0
  };

  handleClick = (e, titleProps) => {
    //TOGGLE FOR AN ACCORDION
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleCheckBox = (event, { value }) => {
    // GETTING CHECKBOX VALUE
    this.props.discoveryOptionsValid(value);
  };

  render() {
    const { activeIndex } = this.state;
    const { discoveryOptionsCheckboxValue, step, toggleSNMP } = this.props;
    return (
      <Container>
        <Accordion
          as={Menu}
          vertical
          fluid
          style={{ backgroundColor: "#2F363D" }}
        >
          <Menu.Item>
            <Accordion.Title
              style={{ color: "#D3D3D3" }}
              active={activeIndex === 1}
              content={
                <Header as="h2" style={{ color: "#D3D3D3", margin: 0 }}>
                  Discovery Options
                </Header>
              }
              index={1}
              onClick={this.handleClick}
            />

            <Accordion.Content active={activeIndex === 1}>
              <Form>
                <Form.Group grouped>
                  <Form.Checkbox
                    style={{ fontSize: 20, color: "blue" }}
                    label="SNMP"
                    value="snmp"
                    onChange={this.handleCheckBox}
                    checked={toggleSNMP}
                    onClick={() => this.props.toggleHandlerSNMP()}
                  />
                  <Form.Checkbox
                    style={{ fontSize: 20 }}
                    label="Link"
                    value="link"
                    onChange={this.handleCheckBox}
                  />
                  <Form.Checkbox
                    style={{ fontSize: 20 }}
                    label="VLAN"
                    value="vlan"
                    onChange={this.handleCheckBox}
                  />

                  <Form.Checkbox
                    style={{ fontSize: 20 }}
                    label="Ports"
                    value="ports"
                    onChange={this.handleCheckBox}
                  />
                </Form.Group>
              </Form>
            </Accordion.Content>
          </Menu.Item>
        </Accordion>
        {discoveryOptionsCheckboxValue === null &&
        step > 2 && ( // ON EMPTY CHECKBOXES
            <Message error>
              <h3>Error</h3>
              <p>This section is empty</p>
            </Message>
          )}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    discoveryOptionsCheckboxValue: state.discoveryOptionsCheckboxValue,
    step: state.step,
    toggleSNMP: state.toggleSNMP
  };
}

function mapDispatchToProps(dispatch) {
  return {
    discoveryOptionsValid: function(event) {
      dispatch(discoveryOptionsValid(event));
    },
    toggleHandlerSNMP: function() {
      dispatch(toggleHandlerSNMP());
    }
  };
}
DiscoveryOptions.propTypes = {
  discoveryOptionsCheckboxValue: PropTypes.string,
  step: PropTypes.number.isRequired,
  toggleSNMP: PropTypes.bool.isRequired,
  discoveryOptionsValid: PropTypes.func.isRequired,
  toggleHandlerSNMP: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoveryOptions);
