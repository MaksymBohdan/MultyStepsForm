import React, { Component } from "react";
import {
  Header,
  Form,
  Container,
  Accordion,
  Menu
} from "semantic-ui-react";
import DiscoveryInputDataV1V2 from "./DiscoveryInputDataV1V2";
import DiscoveryInputDataV3 from "./DiscoveryInputDataV3";

class DiscoveryInputData extends Component {
  state = {
    radioValue: "",
    activeIndex: 0
  };

  handleChange = (e, { value }) => {
    // GETTING VALUE OF RADIO FORM
    this.setState({
      radioValue: value
    });
  };

  handleClick = (e, titleProps) => {
    //TOGGLE FOR AN ACCORDION
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { radioValue, activeIndex } = this.state;

    return (
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
                Selected Options
              </Header>
            }
            index={1}
            onClick={this.handleClick}
          />

          <Accordion.Content active={activeIndex === 1}>
            <Header as="h3" style={{ color: "#D3D3D3", paddingTop: 15 }}>
              SNMP Version
            </Header>
            <Form>
              <Container textAlign="center">
                <Form.Group inline widths="3">
                  <Form.Radio
                    label="V1"
                    value="v1"
                    checked={radioValue === "v1"}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label="V2"
                    value="v2"
                    checked={radioValue === "v2"}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label="V3"
                    value="v3"
                    checked={radioValue === "v3"}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Container>
            </Form>

            {(radioValue === "v1" && <DiscoveryInputDataV1V2 />) || // RENDERION ON DEFINITE RADIO FORM VALUE
              (radioValue === "v2" && <DiscoveryInputDataV1V2 />)}
            {radioValue === "v3" && <DiscoveryInputDataV3 />}
          </Accordion.Content>
        </Menu.Item>
      </Accordion>
    );
  }
}

export default DiscoveryInputData;
