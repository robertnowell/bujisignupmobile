import React from "react";
import styled from "styled-components";
import { InterBoldWhite12px, ValignTextMiddle } from "../../styledMixins";


function X3ContainedAText(props) {
  const { children } = props;

  return (
    <X3ContainedAText1>
      <Label>{children}</Label>
    </X3ContainedAText1>
  );
}

const X3ContainedAText1 = styled.div`
  position: absolute;
  height: 32px;
  top: 0;
  left: 0;
  display: flex;
  padding: 7px 14px;
  align-items: flex-end;
  min-width: 60px;
  background-color: var(--eerie-black);
  border-radius: 4px;
`;

const Label = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite12px}
            height: 15px;
  min-width: 28px;
  letter-spacing: 0;
`;

export default X3ContainedAText;
