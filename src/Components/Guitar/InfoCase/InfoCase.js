import React from "react";
import "./InfoCase.scss";

const InfoCase = ({
  info,
  type,
  index,
  id,
  hide,
  tonique,
  tierce,
  quinte,
  septieme,
}) => {
  return (
    <div
      id={id}
      className={`infoCase ${type} ${index} ${info} ${hide} ${tonique} ${tierce} ${quinte} ${septieme}`}
    >
      {info}
    </div>
  );
};

export default InfoCase;
