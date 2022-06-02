import React, { useState } from "react";
import { TextField, MenuItem, InfoOutlinedIcon } from "../../mui";
// import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { currencies } from "../../data";
import InputDatePicker from "../../components/InputDatePicker";

const Planning = (props) => {
  const {
    index,
    title,
    currentClick,
    stateGuidance,
    handleClickCollapse,
    formik,
    changeColor,
    check,
  } = props;
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [currency, setCurrency] = useState("");
  const handleChangeMulti = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "row",
          marginBottom: "15px",
        }}
      >
        {" "}
        {currentClick?.find((item) => item === "5") ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "-15px",
              marginRight: "5px",
              height: "100%",
            }}
          >
            <RemoveCircleIcon className="blue" />
            <div
              style={{
                height: "calc( 100% - 20px)",
                width: "5px",
                backgroundColor: "rgb(0, 86, 216)",
                marginTop: "6px",
              }}
            ></div>
          </div>
        ) : (
          <div className="circleBox" style={{ marginRight: "10px" }}>
            <AddIcon className="grey" />
          </div>
        )}
        <div style={{ width: "100%" }}>
          <div
            onClick={() => handleClickCollapse("5")}
            className="new-opportunity__body__caption"
            style={{
              borderBottom: currentClick?.find((item) => item === "5")
                ? "1.5px solid #0056d8"
                : "1.5px solid rgb(218, 218, 218)",
              color: currentClick?.find((item) => item === "5")
                ? "#000"
                : "rgb(0 0 0 / 65%)",
            }}
          >
            <div className="new-opportunity__body__caption__text">
              {props.title}
            </div>
            <InfoOutlinedIcon className="infoIcon" />
          </div>
          <div style={{ display: "flex" }}>
            {stateGuidance && currentClick?.find((item) => item === "5") && (
              <div
                style={{
                  width: "180px",
                  textAlign: "left",
                  padding: "13px 10px",
                  backgroundColor: "aliceblue",
                  borderRadius: "10px",
                  fontSize: "14px",
                }}
              >
                Discuss the business challenge you are looking to solve.
                Consider: What is the specific problem or issue that needs to be
                resolved? Why is this an issue for the business? What decisions
                need to be made with this information?
              </div>
            )}
            {currentClick?.find((item) => item === "5") && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "10px",
                  width: "500px",
                }}
              >
                <div className="title">
                  <div>Estimated Effort</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    columnGap: "15px",
                  }}
                >
                  <div className="icon-Effort">
                    <img
                      className="icon-Effort-img"
                      src="https://www.svgrepo.com/show/383837/tshirt-t-shirt.svg"
                    />
                  </div>
                  <div className="icon-planning">
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="TBD"
                      onChange={handleChangeMulti}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.name} value={option.name}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Detail"
                      className="input-line1"
                      variant="outlined"
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div className="title">Planned Start Date</div>
                    <div className="start-date">
                      <DatePicker
                        dateFormat="d MMM yyyy"
                        maxDate={endDate - 1}
                        selected={startDate}
                        onChange={(date: Date) => {
                          setStartDate(date);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="title">Planned Completion Date</div>
                    <div className="start-date">
                      <DatePicker
                        dateFormat="d MMM yyyy"
                        minDate={startDate}
                        selected={endDate}
                        onChange={(date: Date) => setEndDate(date)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Planning;
