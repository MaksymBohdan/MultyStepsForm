import React, { Component } from "react";
import { connect } from "react-redux";
import {
  dropDownValAction,
  endIpAction,
  startIpAction,
  singleIpAction
} from "../redux/actions/discoverySourseActions/discoverySourseActions";
import PropTypes from "prop-types";
import {
  Dropdown,
  Header,
  Icon,
  Modal,
  Button,
  Input,
  Container,
  Form,
  Accordion,
  Menu,
  Message
} from "semantic-ui-react";

class DiscoverySourse extends Component {
  state = {
    fileName: "",
    modalStatus: false,
    options: [
      { key: 1, text: "IP", value: "IP" },
      { key: 2, text: "IP Range", value: "IP Range" },
      { key: 3, text: "CSV", value: "CSV" }
    ],
    activeIndex: 0
  };

  dropdownHundler = (event, data) => {
    // GETTING VALUE FROM DISCOVERY SOURSE DROPDOWN
    this.props.dropDownValAction(data.value);
  };

  uploadFile = event => {
    // GETTING INFO OF UPLOADED FILE
    let file = event.target.files[0];
    let uploadedFileName = file.name;
    if (!uploadedFileName) {
      return;
    }
    this.setState({
      fileName: uploadedFileName
    });
  };

  cancelUploading = () => {
    // CLEARING DATA OF UPLOADED FILE
    this.setState({
      fileName: ""
    });
    this.modalToggle();
  };

  modalToggle = () => {
    //TOGGLE FOR UPLOADING MODAL
    this.setState(previous => ({
      modalStatus: !previous.modalStatus
    }));
  };

  handleClickDiscoverySourse = (e, titleProps) => {
    // TOGGLE FOR AN ACCORDION
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { fileName, modalStatus, options, activeIndex } = this.state;
    const {
      singleIPValue,
      ipValidated,
      singleIP,
      startIP,
      endIP,
      dropdownValue
    } = this.props;

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
                Discovery Sourse
              </Header>
            }
            index={1}
            onClick={this.handleClickDiscoverySourse}
          />
          <Accordion.Content active={activeIndex === 1}>
            <Dropdown
              fluid
              selection
              options={options}
              placeholder="Select Discovery Sourse"
              value={dropdownValue}
              onChange={this.dropdownHundler}
            />

            {dropdownValue === "IP" ? (
              <Container>
                <Header as="h3" style={{ color: "#D3D3D3", paddingTop: 15 }}>
                  IP
                </Header>
                <Form.Input
                  onChange={singleIP}
                  name="singleIp"
                  type="text"
                  fluid
                  placeholder="e.g. 1.2.3.4"
                />
              </Container>
            ) : null}

            {dropdownValue === "IP Range" ? (
              <Container>
                <Header as="h3" style={{ color: "#D3D3D3", marginTop: 15 }}>
                  Starting IP Adress
                </Header>
                <Form.Input
                  onChange={startIP}
                  name="startIp"
                  type="text"
                  fluid
                  placeholder="e.g. 1.2.3.4"
                />

                <Header as="h3" style={{ color: "#D3D3D3" }}>
                  Ending IP Adress
                </Header>
                <Form.Input
                  onChange={endIP}
                  name="endIp"
                  type="text"
                  fluid
                  placeholder="e.g. 1.2.3.250"
                />
              </Container>
            ) : null}

            {dropdownValue === "CSV" ? (
              <Container>
                <Modal basic size="large"
                  trigger={
                    <Container fluid textAlign="center">
                      <Button
                        size="huge"
                        color="teal"
                        style={{ marginTop: 15 }}
                        onClick={this.modalToggle}
                      >
                        Select a file...
                      </Button>
                    </Container>
                  }
                  open={modalStatus}
                >
                  <Modal.Header as="h3" style={{ color: "#D3D3D3"}} >Select a file</Modal.Header>
                  <Input
                  style={{ color: "#D3D3D3", paddingTop: 15 }}
                    fluid
                    size="large"
                    label="UPLOAD FILE"
                    name="file"
                    type="file"
                    onChange={this.uploadFile}
                  />
                  <Modal.Actions>
                    <Button color="green" inverted size="huge" onClick={this.modalToggle}>
                      <Icon name="checkmark" /> Upload
                    </Button>

                    <Button color="red" size="huge" inverted onClick={this.cancelUploading}>
                      <Icon name="remove" /> Cancel
                    </Button>
                  </Modal.Actions>
                </Modal>
                {fileName.length > 0 && (
                  <Header>Seled file: C:\fakepath\{fileName}</Header>
                )}
              </Container>
            ) : null}
          </Accordion.Content>
        </Menu.Item>
        {ipValidated === false &&
        singleIPValue.length === 0 &&
        fileName.length === 0 && ( //ON IP INPUT MISTAKE
            <Message error>
              <h3>Error</h3>
              <p>Your IP is invalid</p>
            </Message>
          )}
      </Accordion>
    );
  }
}

function mapStateToProps(state) {
  return {
    ipValidated: state.ipValidated,
    dropdownValue: state.dropdownValue,
    singleIPValue: state.singleIP
  };
}

function mapDispatchToProps(dispatch) {
  return {
    singleIP: function(event) {
      dispatch(singleIpAction(event));
    },
    startIP: function(event) {
      dispatch(startIpAction(event));
    },
    endIP: function(event) {
      dispatch(endIpAction(event));
    },
    dropDownValAction: function(data) {
      dispatch(dropDownValAction(data));
    }
  };
}

DiscoverySourse.propTypes = {
  dropdownValue: PropTypes.string,
  ipValidated: PropTypes.bool.isRequired,
  singleIPValue: PropTypes.string.isRequired,
  singleIP: PropTypes.func.isRequired,
  startIP: PropTypes.func.isRequired,
  endIP: PropTypes.func.isRequired,
  dropDownValAction: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverySourse);
