import React, { useContext, useEffect, useState } from "react";
import InfoCase from "../InfoCase/InfoCase";
import "./String.scss";
import { v4 as uuidv4 } from "uuid";
import {
  displayScale,
  scaleConstructor,
  scaleGenerator,
  selectScale,
} from "../../../Services/scaleGenerator";
import { UserInputContext } from "../../../Context/UserInputContext";
import { scales } from "../../../Data/scaleData";

const String = ({ stringOrder, scaleGenated, hide, nbOfFrets }) => {
  const nbCases = nbOfFrets;
  const { userInputs } = useContext(UserInputContext);
  const scaleWithoutFirstNote = scaleGenated.slice(1, scaleGenated.length);

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
    "lambdaString",
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

  let tonique = (caseNumber) =>
    scaleToDisplay[0] === caseNumber ? userInputs.tonique : "";
  let tierce = (caseNumber) =>
    scaleToDisplay[2] === caseNumber ? userInputs.tierce : "";
  let quinte = (caseNumber) =>
    scaleToDisplay[4] === caseNumber ? userInputs.quinte : "";
  let septieme = (caseNumber) =>
    scaleToDisplay[6] === caseNumber ? userInputs.septieme : "";
  // console.log(intervalHandler(userInputs, "C", scaleToDisplay));

  return (
    <div className={`string ${stringOrder}`}>
      {scaleWithoutFirstNote.map((caseNumber, i) => (
        <InfoCase
          key={uuidv4()}
          info={caseNumber}
          type="lambdaString"
          id={`${caseNumber}-${stringOrder}-case${i + 1}`}
          index={i}
          hide={displayScale(caseNumber, scaleToDisplay)}
          tonique={userInputs.tonique !== "" ? tonique(caseNumber) : ""}
          tierce={userInputs.tierce !== "" ? tierce(caseNumber) : ""}
          quinte={userInputs.quinte !== "" ? quinte(caseNumber) : ""}
          septieme={userInputs.septieme !== "" ? septieme(caseNumber) : ""}
        />
      ))}
    </div>
  );
};
export default String;
