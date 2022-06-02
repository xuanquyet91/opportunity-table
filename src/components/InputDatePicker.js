import { InfoOutlinedIcon, MenuItem, TextField } from "../mui";
import React from "react";
import { Tooltip } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputDatePicker = ({ ...props }) => {
  // console.log(props);
  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div
          className={
            props.checked ? `sub-title ${props.changeColor}` : "sub-title"
          }
        >
          {props.title}
        </div>
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
      <div className={props.class}>
        <DatePicker
          dateFormat="d MMM yyyy"
          // placeholderText={props.title}
          selected={props.contentSelected}
          // minDate={new Date()}
          // maxDate={endDate - 1}
          // value={props.formik.values.createDue}
          onChange={(date: Date) => {
            props.formik.setFieldValue(props.name, date);
          }}
          name={props.name}
        />
      </div>
    </div>
  );
};

export default InputDatePicker;
