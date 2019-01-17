import React from "react";
import { connect } from "react-redux";
import DiscoverySourse from "./DiscoverySourse";
import { Container, Grid } from "semantic-ui-react";
import DiscoveryOptions from "./DiscoveryOptions";
import ButtonsPanel from "./ButtonsPanel";
import DiscoveryInputData from "./DiscoveryInputData";
import PropTypes from "prop-types";

const MainPanel = ({ step, toggleSNMP }) => {
  switch (
    step //PAGE INTERFACE ON EACH STEP
  ) {
    case 1:
      return (
        <Container>
          <Grid>
            <Grid.Column width={8}>
              <DiscoverySourse />
            </Grid.Column>
          </Grid>
          <ButtonsPanel />
        </Container>
      );
    case 2:
      return (
        <Container>
          <Grid>
            <Grid.Column width={8}>
              <DiscoverySourse />
            </Grid.Column>

            <Grid.Column width={8} floated="right">
              <DiscoveryOptions />
            </Grid.Column>
          </Grid>
          <ButtonsPanel />
        </Container>
      );
    case 3:
      return (
        <Container>
          <Grid>
            <Grid.Column width={8}>
              <DiscoverySourse />
            </Grid.Column>

            <Grid.Column width={8} floated="right">
              <DiscoveryOptions />
            </Grid.Column>
          </Grid>
          {toggleSNMP === true && <DiscoveryInputData />}
          <ButtonsPanel />
        </Container>
      );
    case 4:
      return (
        <Container>
          <Grid>
            <Grid.Column width={8}>
              <DiscoverySourse />
            </Grid.Column>

            <Grid.Column width={8} floated="right">
              <DiscoveryOptions />
            </Grid.Column>
          </Grid>
          {toggleSNMP === true && <DiscoveryInputData />}
          <ButtonsPanel />
        </Container>
      );
    default:
      return;
  }
};

function mapStateToProps(state) {
  return {
    step: state.step,
    toggleSNMP: state.toggleSNMP
  };
}

MainPanel.propTypes = {
  step: PropTypes.number.isRequired,
  toggleSNMP: PropTypes.bool.isRequired
};
export default connect(
  mapStateToProps,
  null
)(MainPanel);
