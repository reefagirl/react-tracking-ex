import React from "react";
import Button from "../components/Button";
import { useTracking } from "react-tracking";

export function Users() {
  const { trackEvent } = useTracking();

  const onClick = () => {
    trackEvent({ event: "users-click" });
  };

  return (
    <div>
      <h2>Users</h2>
      <Button onClick={onClick}>Who</Button>
    </div>
  );
}
