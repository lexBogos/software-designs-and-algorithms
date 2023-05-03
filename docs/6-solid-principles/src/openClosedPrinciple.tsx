import React from "react";

export const Button = ({ onClick, disabled, label }) => {
    return (
      <button onClick={onClick} disabled={disabled}>
        {label}
      </button>
    );
  };
  

  //This Button component is currently closed for modification.


export const PrimaryButton = (props) => {
    return <Button {...props} style={{ backgroundColor: 'blue', color: 'white' }} />;
};  