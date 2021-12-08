import React from "react";
import styled from "styled-components";

function Button(props) {
  return (
    <StyledButton id={props.id} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: #ff880a;
  display: inline-flex;
  padding: 8px 16px;
  color: white;
  border-radius: 2px;
`;

export default Button;
