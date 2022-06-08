{
  /* <TextField
                            id="outlined-basic"
                            label="Effort"
                            className="input-line1"
                            variant="outlined"
                            value={data?.effort}
                            name="effort"
                            onChange={(e) =>
                              handleChangeInput("effort", e.target.value)
                            }
                          /> */
}
{
  /* <TextField
                            id="outlined-basic"
                            label="Type Color"
                            className="input-line1"
                            variant="outlined"
                            value={data?.typeColor}
                            name="typeColor"
                            onChange={(e) =>
                              handleChangeInput("typeColor", e.target.value)
                            }
                            // disabled
                          />
                          <TextField
                            id="outlined-basic"
                            label="Planned"
                            className="input-line1"
                            variant="outlined"
                            value={data?.planned}
                            name="planned"
                            onChange={(e) =>
                              handleChangeInput("planned", e.target.value)
                            }
                          /> */
}
{
  /* <Autocomplete
                            style={{ width: "211px" }}
                            id="size-small-standard"
                            size="small"
                            onChange={(e) =>
                              handleChangeInput("dueColor", e.target.value)
                            }
                            options={dueColorData}
                            getOptionLabel={(option) => option.name}
                            defaultValue={[...dueColorData].find(
                              (item) => item.name === formData?.dueColor
                            )}
                            // value={{ name: data?.dueColor }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                variant="standard"
                                label="Due Color"
                                name="dueColor"
                              />
                            )}
                          />

                          <Autocomplete
                            style={{ width: "211px" }}
                            id="size-small-standard"
                            size="small"
                            onChange={(e) =>
                              handleChangeInput("business", e.target.value)
                            }
                            options={businessData}
                            getOptionLabel={(option) => option.name}
                            defaultValue={[...businessData].find(
                              (item) => item.name === formData?.business
                            )}
                            // value={{ name: data?.dueColor }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                variant="standard"
                                label="Business Value"
                                name="business"
                              />
                            )}
                          />
                          <Autocomplete
                            style={{ width: "211px" }}
                            id="size-small-standard"
                            size="small"
                            onChange={(e) =>
                              handleChangeInput("color", e.target.value)
                            }
                            options={colorStatusData}
                            getOptionLabel={(option) => option.name}
                            defaultValue={[...colorStatusData].find(
                              (item) => item.name === formData?.color
                            )}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                variant="standard"
                                label="Color Status"
                                name="color"
                              />
                            )}
                          />
                          <Autocomplete
                            style={{ width: "211px" }}
                            id="size-small-standard"
                            size="small"
                            onChange={(e) =>
                              handleChangeInput("type", e.target.value)
                            }
                            options={typeData}
                            getOptionLabel={(option) => option.name}
                            defaultValue={[...typeData].find(
                              (item) => item.name === formData?.type
                            )}
                            // value={{ name: data?.dueColor }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                variant="standard"
                                label="Type"
                                name="type"
                              />
                            )}
                          /> */
}

//footer
{
  /* <form
          onSubmit={(e) => {
            typeButton === "create"
              ? onSubmitCreate(e, data)
              : onSubmitUpdate(e, data);
          }}
        > */
}
{
  /* <div className="new-opportunity__footer">
            <div className="new-opportunity__footer__button">
              <Button variant="outlined" color="error">
                Cancel
              </Button>
              {typeButton === "update" ? (
                <Button
                  className="button--save"
                  type="submit"
                  variant="contained"
                >
                  save
                </Button>
              ) : (
                <Button
                  className="button--send"
                  type="submit"
                  variant="contained"
                >
                  send
                </Button>
              )}
            </div>
          </div> */
}
{
  /* </form> */
}

// oppertunity__body
<div className="new-opportunity__body">
  {["summary"].map((ele) => (
    <div
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
          <div className="new-opportunity__body__caption__text">{ele}</div>
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
              Discuss the business challenge you are looking to solve. Consider:
              What is the specific problem or issue that needs to be resolved?
              Why is this an issue for the business? What decisions need to be
              made with this information?
            </div>
          )}
          {currentClick?.find((item) => item === "1") && (
            <Summary
              // productList={productList}
              onSubmitCreate={onSubmitCreate}
              onSubmitUpdate={onSubmitUpdate}
              formData={formData}
              setFormData={setFormData}
              typeButton={typeButton}
            />
          )}
        </div>
      </div>
    </div>
  ))}

  {["business need"].map((ele) => (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "row",
        marginBottom: "15px",
      }}
    >
      {" "}
      {currentClick?.find((item) => item === "2") ? (
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
            borderBottom: currentClick?.find((item) => item === "2")
              ? "1.5px solid #0056d8"
              : "1.5px solid rgb(218, 218, 218)",
            color: currentClick?.find((item) => item === "2")
              ? "#000"
              : "rgb(0 0 0 / 65%)",
          }}
        >
          <div className="new-opportunity__body__caption__text">{ele}</div>
          <InfoOutlinedIcon className="infoIcon" />
        </div>
        <div style={{ display: "flex" }}>
          {stateGuidance && currentClick?.find((item) => item === "2") && (
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
              Discuss the business challenge you are looking to solve. Consider:
              What is the specific problem or issue that needs to be resolved?
              Why is this an issue for the business? What decisions need to be
              made with this information?
            </div>
          )}
          {currentClick?.find((item) => item === "2") && <BusinessNeed />}
        </div>
      </div>
    </div>
  ))}
  {["business value"].map((ele) => (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "row",
        marginBottom: "15px",
      }}
    >
      {" "}
      {currentClick?.find((item) => item === "3") ? (
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
          onClick={() => handleClickCollapse("3")}
          className="new-opportunity__body__caption"
          style={{
            borderBottom: currentClick?.find((item) => item === "3")
              ? "1.5px solid #0056d8"
              : "1.5px solid rgb(218, 218, 218)",
            color: currentClick?.find((item) => item === "3")
              ? "#000"
              : "rgb(0 0 0 / 65%)",
          }}
        >
          <div className="new-opportunity__body__caption__text">{ele}</div>
          <InfoOutlinedIcon className="infoIcon" />
        </div>
        <div style={{ display: "flex" }}>
          {stateGuidance && currentClick?.find((item) => item === "3") && (
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
              Discuss the business challenge you are looking to solve. Consider:
              What is the specific problem or issue that needs to be resolved?
              Why is this an issue for the business? What decisions need to be
              made with this information?
            </div>
          )}
          {currentClick?.find((item) => item === "3") && <BusinessValue />}
        </div>
      </div>
    </div>
  ))}
  {["approach"].map((ele) => (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "row",
        marginBottom: "15px",
      }}
    >
      {" "}
      {currentClick?.find((item) => item === "4") ? (
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
          onClick={() => handleClickCollapse("4")}
          className="new-opportunity__body__caption"
          style={{
            borderBottom: currentClick?.find((item) => item === "4")
              ? "1.5px solid #0056d8"
              : "1.5px solid rgb(218, 218, 218)",
            color: currentClick?.find((item) => item === "4")
              ? "#000"
              : "rgb(0 0 0 / 65%)",
          }}
        >
          <div className="new-opportunity__body__caption__text">{ele}</div>
          <InfoOutlinedIcon className="infoIcon" />
        </div>
        <div style={{ display: "flex" }}>
          {stateGuidance && currentClick?.find((item) => item === "4") && (
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
              Discuss the business challenge you are looking to solve. Consider:
              What is the specific problem or issue that needs to be resolved?
              Why is this an issue for the business? What decisions need to be
              made with this information?
            </div>
          )}
          {currentClick?.find((item) => item === "4") && <Approach />}
        </div>
      </div>
    </div>
  ))}
  {["planning"].map((ele) => (
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
          <div className="new-opportunity__body__caption__text">{ele}</div>
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
              Discuss the business challenge you are looking to solve. Consider:
              What is the specific problem or issue that needs to be resolved?
              Why is this an issue for the business? What decisions need to be
              made with this information?
            </div>
          )}
          {currentClick?.find((item) => item === "5") && <Planning />}
        </div>
      </div>
    </div>
  ))}
</div>;

// summary field
import React, { useEffect, useState } from "react";
import { TextField, MenuItem, Avatar, InfoOutlinedIcon } from "../../mui";
import { Formik, Form, Field } from "formik";
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
} from "../../data";

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
            <div className="new-opportunity__body__caption__text">
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
                {/* <div>
                  <Field name="lastName" />
                  {errors?.lastName && touched?.lastName ? (
                    <div>{errors?.lastName}</div>
                  ) : null}
                  <Field name="email" type="email" />
                  {errors?.email && touched?.email ? (
                    <div>{errors?.email}</div>
                  ) : null}
                </div> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "10px",
                    width: "500px",
                    // borderLeft: "4.5px solid #0056d8",
                    // borderLeftStyle: "solid",
                  }}
                >
                  <div>
                    <div>
                      <TextField
                        id="outlined-basic"
                        label="Headline"
                        className="input-line1"
                        variant="outlined"
                        value={props.formik.values.form_1_headline}
                        onChange={props.formik.handleChange}
                        name="form_1_headline"
                        // value={data?.headline}
                        // onChange={(e) =>
                        //   handleChangeInput("headline", e.target.value)
                        // }
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      columnGap: "40px",
                      alignItems: "center",
                    }}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Sponsor*"
                      className="input-sponsor"
                      variant="outlined"
                      // value={data?.for}
                      name="form_1_for"
                      // onChange={(e) => handleChangeInput("for", e.target.value)}
                    />
                    <Autocomplete
                      style={{
                        width: "228px",
                      }}
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
                      // value={{ name: data?.dueColor }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          label="Business Unit"
                          name="form_1_dueName"
                        />
                      )}
                    />
                    {currentBusinessValue && (
                      <div className="custom-avatar">
                        <Avatar
                          sx={{
                            bgcolor: currentBusinessValue.color,
                          }}
                        >
                          {currentBusinessValue.name}
                        </Avatar>
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      columnGap: "35px",
                      alignItems: "end",
                    }}
                  >
                    <div style={{ marginBottom: "-11px" }}>
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Workstream"
                        // value={currency}
                        onChange={handleChangeMulti}
                        // helperText="Please select"
                      >
                        {workstreamData.map((option) => (
                          <MenuItem key={option.name} value={option.name}>
                            {option.name}
                          </MenuItem>
                        ))}
                      </TextField>
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
                      columnGap: "30px",
                      margin: "7px 0",
                    }}
                  >
                    <div className="start-date">
                      <DatePicker
                        dateFormat="d MMM yyyy"
                        // minDate={new Date()}
                        // maxDate={endDate - 1}
                        value={data?.planned}
                        placeholderText="Create On"
                        selected={startDate}
                        // onChange={(date: Date) => {
                        //   setStartDate(date);
                        // }}
                        name="form_1_createDue"
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
                    <Autocomplete
                      className="input-line1"
                      id="size-small-standard"
                      size="small"
                      onChange={(e) =>
                        handleChangeInput("assigned", e.target.value)
                      }
                      options={assignedData}
                      getOptionLabel={(option) => option.name}
                      defaultValue={[...assignedData].find(
                        (item) => item.name === formData?.assigned
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          label="Assigned To"
                          name="form_1_assigned"
                        />
                      )}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;


const data = [
  {
   "headline": "Increasing call volume analysi",
   "type": "ACTIONda",
   "status": "wishlist",
   "for": "dasdas",
   "dueName": "ope",
   "dueColor": "#d1230ced",
   "typeColor": "#8bb4ff",
   "planned": "29/04/2020",
   "assigned": "dgfgfg",
   "effort": "-",
   "business": "3",
   "color": "info",
   "id": "1"
  },
  {
   "headline": "New product buyer profilling",
   "type": "Performance",
   "status": "prioritised",
   "for": "Proposer",
   "dueName": "fin",
   "dueColor": "#8bb4ff",
   "typeColor": "#8bb4ff",
   "planned": "29/04/2022",
   "assigned": "-",
   "effort": "-",
   "business": "2",
   "color": "info",
   "id": "2"
  },
  {
   "headline": "M&A Analysis - CEO request",
   "type": "-",
   "status": "wishlist",
   "for": "Proposer",
   "dueName": "ret",
   "dueColor": "#d31464eb",
   "typeColor": "#ce20e1",
   "planned": "29/04/2022",
   "assigned": "-",
   "effort": "-",
   "business": "1",
   "color": "warning",
   "id": "3"
  },
  {
   "headline": "Faud in cident detected",
   "type": "Reporting",
   "status": "prioritised",
   "for": "Proposer",
   "dueName": "sal",
   "dueColor": "#1c39e9c2",
   "typeColor": "#8bb4ff",
   "planned": "29/04/2022",
   "assigned": "-",
   "effort": "-",
   "business": "3",
   "color": "info",
   "id": "4"
  },
  {
   "headline": "Update to Sales reports",
   "type": "Insights Analytics",
   "status": "wishlist",
   "for": "Expert",
   "dueName": "sys",
   "dueColor": "#340697f0",
   "typeColor": "#8bb4ff",
   "planned": "29/04/2022",
   "assigned": "-",
   "effort": "-",
   "business": "4",
   "color": "warning",
   "id": "5"
  },
  {
   "headline": "1",
   "type": "Insights Analytics",
   "status": "wishlist",
   "for": "Proposer",
   "dueName": "dat",
   "dueColor": "#92c33ddb",
   "typeColor": "#8bb4ff",
   "planned": "29/04/2022",
   "assigned": "-",
   "effort": "-",
   "business": "1",
   "color": "warning",
   "id": "6"
  },
  {
   "headline": "Mobile plan rationalisation project",
   "type": "Reporting",
   "status": "prioritised",
   "for": "Expert",
   "dueName": "dat",
   "dueColor": "#92c33ddb",
   "typeColor": "#8bb4ff",
   "planned": "29/04/2022",
   "assigned": "-",
   "effort": "-",
   "business": "1",
   "color": "info",
   "id": "7"
  },
  {
   "headline": "Sales growth opportunities",
   "type": "Reporting",
   "status": "wishlist",
   "for": "Expert",
   "dueName": "ope",
   "dueColor": "#d1230ced",
   "typeColor": "#8bb4ff",
   "planned": "29/04/2022",
   "assigned": "-",
   "effort": "-",
   "business": "2",
   "color": "warning",
   "id": "8"
  },
  {
   "headline": "Sales growth opportunities",
   "type": "-",
   "status": "planned",
   "for": "Expert",
   "dueName": "fin",
   "dueColor": "#8bb4ff",
   "typeColor": "#8bb4ff",
   "planned": "29/04/2022",
   "assigned": "-",
   "effort": "-",
   "business": "3",
   "color": "secondary",
   "id": "9"
  },
  {
   "headline": "quyet test xong ok",
   "type": "$type",
   "status": "wishlist",
   "for": "",
   "dueName": "ope",
   "dueColor": "#d31464eb",
   "typeColor": "#8bb4ff",
   "planned": "$planned",
   "assigned": "",
   "effort": "$effort",
   "business": "$",
   "color": "warning",
   "id": "13",
   "createDue": "",
   "workStream": "",
   "dueDate": "",
   "criticalReason": ""
  },
  {
   "headline": "test",
   "type": "$type",
   "status": "wishlist",
   "for": "",
   "dueName": "ope",
   "dueColor": "#d31464eb",
   "typeColor": "#8bb4ff",
   "planned": "$planned",
   "assigned": "",
   "effort": "$effort",
   "business": "$",
   "color": "warning",
   "id": "14",
   "createDue": "",
   "workStream": "",
   "dueDate": "",
   "criticalReason": ""
  },
  {
   "headline": "xuanquyet ",
   "type": "$type",
   "status": "wishlist",
   "for": "Eden Sponsor",
   "dueName": "ope_#d31464eb",
   "dueColor": "#d31464eb",
   "typeColor": "#8bb4ff",
   "planned": "$planned",
   "assigned": "Jack Sponsor",
   "effort": "$effort",
   "business": "$",
   "color": "warning",
   "id": "15",
   "createDue": "2022-05-23T17:00:00.000Z",
   "workStream": "WorkstreamData A",
   "dueDate": "2022-06-13T17:00:00.000Z",
   "criticalReason": "quyet"
  }
 ]

 const dataBase = {
  "headline": "$headline",
  "type": "$type",
  "status": "wishlist",
  "for": "Expert",
  "dueName": "ope",
  "dueColor": "#d31464eb",
  "typeColor": "#8bb4ff",
  "planned": "$planned",
  "assigned": "$assigned",
  "effort": "$effort",
  "business": "$",
  "color": "warning"
}
const dataBusineedValue = [
  {
    "headline": "Increasing call volume analysis quyet test",
    "type": "ACTIONda",
    "status": "wishlist",
    "for": "Kevin Sponsor",
    "dueName": "ope",
    "dueColor": "#d1230ced",
    "typeColor": "#8bb4ff",
    "planned": "29/04/2020",
    "assigned": "Jack Sponsor",
    "effort": "Small",
    "business": "3",
    "color": "info",
    "businessUnit": "ope",
    "workStream": "WorkstreamData A",
    "ckBusinessNeed": "Start by selecting one or more of the options below.",
    "criticalReason": "reason delay ok a",
    "ckApproach": "First thing is - I don't want to initialize ckEditor in every page where I use Editors.",
    "effortDetail": "effortDetail 1as",
    "createDue": "2022-05-31T17:00:00.000Z",
    "dueDate": "2022-06-01T17:00:00.000Z",
    "planStartDate": "2022-05-31T17:00:00.000Z",
    "planEndDate": "2022-06-02T17:00:00.000Z",
    "businessValueText": "businessValueText 0",
    "businessGroup": [{
        "title": "Revenue growth",
        "id": 1,
        "value": 2,
        "isSelect": true,
        "text1": "",
        "colorBusiness": [{
            "value": "1"
          },
          {
            "value": "2"
          },
          {
            "value": "3"
          },
          {
            "value": "4"
          },
          {
            "value": "5"
          }
        ]
      },
      {
        "title": "Cost reduction",
        "id": 2,
        "value": 3,
        "isSelect": true,
        "text2": "",
        "colorBusiness": [{
            "value": "1"
          },
          {
            "value": "2"
          },
          {
            "value": "3"
          },
          {
            "value": "4"
          },
          {
            "value": "5"
          }
        ]
      },
      {
        "title": "Marketshare growth",
        "id": 3,
        "value": 1,
        "isSelect": true,
        "text3": "",
        "colorBusiness": [{
            "value": "1"
          },
          {
            "value": "2"
          },
          {
            "value": "3"
          },
          {
            "value": "4"
          },
          {
            "value": "5"
          }
        ]
      },
      {
        "title": "Customer experience improvement",
        "id": 4,
        "value": 0,
        "isSelect": false,
        "text4": "",
        "colorBusiness": [{
            "value": "1"
          },
          {
            "value": "2"
          },
          {
            "value": "3"
          },
          {
            "value": "4"
          },
          {
            "value": "5"
          }
        ]
      },
      {
        "title": "Productivity improvement",
        "id": 5,
        "value": 0,
        "isSelect": false,
        "text5": "",
        "colorBusiness": [{
            "value": "1"
          },
          {
            "value": "2"
          },
          {
            "value": "3"
          },
          {
            "value": "4"
          },
          {
            "value": "5"
          }
        ]
      },
      {
        "title": "Opportunity enablement",
        "id": 6,
        "value": 0,
        "isSelect": false,
        "text6": "",
        "colorBusiness": [{
            "value": "1"
          },
          {
            "value": "2"
          },
          {
            "value": "3"
          },
          {
            "value": "4"
          },
          {
            "value": "5"
          }
        ]
      },
      {
        "title": "Strategic alignment",
        "id": 7,
        "value": 0,
        "isSelect": false,
        "text7": "",
        "colorBusiness": [{
            "value": "1"
          },
          {
            "value": "2"
          },
          {
            "value": "3"
          },
          {
            "value": "4"
          },
          {
            "value": "5"
          }
        ]
      }
    ],
    "id": "1",
    "outlined-basic": "[object Object].undefineda"
  }
]

// mock api

{
  "headline": "Increasing call volume analysis quyet test",
  "type": "ACTIONda",
  "status": "wishlist",
  "for": "Kevin Sponsor",
  "dueName": "Operations",
  "dueColor": "#d1230ced",
  "typeColor": "#8bb4ff",
  "planned": "29/04/2020",
  "assigned": "Jack Sponsor",
  "effort": "Small",
  "business": "3",
  "color": "info",
  "businessUnit": "ope",
  "workStream": "WorkstreamData A",
  "ckBusinessNeed": "",
  "criticalReason": "reason delay ok a",
  "ckApproach": "<p>First thing is - I don't want to initialize ckEditor in every page where I use Editors.dasdsad</p>",
  "effortDetail": "effortDetail 1as",
  "createDue": "2022-05-31T17:00:00.000Z",
  "dueDate": "2022-06-01T17:00:00.000Z",
  "planStartDate": "2022-05-31T17:00:00.000Z",
  "planEndDate": "2022-06-02T17:00:00.000Z",
  "businessValueText": "businessValueText 0",
  "businessGroup": [
   {
    "title": "Revenue growth",
    "id": 1,
    "value": 2,
    "isSelect": true,
    "text1": "fsdsd",
    "colorBusiness": [
     {
      "value": "1"
     },
     {
      "value": "2"
     },
     {
      "value": "3"
     },
     {
      "value": "4"
     },
     {
      "value": "5"
     }
    ]
   },
   {
    "title": "Cost reduction",
    "id": 2,
    "value": 3,
    "isSelect": true,
    "text2": "",
    "colorBusiness": [
     {
      "value": "1"
     },
     {
      "value": "2"
     },
     {
      "value": "3"
     },
     {
      "value": "4"
     },
     {
      "value": "5"
     }
    ]
   },
   {
    "title": "Marketshare growth",
    "id": 3,
    "value": 1,
    "isSelect": true,
    "text3": "",
    "colorBusiness": [
     {
      "value": "1"
     },
     {
      "value": "2"
     },
     {
      "value": "3"
     },
     {
      "value": "4"
     },
     {
      "value": "5"
     }
    ]
   },
   {
    "title": "Customer experience improvement",
    "id": 4,
    "value": 0,
    "isSelect": false,
    "text4": "",
    "colorBusiness": [
     {
      "value": "1"
     },
     {
      "value": "2"
     },
     {
      "value": "3"
     },
     {
      "value": "4"
     },
     {
      "value": "5"
     }
    ]
   },
   {
    "title": "Productivity improvement",
    "id": 5,
    "value": 0,
    "isSelect": false,
    "text5": "",
    "colorBusiness": [
     {
      "value": "1"
     },
     {
      "value": "2"
     },
     {
      "value": "3"
     },
     {
      "value": "4"
     },
     {
      "value": "5"
     }
    ]
   },
   {
    "title": "Opportunity enablement",
    "id": 6,
    "value": 0,
    "isSelect": false,
    "text6": "",
    "colorBusiness": [
     {
      "value": "1"
     },
     {
      "value": "2"
     },
     {
      "value": "3"
     },
     {
      "value": "4"
     },
     {
      "value": "5"
     }
    ]
   },
   {
    "title": "Strategic alignment",
    "id": 7,
    "value": 0,
    "isSelect": false,
    "text7": "",
    "colorBusiness": [
     {
      "value": "1"
     },
     {
      "value": "2"
     },
     {
      "value": "3"
     },
     {
      "value": "4"
     },
     {
      "value": "5"
     }
    ]
   }
  ],
  "text1": "text1 1",
  "text2": "text2 1",
  "text3": "text3 1",
  "text4": "text4 1",
  "text5": "text5 1",
  "text6": "text6 1",
  "text7": "text7 1",
  "id": "1",
  "fsdsd": "[object Object].fsdsda"
 }