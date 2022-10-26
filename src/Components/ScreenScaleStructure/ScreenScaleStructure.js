import React from "react";
import Button from "react-bootstrap/esm/Button";
import "./ScreenScaleStructure.scss";
import { v4 as uuidv4 } from "uuid";

const ScreenScaleStructure = (props) => {
  return (
    <div className="screen-scale-structure">
      {props.scale.map((note) => {
        return (
          <Button className="buttonNote" variant="secondary" key={uuidv4()}>
            {note}
          </Button>
        );
      })}
    </div>
  );
};

export default ScreenScaleStructure;
