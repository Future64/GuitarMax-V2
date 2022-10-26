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
  console.log(scaleToDisplay);

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
            <ScreenScaleStructure scale={scaleToDisplay} />

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
                  value="tonique"
                  onChange={handleInputChange}
                />
                <Form.Check
                  inline
                  label="Tierce"
                  name="group1"
                  type={type}
                  id="tierce"
                  value="tierce"
                  onChange={handleInputChange}
                />
                <Form.Check
                  inline
                  label="Quinte"
                  type={type}
                  id="quinte"
                  value="quinte"
                  onChange={handleInputChange}
                />
                <Form.Check
                  inline
                  label="Septième"
                  type={type}
                  id="septieme"
                  value="septieme"
                  onChange={handleInputChange}
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
