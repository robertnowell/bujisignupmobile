import React from "react";
import styled from "styled-components";
import { RobotoNormalMediumPurple8px } from "../../styledMixins";


function X2OutlinedcFocused2(props) {
  const { inputText, label2 } = props;

  return (
    <X2OutlinedcFocused>
      <OverlapGroup>
        <Label src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f924e07a4519d2178219c/img/label@2x.svg" />
        <InputText>{inputText}</InputText>
        <Label1>
          <Label2>{label2}</Label2>
          <UpperSurface src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f4c0578ab6210ac568a82/img/upper-surface-8@2x.svg" />
        </Label1>
      </OverlapGroup>
    </X2OutlinedcFocused>
  );
}

const X2OutlinedcFocused = styled.div`
  height: 60px;
  margin-left: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 124px;
`;

const OverlapGroup = styled.div`
  width: 126px;
  height: 50px;
  position: relative;
  margin-top: -7px;
`;

const Label = styled.img`
  position: absolute;
  width: 126px;
  height: 44px;
  top: 6px;
  left: 0;
`;

const InputText = styled.div`
  position: absolute;
  top: 23px;
  left: 17px;
  font-family: var(--font-family-roboto);
  color: var(--pink-swan-2);
  font-size: var(--font-size-s2);
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
  min-width: 49px;
  letter-spacing: 0.4px;
  line-height: 16px;
  white-space: nowrap;
`;

const UpperSurface = styled.img`
  width: 63px;
  height: 2px;
  align-self: center;
  margin-left: 2px;
`;

export default X2OutlinedcFocused2;
