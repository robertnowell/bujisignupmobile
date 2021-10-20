import React from "react";
import styled from "styled-components";
import { RobotoNormalPinkSwan12px, RobotoNormalMediumPurple8px } from "../../styledMixins";


function X2OutlinedcFocused(props) {
  const { inputText, label2, className } = props;

  return (
    <X2OutlinedcFocused1 className={`x2-outlinedc-focused ${className || ""}`}>
      <OverlapGroup2 className="overlap-group2">
        <Label
          className="label"
          src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f924e07a4519d2178219c/img/label-2@2x.svg"
        />
        <InputText className="input-text">{inputText}</InputText>
        <Label1 className="label-1">
          <Label2 className="label-2">{label2}</Label2>
          <UpperSurface
            className="upper-surface"
            src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f4c0578ab6210ac568a82/img/upper-surface-10@2x.svg"
          />
        </Label1>
      </OverlapGroup2>
    </X2OutlinedcFocused1>
  );
}

const X2OutlinedcFocused1 = styled.div`
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 124px;

  &.x2-outlinedc-focused.x2-outlinedc-focused-1 {
    margin-top: 16px;
    margin-right: 7.45px;
    min-width: 266px;
  }

  &.x2-outlinedc-focused.x2-outlinedc-focused-2 {
    margin-left: 17px;
  }
`;

const OverlapGroup2 = styled.div`
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
  min-width: 49px;
  letter-spacing: 0.4px;
  line-height: 16px;
  white-space: nowrap;
`;

const UpperSurface = styled.img`
  width: 62px;
  height: 2px;
  align-self: center;
  margin-left: 3px;
`;

const OverlapGroup3 = styled.div`
  .x2-outlinedc-focused.x2-outlinedc-focused-1 & {
    width: 268px;
  }
`;

const Label3 = styled.div`
  .x2-outlinedc-focused.x2-outlinedc-focused-1 & {
    left: 14px;
    min-width: 243px;
  }
`;

const Label4 = styled.div`
  ${RobotoNormalMediumPurple8px}

  .x2-outlinedc-focused.x2-outlinedc-focused-1  & {
    min-width: 46px;
  }
`;

const UpperSurface1 = styled.img`
  .x2-outlinedc-focused.x2-outlinedc-focused-1 & {
    width: 195px;
    margin-left: 2px;
  }
`;

const Label5 = styled.div`
  ${RobotoNormalMediumPurple8px}

  .x2-outlinedc-focused.x2-outlinedc-focused-2  & {
    min-width: 79px;
  }
`;

const UpperSurface2 = styled.img`
  .x2-outlinedc-focused.x2-outlinedc-focused-2 & {
    width: 32px;
  }
`;

export default X2OutlinedcFocused;
