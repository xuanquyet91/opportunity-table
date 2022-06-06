import { InfoOutlinedIcon, MenuItem, TextField } from "../mui";
import React, { useEffect } from "react";
import { Avatar, Tooltip } from "@mui/material";

const InputMultiData = ({ ...props }) => {
  // console.log(props.checkDataDueName);
  useEffect(() => {
    if (props.checkDataDueName) {
      props.formik.setFieldValue(props.name, props.data[0]?.detail);
      props.data?.forEach((option) => {
        if (option.name === props.checkDataDueName) {
          props.handleCurrentBusinessValue({
            name: option.name,
            color: option.color,
          });
        }
      });
    }
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {props.title ? <div className="sub-title">{props.title}</div> : null}
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
          // {...props}
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
          value={props.value}
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
              // console.log(value, "22222");
            }
            // console.log("vao day", e.target.value);
            props.formik.setFieldValue(props.name, e.target.value);
          }}
        >
          {props.data?.map((option) => {
            return (
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
            );
          })}
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
