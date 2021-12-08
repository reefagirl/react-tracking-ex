import React from "react";
import Button from "../components/Button";
import track, { useTracking } from "react-tracking";

export const About = props => {
  const { trackEvent } = useTracking();

  const onClick = () => {
    console.log("Tracking data", props.tracking.getTrackingData());

    // This is an example where we are sending an object along with event name
    trackEvent({ event: "about-click", props: { a: 1, b: 2 } });
  };

  return (
    <div>
      <h2>About</h2>
      <Button onClick={onClick}>Why</Button>
    </div>
  );
};

// By wrapping the functional component in this track function
// we get the value of "page" along with every track called in About
// Note: These are the same arguments as using a decorator for class components
//  From NYT: although this is obviously awkward and the decorator syntax is recommended.
export const TrackedAbout = track(
  { page: "About" },
  { dispatchOnMount: contextData => ({ event: "pageLoaded" }) }
)(About);
