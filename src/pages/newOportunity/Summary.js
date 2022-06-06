import React, { useEffect, useState } from "react";
import { TextField, MenuItem, Avatar, InfoOutlinedIcon } from "../../mui";
import { Formik, Form, Field, setFieldValue } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import { Autocomplete, Box, Chip } from "@mui/material";
import {
  dueColorData,
  colorStatusData,
  statusData,
  dueNameData,
  typeData,
  businessData,
  assignedData,
  workstreamData,
  sponsorData,
} from "../../data";
import InputField from "../../components/InputField";
import InputMultiData from "../../components/InputMultiData";
import InputDatePicker from "../../components/InputDatePicker";

const Summary = (props) => {
  const {
    onSubmitCreate,
    onSubmitUpdate,
    formData,
    setFormData,
    typeButton,
    stateGuidance,
    setStateGuidance,
    index,
    title,
    currentClick,
    handleClickCollapse,
    touched,
    errors,
    checked,
    formik,
    changeColor,
  } = props;
  const [data, setData] = useState(null);
  const [currentBusinessValue, setCurrentBusinessValue] = useState(null);
  const [startDate, setStartDate] = useState();
  const [currency, setCurrency] = useState("");
  const handleChangeMulti = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    if (props.formData) {
      setData(props.formData);
    }
  }, [props]);

  const handleChangeInput = (key, value) => {
    const newData = { ...data, [key]: value };
    setData(newData);
  };
  const handleCurrentBusinessValue = (value) => {
    // console.log(value);
    setCurrentBusinessValue(value);
  };

  // console.log(currentBusinessValue);

  return (
    <>
      <divq
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "row",
          marginBottom: "15px",
        }}
      >
        {" "}
        {currentClick?.find((item) => item === "1") ? (
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
            onClick={() => handleClickCollapse("1")}
            className="new-opportunity__body__caption"
            style={{
              borderBottom: currentClick?.find((item) => item === "1")
                ? "1.5px solid #0056d8"
                : "1.5px solid rgb(218, 218, 218)",
              color: currentClick?.find((item) => item === "1")
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
            {stateGuidance && currentClick?.find((item) => item === "1") && (
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
            {currentClick?.find((item) => item === "1") && (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "10px",
                    width: "500px",
                  }}
                >
                  <div>
                    <div style={{ marginBottom: "10px" }}>
                      {/* custom input field */}
                      <InputField
                        id="outlined-basic"
                        title={"Headline"}
                        placeholder="Headline"
                        className="input-line1"
                        value={props.formik.values.headline}
                        onChange={props.formik.handleChange}
                        name="headline"
                        isError={checked}
                        infoImg={"yes"}
                        formData={formData}
                        defaultValue={props.formData?.headline}
                      />
                      {(props.formik.errors.headline === undefined &&
                        checked) ||
                      props.formik.errors.headline ? (
                        <div className="required">
                          {props.formik.errors.headline}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      columnGap: "40px",
                      alignItems: "center",
                      height: "120px",
                    }}
                  >
                    <div style={{ height: "100%" }}>
                      <InputMultiData
                        title={"Sponsor"}
                        name={"for"}
                        formik={formik}
                        value={props.formik.values.for}
                        data={sponsorData}
                        infoTitle={"yes"}
                        infoImg={"yes"}
                        contentInfo={"please add / select a business sponsor"}
                        isError={checked}
                      />
                      {(props.formik.errors.for === undefined && checked) ||
                      props.formik.touched.for ? (
                        <div className="required">
                          {props.formik.errors.for}
                        </div>
                      ) : null}
                    </div>
                    <div style={{ height: "100%" }}>
                      {/* <div
                        style={{
                          width: "228px",
                        }}
                        className="sub-title"
                      >
                        Business Unit
                      </div> */}
                      {/* <Autocomplete
                        id="size-small-standard"
                        size="small"
                        onChange={(e, value) => {
                          if (value) {
                            setCurrentBusinessValue({
                              name: value.name,
                              color: value.color,
                            });
                            console.log(currentBusinessValue);
                            handleChangeInput("dueName", e.target.value);
                          } else {
                            setCurrentBusinessValue(null);
                          }
                        }}
                        clearText
                        options={dueNameData}
                        getOptionLabel={(option) => option.name}
                        defaultValue={[...dueNameData].find(
                          (item) => item.name === formData?.dueName
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            name="dueName"
                          />
                        )}
                      /> */}
                      <InputMultiData
                        title={"Business Unit"}
                        name={"dueName"}
                        formik={formik}
                        value={
                          formData?.dueName
                            ? `${currentBusinessValue?.name}_${currentBusinessValue?.color}`
                            : props.formik.values.dueName
                        }
                        data={dueNameData}
                        checkDataDueName={formData?.dueName}
                        // infoTitle={"all"}
                        handleCurrentBusinessValue={handleCurrentBusinessValue}
                        currentBusinessValue={currentBusinessValue}
                        handleChangeInput={handleChangeInput}
                        // contentInfo={"please add / select a business sponsor"}
                      />
                      {/* {currentBusinessValue && (
                        <div className="custom-avatar">
                          <Avatar
                            sx={{
                              bgcolor: currentBusinessValue.color,
                            }}
                          >
                            {currentBusinessValue.name}
                          </Avatar>
                        </div>
                      )} */}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      columnGap: "40px",
                      alignItems: "end",
                    }}
                  >
                    <div style={{ marginBottom: "-11px" }}>
                      <InputMultiData
                        title={"Workstream"}
                        name={"workStream"}
                        formik={formik}
                        value={props.formik.values.workStream}
                        data={workstreamData}
                        infoTitle={"info"}
                        contentInfo={
                          "Create workstreams that reflect important business or team "
                        }
                      />
                    </div>
                    <div>
                      <div className="sub-title">Opportunity Status</div>
                      <Chip
                        className="width-chip"
                        variant="outlined"
                        label="WishList"
                      />
                    </div>
                    {/* <Autocomplete
                            style={{ width: "211px" }}
                            id="size-small-standard"
                            size="small"
                            onChange={(e) =>
                              handleChangeInput("status", e.target.value)
                            }
                            options={statusData}
                            getOptionLabel={(option) => option.name}
                            defaultValue={[...statusData].find(
                              (item) => item.name === formData?.status
                            )}
                            // value={{ name: data?.dueColor }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                variant="standard"
                                label="Opportunity Status"
                                name="status"
                              />
                            )}
                          /> */}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "end",
                      columnGap: "40px",
                      margin: "7px 0",
                    }}
                  >
                    <div className="start-date">
                      <InputDatePicker
                        formik={formik}
                        infoImg="yes"
                        name={"createDue"}
                        title={"Create On"}
                        contentSelected={props.formik.values.createDue}
                      />
                    </div>
                    <div>
                      <div className="sub-title">Create By</div>
                      <Chip
                        className="width-chip"
                        variant="outlined"
                        label="Admin Account"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      columnGap: "20px",
                      margin: "7px 0",
                    }}
                  ></div>
                  <div style={{ margin: "10px 0 0" }}>
                    <InputMultiData
                      title={"Assigned To"}
                      name={"assigned"}
                      formik={formik}
                      value={props.formik.values.assigned}
                      data={assignedData}
                      class="full-width"
                      infoTitle={"info"}
                      infoImg={checked ? "yes" : null}
                      contentInfo={"Please select a team"}
                      isError={checked}
                    />
                    {(props.formik.errors.headline === undefined && checked) ||
                    props.formik.errors.headline ? (
                      <div className="required">
                        {props.formik.errors.headline}
                      </div>
                    ) : null}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </divq>
    </>
  );
};

export default Summary;
