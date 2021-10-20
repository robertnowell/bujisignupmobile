import React from "react";
import styled from "styled-components";
import { RobotoNormalPinkSwan12px, RobotoNormalMediumPurple8px } from "../../styledMixins";


function X2OutlinedcFocused4(props) {
  const { inputText, label2, assistiveText } = props;

  return (
    <X2OutlinedcFocused>
      <OverlapGroup5>
        <Label src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f924e07a4519d2178219c/img/label-5@2x.svg" />
        <Input>
          <InputText>{inputText}</InputText>
          <Cursor></Cursor>
        </Input>
        <Label1>
          <Label2>{label2}</Label2>
          <UpperSurface src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f4c0578ab6210ac568a82/img/upper-surface-13@2x.svg" />
        </Label1>
      </OverlapGroup5>
      <AssistiveText>{assistiveText}</AssistiveText>
    </X2OutlinedcFocused>
  );
}

const X2OutlinedcFocused = styled.div`
  width: 266px;
  margin-top: 16px;
  margin-right: 7.45px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 60px;
`;

const OverlapGroup5 = styled.div`
  width: 268px;
  height: 50px;
  position: relative;
  margin-top: -7px;
  margin-left: -1px;
`;

const Label = styled.img`
  position: absolute;
  width: 268px;
  height: 44px;
  top: 6px;
  left: 0;
`;

const Input = styled.div`
  position: absolute;
  height: 17px;
  top: 23px;
  left: 17px;
  display: flex;
  align-items: center;
  min-width: 92px;
`;

const InputText = styled.div`
  ${RobotoNormalPinkSwan12px}
  min-height: 14px;
  min-width: 91px;
  letter-spacing: 0.15px;
`;

const Cursor = styled.div`
  width: 1px;
  height: 17px;
  background-color: var(--medium-purple);
`;

const Label1 = styled.div`
  position: absolute;
  height: 14px;
  top: 0;
  left: 14px;
  display: flex;
  align-items: flex-start;
  min-width: 243px;
`;

const Label2 = styled.div`
  ${RobotoNormalMediumPurple8px}
  min-height: 16px;
  margin-top: -1px;
  min-width: 64px;
  letter-spacing: 0.4px;
  line-height: 16px;
  white-space: nowrap;
`;

const UpperSurface = styled.img`
  width: 177px;
  height: 2px;
  align-self: center;
  margin-left: 2px;
`;

const AssistiveText = styled.p`
  ${RobotoNormalMediumPurple8px}
  min-height: 9px;
  margin-top: 16px;
  margin-left: 16px;
  letter-spacing: 0.4px;
`;

export default X2OutlinedcFocused4;
