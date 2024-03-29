import React from "react";
import { Controller  } from "react-hook-form";
import Form from "react-bootstrap/Form";

const GeneralInputField = ({ id, type = '', validations = {}, isInvalid = false, control }) => {
  return (
    <Controller
      name={id}
      control={control}
      rules={validations}
      render={({ field }) => 
        <Form.Control
          { ...field }
          value={field.value ?? ''}
          type={type}
          isInvalid={isInvalid}
          size="sm"
          className="mb-1"
        />
      }
    />
  );
};

export default GeneralInputField;
