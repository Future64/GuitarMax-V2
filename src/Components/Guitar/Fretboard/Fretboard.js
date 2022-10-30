import React, { useContext, useEffect, useState } from "react";
import { scales } from "../../../Data/scaleData";
import Fret from "../Fret/Fret";
import Nut from "../Nut/Nut";
import String from "../Strings/String";
import "./Fretboard.scss";
import { v4 as uuidv4 } from "uuid";
import { scaleGenerator } from "../../../Services/scaleGenerator";
import InfoCase from "../InfoCase/InfoCase";
import { UserInputContext } from "../../../Context/UserInputContext";

const Fretboard = ({ nbStrings, nbOfFrets, tunning, firstNote }) => {
  const { userInputs } = useContext(UserInputContext);
  return (
    <div className="fretboard">
      <div className="landmark">
        <div className="circle-landmark circle-landmark3"></div>
        <div className="circle-landmark circle-landmark5"></div>
        <div className="circle-landmark circle-landmark7"></div>
        <div className="circle-landmark circle-landmark9"></div>
        <div className="circle-landmark-box">
          <div className="circle-landmark circle-landmark12top"></div>
          <div className="circle-landmark circle-landmark12bottom"></div>
        </div>
        <div className="circle-landmark circle-landmark15"></div>
        <div className="circle-landmark circle-landmark17"></div>
        <div className="circle-landmark circle-landmark19"></div>
        <div className="circle-landmark circle-landmark21"></div>
      </div>
      <Nut />
      {Array.from(Array(nbOfFrets).keys()).map((fret) => (
        <Fret key={uuidv4()} />
      ))}
      <div className="stringZone">
        {tunning.map((string, i) => (
          <String
            key={uuidv4()}
            stringOrder={`string${i + 1}`}
            userInput={userInputs}
            scaleGenated={scaleGenerator(
              string,
              scales[0].chromaticScale,
              "#",
              nbOfFrets
            )}
            firstNote={string}
            nbOfFrets={nbOfFrets}
          />
        ))}
      </div>
    </div>
  );
};

export default Fretboard;
