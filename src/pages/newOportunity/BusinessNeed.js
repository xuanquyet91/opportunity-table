import React, { useState } from "react";
import {
  TextField,
  InfoOutlinedIcon,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Box,
  Button,
  Typography,
  Modal,
} from "../../mui";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import InputDatePicker from "../../components/InputDatePicker";
import MuiModal from "../../components/MuiModal";

const BusinessNeed = (props) => {
  const {
    index,
    title,
    currentClick,
    handleClickCollapse,
    stateGuidance,
    setStateExpand,
    stateExpand,
    checked,
    setChecked,
    changeColor,
    formik,
  } = props;
  const [text, setText] = useState("");
  const [endDate, setEndDate] = useState();
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (!checked) {
      handleOpenModal();
    }
  };
  const handleExpandOpportunityType = () => {
    if (stateGuidance && props.currentClick?.find((item) => item === "2")) {
      setStateExpand("4");
    } else {
      setStateExpand("3");
    }
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
        {props.currentClick?.find((item) => item === "2") ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "-25px",
              marginRight: "5px",
              height: "100%",
            }}
          >
            <RemoveCircleIcon className="blue" />
            <div
              style={{
                height: "calc(100% - 24px)",
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
            onClick={() => handleClickCollapse("2")}
            className="new-opportunity__body__caption"
            style={{
              borderBottom: props.currentClick?.find((item) => item === "2")
                ? "1.5px solid #0056d8"
                : "1.5px solid rgb(218, 218, 218)",
              color: props.currentClick?.find((item) => item === "2")
                ? "#000"
                : "rgb(0 0 0 / 65%)",
            }}
          >
            <div
              className={
                checked
                  ? `new-opportunity__body__caption__text ${changeColor}`
                  : "new-opportunity__body__caption__text"
              }
            >
              {props.title}
            </div>
            <InfoOutlinedIcon className="infoIcon" />
          </div>
          <div style={{ display: "flex" }}>
            {stateGuidance && props.currentClick?.find((item) => item === "2") && (
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
            {props.currentClick?.find((item) => item === "2") && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "10px",
                  width: "500px",
                }}
              >
                <div className="title">Business Need</div>
                <div>
                  <CKEditor
                    editor={ClassicEditor}
                    id="header"
                    data="<p></p>"
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      // console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();

                      setText(data);
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    columnGap: "40px",
                    marginTop: "10px",
                  }}
                >
                  <div>
                    <div className="start-date">
                      {/* <DatePicker
                        dateFormat="d MMM yyyy"
                        placeholderText="Due Date"
                        selected={props.formik.values.dueDate}
                        onChange={(date: Date) => {
                          props.formik.setFieldValue("dueDate", date);
                        }}
                        name="dueDate"
                      /> */}
                      <InputDatePicker
                        changeColor={changeColor}
                        checked={checked}
                        formik={formik}
                        title={"Due Date"}
                        dateFormat="d MMM yyyy"
                        placeholderText="Due Date"
                        contentSelected={props.formik.values.dueDate}
                        infoImg={checked ? "yes" : null}
                        // onChange={(date: Date) => {
                        //   props.formik.setFieldValue("dueDate", date);
                        // }}
                        name="dueDate"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "-8px",
                    }}
                  >
                    <div style={{ marginTop: "12px", width: "90px" }}>
                      <FormGroup className="Check-box__business-need">
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked}
                              onChange={handleChange}
                            />
                          }
                          label="Critical"
                        />
                      </FormGroup>
                    </div>
                    <div>
                      <TextField
                        className="Reason-input__business-need"
                        id="outlined-basic"
                        // label="Critical reason"
                        placeholder="Critical reason"
                        value={props.formik.values.criticalReason}
                        onChange={props.formik.handleChange}
                        name="criticalReason"
                        variant="outlined"
                        disabled={checked ? false : true}
                        error={checked}
                      />
                    </div>
                  </div>
                </div>
                <div className="title">Opportunity type</div>
                <div
                  className="grand-father__box"
                  style={{ backgroundColor: "#F5F8FF", display: "flex" }}
                >
                  <div
                    onClick={handleExpandOpportunityType}
                    className="dad__box"
                  >
                    <div className="son__box">
                      <AddOutlinedIcon />
                    </div>
                  </div>
                  <div style={{ fontSize: "14px" }}>
                    Select an Opportunity Type to capture more specific info
                    about this opportunity...
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <MuiModal
        openModal={openModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        content1={
          "We have highlighted in red a couple of fields that are important for critical opportunities."
        }
        styles={{
          top: "50%",
          left: "21%",
          transform: "translate(-50%, -50%)",
          width: 380,
          height: 132,
          padding: "26px",
        }}
      />
    </>
  );
};

export default BusinessNeed;
