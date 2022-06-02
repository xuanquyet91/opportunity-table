import { InfoOutlinedIcon, MenuItem, TextField } from "../mui";
import React from "react";
import { Avatar, Tooltip } from "@mui/material";

const InputMultiData = ({ ...props }) => {
  // console.log(props.currentBusinessValue);s
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
      <div style={{ display: "flex" }} className={props.class}>
        <TextField
          style={{
            marginRight:
              props.name === "dueName" && props.currentBusinessValue
                ? "10px"
                : null,
            maxWidth:
              props.name === "dueName" && props.currentBusinessValue
                ? "190px"
                : null,
          }}
          className={props.class}
          id="outlined-select-currency"
          select
          error={props.isError}
          name={props.name}
          // clearText
          onChange={(e, value) => {
            if (props.name === "dueName") {
              if (value) {
                props.handleCurrentBusinessValue({
                  name: e.target.value.slice(0, 3),
                  color: e.target.value.slice(4),
                });
              } else {
                props.handleCurrentBusinessValue(null);
              }
            } else {
              console.log(value, "22222");
            }
            props.formik.setFieldValue(props.name, e.target.value);
          }}
        >
          {props.data?.map((option) => (
            <MenuItem
              key={option.name}
              value={
                props.name === "dueName"
                  ? `${option.name}_${option.color}`
                  : option.name
              }
            >
              {props.name === "dueName" ? option.detail : option.name}
            </MenuItem>
          ))}
        </TextField>
        {props.name === "dueName" && props.currentBusinessValue && (
          <div className="custom-avatar">
            <Avatar
              sx={{
                bgcolor: props.currentBusinessValue.color,
              }}
            >
              {props.currentBusinessValue.name}
            </Avatar>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputMultiData;
