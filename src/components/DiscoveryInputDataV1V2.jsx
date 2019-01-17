import React from "react";
import { connect } from "react-redux";
import { readSNMPV } from "../redux/actions/discoveryInputDataActions/discoveryInputActions";
import PropTypes from "prop-types";
import { Container, Header, Form } from "semantic-ui-react";

const DiscoveryInputDataV1V2 = ({ readSNMPV }) => {
  return (
    <Container>
      <Header as="h3" style={{ color: "#D3D3D3" }}>
        Read Community
      </Header>
      <Form.Input
        onChange={readSNMPV}
        name="readCommunity"
        type="text"
        fluid
        placeholder="public"
      />
    </Container>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    readSNMPV: function(event) {
      dispatch(readSNMPV(event));
    }
  };
}

DiscoveryInputDataV1V2.propTypes = {
  readSNMPV: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(DiscoveryInputDataV1V2);
