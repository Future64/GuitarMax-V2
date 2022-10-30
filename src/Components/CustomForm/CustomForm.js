import React, { useContext } from "react";
import "./CustomForm.scss";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Select from "../Select/Select";
import { scales } from "../../Data/scaleData";
import Button from "react-bootstrap/esm/Button";
import { UserInputContext } from "../../Context/UserInputContext";
// import ScreenScaleStructure from "../ScreenScaleStructure/ScreenScaleStructure";
import { scaleGenerator, selectScale } from "../../Services/scaleGenerator";
import ScreenScaleStructure from "../ScreenScaleStructure/ScreenScaleStructure";

const CustomForm = () => {
  const { handleInputChange, userInputs } = useContext(UserInputContext);
  const scaleToSelect = [
    "Chromatique",
    "Pentatonique majeure",
    "Pentatonique mineure",
    "Majeure naturel",
    "Mineure naturel",
    "Mineure Harmonique",
    "Mineure Mélodique",
    "Unitonique",
    "Dimminuée",
    "Augmentée",
    "Bebop Majeur",
    "Bebop Mineur",
    "Mode Ionien",
    "Mode Dorian",
    "Mode Phrygien",
    "Mode Lydien",
    "Mode Mixolydien",
    "Mode Éolien",
    "Mode Locrien",
  ];

  function saveSubmit(e) {
    e.preventDefault();
    if (userInputs.submit === false) {
      userInputs.submit = true;
      return userInputs;
    }
    userInputs.submit = false;
    return userInputs;
  }

  // const ScreenScaleStructure = ({ scale }) => {
  //   const scaleToDisplay = scaleGenerator(
  //     userInputs.note,
  //     userInputs.Scale,
  //     userInputs.alt,
  //     0
  //   );
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

  const intervalsDefine = (scale) => {
    let intervals = ["T"];
    let degrees = ["I"];
    if (scale[1] === 1) {
      intervals.push("2m");
      degrees.push("IIb");
    } else if (scale[1] === 2) {
      intervals.push("2M");
      degrees.push("II");
    } else if (scale[1] === 3) {
      intervals.push("3m");
      degrees.push("IIIb");
    } else if (scale[1] === 4) {
      intervals.push("3M");
      degrees.push("III");
    } else if (scale[1] === 5) {
      intervals.push("4j");
      degrees.push("IV");
    } else if (scale[1] === 6) {
      intervals.push("5dim");
      degrees.push("Vb");
    } else if (scale[1] === 7) {
      intervals.push("5j");
      degrees.push("V");
    } else if (scale[1] === 8) {
      intervals.push("5aug");
      degrees.push("V#");
    } else if (scale[1] === 9) {
      intervals.push("6M");
      degrees.push("VI");
    } else if (scale[1] === 10) {
      intervals.push("7m");
      degrees.push("VIIb");
    } else if (scale[1] === 11) {
      intervals.push("7M");
      degrees.push("VII");
    }

    if (scale[2] === 3) {
      intervals.push("3m");
      degrees.push("IIIb");
    } else if (scale[2] === 4) {
      intervals.push("3M");
      degrees.push("III");
    } else if (scale[2] === 5) {
      intervals.push("4j");
      degrees.push("IV");
    } else if (scale[2] === 6) {
      intervals.push("5dim");
      degrees.push("Vb");
    } else if (scale[2] === 7) {
      intervals.push("5j");
      degrees.push("V");
    } else if (scale[2] === 8) {
      intervals.push("5aug");
      degrees.push("V#");
    } else if (scale[2] === 9) {
      intervals.push("6M");
      degrees.push("VI");
    } else if (scale[2] === 10) {
      intervals.push("7m");
      degrees.push("VIIb");
    } else if (scale[2] === 11) {
      intervals.push("7M");
      degrees.push("VII");
    }

    if (scale[3] === 5) {
      intervals.push("4j");
      degrees.push("IV");
    } else if (scale[3] === 6) {
      intervals.push("4aug");
      degrees.push("IV#");
    } else if (scale[3] === 7) {
      intervals.push("5j");
      degrees.push("V");
    } else if (scale[3] === 8) {
      intervals.push("5aug");
    } else if (scale[3] === 9) {
      intervals.push("6M");
    } else if (scale[3] === 10) {
      intervals.push("7m");
    } else if (scale[3] === 11) {
      intervals.push("7M");
    }

    if (scale[4] === 6) {
      intervals.push("5dim");
    } else if (scale[4] === 7) {
      intervals.push("5j");
      degrees.push("V");
    } else if (scale[4] === 8) {
      intervals.push("5aug");
      degrees.push("V#");
    } else if (scale[4] === 9) {
      intervals.push("6M");
      degrees.push("VI");
    } else if (scale[4] === 10) {
      intervals.push("7m");
      degrees.push("VIIb");
    } else if (scale[4] === 11) {
      intervals.push("7M");
      degrees.push("VII");
    }

    if (scale[5] === 8) {
      intervals.push("6m");
      degrees.push("VIb");
    } else if (scale[5] === 9) {
      intervals.push("6M");
      degrees.push("VI");
    } else if (scale[5] === 10) {
      intervals.push("7m");
      degrees.push("VIIb");
    } else if (scale[5] === 11) {
      intervals.push("7M");
      degrees.push("VII");
    }

    if (scale[6] === 9) {
      intervals.push("7dim");
      degrees.push("VIIbb");
    } else if (scale[6] === 10) {
      intervals.push("7m");
      degrees.push("VIIb");
    } else if (scale[6] === 11) {
      intervals.push("7M");
      degrees.push("VII");
    }

    const scaleStructure = {
      intervals: intervals,
      degrees: degrees,
    };
    return scaleStructure;
  };
  // console.log(intervalsDefine(selectScale(userInputs)));

  return (
    <div>
      <Formik
        initialValues={{ alt: "", note: "", scale: "" }}
        onSubmit={(values) => {
          saveSubmit(values);
        }}
      >
        {({
          values,
          // errors,
          // touched,
          // handleChange,
          // handleBlur,
          // handleSubmit,
          // isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={(values) => {
              saveSubmit(values);
            }}
          >
            <ScreenScaleStructure
              scale={scaleToDisplay}
              noteDefine={intervalsDefine(selectScale(userInputs))}
            />
            {/* <div className="display-intervals"></div> */}
            <div className="select-box">
              <Select
                id="alt"
                title="Altération"
                options={["#", "b"]}
                value={userInputs.alt}
              />
              <Select
                id="note"
                title="Notes"
                options={scales[0].notesSharp}
                value={userInputs.note}
              />
              <Select
                id="scale"
                title="Gamme"
                options={scaleToSelect}
                value={userInputs.scale}
              />
            </div>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Tonique"
                  name="group1"
                  type={type}
                  id="tonique"
                  value={values}
                  onChange={(e) => handleInputChange(e)}
                />
                <Form.Check
                  inline
                  label="Tierce"
                  name="group1"
                  type={type}
                  id="tierce"
                  value="tierce"
                  onChange={(e) => handleInputChange(e)}
                />
                <Form.Check
                  inline
                  label="Quinte"
                  type={type}
                  id="quinte"
                  value="quinte"
                  onChange={(e) => handleInputChange(e)}
                />
                <Form.Check
                  inline
                  label="Septième"
                  type={type}
                  id="septieme"
                  value="septieme"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            ))}
            <Button type="submit" variant="warning">
              Valider
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CustomForm;
