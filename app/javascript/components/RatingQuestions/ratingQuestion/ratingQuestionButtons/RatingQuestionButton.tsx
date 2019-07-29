import React, { ReactEventHandler } from "react";
import { Button } from "@cultureamp/kaizen-component-library";
import { string } from "prop-types";

interface Props {
  label: string;
  clickHandler?: ReactEventHandler;
}

const RatingQuestionButton = (props: Props) => {
  return <Button label={props.label} onClick={props.clickHandler} />;
};

export default RatingQuestionButton;
