import React, { useContext } from "react";
import "./Select.scss";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { UserInputContext } from "../../Context/UserInputContext";

const Select = (props) => {
  const { handleInputChange } = useContext(UserInputContext);
  return (
    <Form.Select
      id={props.id}
      aria-label="Default select example"
      onChange={handleInputChange}
    >
      <option>{props.title}</option>
      {props.options.map((option) => {
        return (
          <option key={uuidv4()} value={option}>
            {option}
          </option>
        );
      })}
    </Form.Select>
  );
};

export default Select;
