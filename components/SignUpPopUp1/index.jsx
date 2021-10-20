import React from "react";
import X2OutlinedcFocused from "../X2OutlinedcFocused";
import X2OutlinedcFocused2 from "../X2OutlinedcFocused2";
import X2OutlinedcFocused3 from "../X2OutlinedcFocused3";
import X2OutlinedcFocused4 from "../X2OutlinedcFocused4";
import X3ContainedAText from "../X3ContainedAText";
import styled from "styled-components";
import { InterNormalCodGray8px, InterSemiBoldBlack12px, ValignTextMiddle } from "../../styledMixins";
import "./SignUpPopUp1.css";

function SignUpPopUp1(props) {
  const {
    text1,
    text2,
    x2OutlinedcFocusedProps,
    x2OutlinedcFocused2Props,
    x2OutlinedcFocused2Props2,
    x2OutlinedcFocused3Props,
    x2OutlinedcFocused3Props2,
    x2OutlinedcFocused4Props,
    x3ContainedATextProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sign-up-pop-up-1 screen">
        <FAB>
          <Navigationclose24px src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f4c0578ab6210ac568a82/img/navigation-close-24px@2x.svg" />
        </FAB>
        <InterestedInStreamingSignUpToGetSta src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f4c0578ab6210ac568a82/img/interested-in-streaming--sign-up-to-get-started-today--1@2x.svg" />
        <Group32>
          <Text1>{text1}</Text1>
          <Text2>{text2}</Text2>
        </Group32>
        <FlexRow>
          <X2OutlinedcFocused inputText={x2OutlinedcFocusedProps.inputText} label2={x2OutlinedcFocusedProps.label2} />
          <X2OutlinedcFocused2
            inputText={x2OutlinedcFocused2Props.inputText}
            label2={x2OutlinedcFocused2Props.label2}
          />
        </FlexRow>
        <X2OutlinedcFocused
          inputText={x2OutlinedcFocused2Props2.inputText}
          label2={x2OutlinedcFocused2Props2.label2}
          className={x2OutlinedcFocused2Props2.className}
        />
        <FlexRow1>
          <X2OutlinedcFocused3
            inputText={x2OutlinedcFocused3Props.inputText}
            label2={x2OutlinedcFocused3Props.label2}
            assistiveText={x2OutlinedcFocused3Props.assistiveText}
          />
          <X2OutlinedcFocused
            inputText={x2OutlinedcFocused3Props2.inputText}
            label2={x2OutlinedcFocused3Props2.label2}
            className={x2OutlinedcFocused3Props2.className}
          />
        </FlexRow1>
        <X2OutlinedcFocused4
          inputText={x2OutlinedcFocused4Props.inputText}
          label2={x2OutlinedcFocused4Props.label2}
          assistiveText={x2OutlinedcFocused4Props.assistiveText}
        />
        <OverlapGroup6>
          <X3ContainedAText>{x3ContainedATextProps.children}</X3ContainedAText>
          <X24ArrowsChevronRight src="https://anima-uploads.s3.amazonaws.com/projects/61313a43f2101cd25d04299e/releases/616f4c0578ab6210ac568a82/img/24---arrows---chevron-right-1@2x.svg" />
        </OverlapGroup6>
      </div>
    </div>
  );
}

const FAB = styled.div`
  height: 40px;
  margin-top: -20px;
  align-self: flex-end;
  display: flex;
  padding: 0 11px;
  align-items: center;
  min-width: 40px;
  background-color: var(--eerie-black);
  border-radius: 50px;
  box-shadow: 0px 2px 4px #00000033, 0px 1px 10px #0000001f, 0px 4px 5px #00000024;
`;

const Navigationclose24px = styled.img`
  width: 18px;
  height: 18px;
`;

const InterestedInStreamingSignUpToGetSta = styled.img`
  width: 225px;
  height: 55px;
  margin-top: 50px;
`;

const Group32 = styled.div`
  align-self: flex-end;
  margin-top: 38px;
  margin-right: 21.03px;
  display: flex;
  align-items: flex-end;
  min-width: 106px;
`;

const Text1 = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldBlack12px}
            width: 4px;
  height: 6px;
  margin-bottom: 0.08px;
  text-align: center;
  letter-spacing: 0;
`;

const Text2 = styled.div`
  ${ValignTextMiddle}
  ${InterNormalCodGray8px}
            width: 97px;
  height: 10px;
  margin-left: 1px;
  text-align: center;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  height: 60px;
  position: relative;
  margin-top: 16px;
  margin-right: 7.45px;
  display: flex;
  align-items: flex-start;
  min-width: 266px;
`;

const FlexRow1 = styled.div`
  height: 60px;
  position: relative;
  margin-top: 16px;
  margin-right: 8.42px;
  display: flex;
  align-items: flex-start;
  min-width: 265px;
`;

const OverlapGroup6 = styled.div`
  width: 60px;
  height: 32px;
  position: relative;
  align-self: flex-end;
  margin-top: 23px;
  margin-right: 25px;
  border-radius: 4px;
`;

const X24ArrowsChevronRight = styled.img`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 14px;
  left: 44px;
`;

export default SignUpPopUp1;
