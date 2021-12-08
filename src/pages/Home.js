import React from "react";
import Button from "../components/Button";
import track from "react-tracking";

@track(
  { page: "Home" },
  { dispatchOnMount: contextData => ({ event: "pageLoaded" }) }
)
class Home extends React.Component {
  state = {
    clickCount: 1
  };

  @track((props, state, [event]) => ({
    id: event.currentTarget.id,
    event: "click",
    count: state.clickCount
  }))
  onClick = () => {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  };
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Button id="btnHome" onClick={this.onClick}>
          I am here
        </Button>
      </div>
    );
  }
}

export default Home;
