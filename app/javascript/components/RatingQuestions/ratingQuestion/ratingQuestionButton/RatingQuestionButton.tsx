import React, { ReactEventHandler } from "react";
import { Button } from "@cultureamp/kaizen-component-library";
import { string } from "prop-types";

interface Props {
  label: string;
  clickHandler?: ReactEventHandler;
}

const sayHello = () => {
  alert("Hello");
};

const RatingQuestionButton = (props: Props) => {
  return <Button label={props.label} onClick={props.clickHandler} />;
};

export default RatingQuestionButton;
