import React from "react";
import Button from "react-bootstrap/esm/Button";
import "./ScreenScaleStructure.scss";
import { v4 as uuidv4 } from "uuid";

const ScreenScaleStructure = (props) => {
  return (
    <div className="screen-scale-structure">
      {props.scale.map((note, i) => {
        console.log(props.noteDefine);
        return (
          <>
            <div>
              <span className="note-define-degrees" key={uuidv4()}>
                {props.noteDefine.degrees[i]}
              </span>
              <Button className="buttonNote" variant="secondary" key={uuidv4()}>
                {note}
              </Button>
              <span className="note-define" key={uuidv4()}>
                {props.noteDefine.intervals[i]}
              </span>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ScreenScaleStructure;
