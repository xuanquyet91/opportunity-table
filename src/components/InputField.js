import { TextField, Tooltip } from "@mui/material";
import React from "react";
import { InfoOutlinedIcon } from "../mui";

const InputField = ({ ...props }) => {
  // console.log(props);
  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div className="sub-title">{props.title}</div>

        {props.infoImg ? <span className="required-color">*</span> : null}
        {props.infoTitle ? (
          <Tooltip title={props.contentInfo} placement="bottom">
            <InfoOutlinedIcon
              style={{
                marginLeft: "5px",
                cursor: "pointer",
                marginBottom: "5px",
              }}
              className="infoIcon"
            />
          </Tooltip>
        ) : null}
      </div>
      <TextField
        {...props}
        // defaultValue="123"
        error={props.isError}
        id="outlined-basic"
        variant="outlined"
      />
    </div>
  );
};

export default InputField;
