import React, { useContext } from "react";
import Fretboard from "./Fretboard/Fretboard.js";
import "./Guitar.scss";
import InfoCase from "./InfoCase/InfoCase.js";
import String from "./Strings/String.js";
import { v4 as uuidv4 } from "uuid";
import {
  displayScale,
  scaleConstructor,
  scaleGenerator,
  selectScale,
} from "../../Services/scaleGenerator.js";
import { scales } from "../../Data/scaleData.js";
import { UserInputContext } from "../../Context/UserInputContext.js";

const Guitar = () => {
  let nbOfFrets = 23;
  let tunning = ["E", "A", "D", "G", "B", "E"];

  const { userInputs } = useContext(UserInputContext);

  // const scaleToDisplay= scaleGenerator(userInputs.rootNote, userInputs.scaleType, nbOfFrets, tunning);
  // const scaleToDisplay= scaleGenerator("C", userInputs.scaleType, nbOfFrets, tunning);

  const typeInfoCase = [
    "voidString",
    "voidStringRoot",
    "voidString2",
    "voidString3",
    "voidStringRoot4",
    "voidString5",
    "voidString6",
    "voidStringRoot7",
    "lambdaVoidString",
  ];

  const conditionNote = userInputs.note === "" ? "C" : userInputs.note;
  const conditionScale =
    userInputs.scale === ""
      ? scales[0].naturalMajorScale
      : selectScale(userInputs);
  const conditionAlt = userInputs.alt === "" ? "#" : userInputs.alt;

  const scaleToDisplay = scaleGenerator(
    conditionNote,
    conditionScale,
    conditionAlt,
    0
  );

  return (
    <>
      <h1 className="title-guitar">
        {`${userInputs.note} ${userInputs.scale}`}
      </h1>
      <div className="guitar">
        <Fretboard
          nbStrings={tunning.length}
          nbOfFrets={nbOfFrets}
          tunning={tunning}
          // hide={displayScale(caseNumber, scaleToDisplay)}
        />
        <div className="voidString">
          {tunning.map((note, i) => (
            <InfoCase
              key={uuidv4()}
              type={"lambdaVoidString"}
              index={i + 1}
              info={note}
              id={`${note}${i === 5 || i === 4 || i === 3 ? "1" : "0"}-${
                i + 1
              }`}
              hide={displayScale(note, scaleToDisplay)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Guitar;
