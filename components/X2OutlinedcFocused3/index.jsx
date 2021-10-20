import React from "react";
import styled from "styled-components";
import { RobotoNormalPinkSwan12px, RobotoNormalMediumPurple8px } from "../../styledMixins";


function X2OutlinedcFocused3(props) {
  const { inputText, label2, assistiveText } = props;

  return (
    <X2OutlinedcFocused>
      <OverlapGroup4>
        <Label src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f924e07a4519d2178219c/img/label-4@2x.svg" />
        <InputText>{inputText}</InputText>
        <Label1>
          <Label2>{label2}</Label2>
          <UpperSurface src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f4c0578ab6210ac568a82/img/upper-surface-12@2x.svg" />
        </Label1>
      </OverlapGroup4>
      <AssistiveText>{assistiveText}</AssistiveText>
    </X2OutlinedcFocused>
  );
}

const X2OutlinedcFocused = styled.div`
  width: 124px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 60px;
`;

const OverlapGroup4 = styled.div`
  width: 126px;
  height: 50px;
  position: relative;
  margin-top: -7px;
  margin-right: -1.4px;
`;

const Label = styled.img`
  position: absolute;
  width: 126px;
  height: 44px;
  top: 6px;
  left: 0;
`;

const InputText = styled.div`
  ${RobotoNormalPinkSwan12px}
  position: absolute;
  top: 23px;
  left: 17px;
  letter-spacing: 0.15px;
`;

const Label1 = styled.div`
  position: absolute;
  height: 14px;
  top: 0;
  left: 7px;
  display: flex;
  align-items: flex-start;
  min-width: 113px;
`;

const Label2 = styled.div`
  ${RobotoNormalMediumPurple8px}
  min-height: 16px;
  margin-top: -1px;
  min-width: 45px;
  letter-spacing: 0.4px;
  line-height: 16px;
  white-space: nowrap;
`;

const UpperSurface = styled.img`
  width: 66px;
  height: 2px;
  align-self: center;
  margin-left: 3px;
`;

const AssistiveText = styled.p`
  ${RobotoNormalMediumPurple8px}
  min-height: 9px;
  margin-top: 16px;
  margin-right: -68.4px;
  min-width: 176px;
  letter-spacing: 0.4px;
`;

export default X2OutlinedcFocused3;
