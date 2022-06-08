import React, { useEffect, useState, useRef } from "react";
import {
  TextField,
  Button,
  Typography,
  Popover,
  InfoOutlinedIcon,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "../../mui";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {
  databusinessValue,
  databusiness,
  businessValueDrivers,
} from "../../data";
import { Formik } from "formik";
import InputField from "../../components/InputField";

const BusinessValue = (props) => {
  const {
    index,
    title,
    currentClick,
    handleClickCollapse,
    stateGuidance,
    changeColor,
    checked,
    formData,
    formik,
  } = props;
  const textInput = useRef("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [businessGroup, setBusinessGroup] = useState(["0"]);
  const [dataSelect, setDataSelect] = useState([]);
  const [dataView, setdataView] = useState([]);
  const [isSelected, setIsSelected] = useState([]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // setDataSelect(databusinessValue);

    if (formData?.business) {
      setBusinessGroup(formData?.business);
      setDataSelect(formik.values?.businessGroup);
    }
    if (formData) {
      setDataSelect(formik.values?.businessGroup);
      setdataView(formik.values?.businessGroup);
    } else {
      setDataSelect(businessValueDrivers);
    }
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClickGroup = (item, index) => {
    formik.setFieldValue("business", item);
    switch (item) {
      case "1":
        setBusinessGroup("1");
        break;
      case "2":
        setBusinessGroup("2");
        break;
      case "3":
        setBusinessGroup("3");
        break;
      case "4":
        setBusinessGroup("4");
        break;
      case "5":
        setBusinessGroup("5");
        break;
      default:
    }
    if (businessGroup === item) {
      setBusinessGroup("0");
    }
  };
  const handleClickGroupAddData = (id, value) => {
    const arr = [...dataSelect];
    console.log(arr);
    console.log(value);
    for (var i in arr) {
      if (arr[i].id == id) {
        if (value != arr[i].value) arr[i].value = value;
        else arr[i].value = 0;
      }
    }
    setDataSelect(arr);
  };
  const handleClickGroupCheck = (data, isChecked, id) => {
    const arr = [...dataSelect];
    for (var i in arr) {
      if (arr[i].id == id) {
        arr[i].isSelect = isChecked;
      }
    }
    setDataSelect(arr);
  };

  const checkAddClass = (index) => {
    // return index + 1 <= value ? `color${index + 1}` : "color0";
  };

  // custom file

  const checkAddClassCustom = (index, ele) => {
    return index + 1 <= ele ? `color${index + 1}` : "color0";
  };

  const handleClickGroupCheckCustom = (data, id) => {
    // console.log(data, id);
    const arr = [...dataSelect];
    if (isSelected?.find((item) => item === id)) {
      setIsSelected(isSelected?.filter((item) => item !== id));
    } else {
      setIsSelected((prev) => [...prev, id]);
    }
    // console.log(isSelected.length === 0);
    // for (var i in arr) {
    //   if (arr[i].id == id) {
    //     isSelected?.filter(
    //       (item) => arr[i].id !== item && setIsSelected((prev) => [...prev, id])
    //     );
    //     console.log("edit color");
    //   } else {
    //     console.log("no edit color");
    //   }
    // }
    // setDataSelect(arr);
  };
  // console.log(isSelected);

  const handleClickGroupAddDataCustom = (id, ele) => {
    const arr = [...dataSelect];
    for (var i in arr) {
      if (arr[i].id == id) {
        if (ele != arr[i].value) arr[i].value = ele;
        else arr[i].value = 0;
      }
    }
    setDataSelect(arr);
  };

  function handleInputBusinessValues(e, idItem) {
    textInput.current = e;
    const arr = [...dataView];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === idItem) {
        arr[i].description = textInput.current;
      }
    }
    setdataView(arr);
  }
  const checkIsSelected = (id) => {
    const result = isSelected?.find((select) => select === id) ? true : false;
    return result;
  };
  console.log(checkIsSelected());
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
                Discuss the business challenge you are looking to solve.
                Consider: What is the specific problem or issue that needs to be
                resolved? Why is this an issue for the business? What decisions
                need to be made with this information?
              </div>
            )}
            {currentClick?.find((item) => item === "3") && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "10px",
                  width: "500px",
                }}
              >
                <div>
                  <div className={checked ? `title ${changeColor}` : "title"}>
                    Business Value Overall Rating
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div className="group-business-value">
                    {databusiness.map((item, index) => (
                      <span
                        className={
                          businessGroup[0] <= index
                            ? "group-business-value__item color0"
                            : `group-business-value__item color${item}`
                        }
                        value={formik.values?.business}
                        name="business"
                        onClick={() => handleClickGroup(item, index)}
                      ></span>
                    ))}
                  </div>
                  <div style={{ marginLeft: "20px", width: "367px" }}>
                    <InputField
                      id="outlined-basic"
                      className="input-line1"
                      value={props.formik.values.businessValueText}
                      onChange={props.formik.handleChange}
                      name="businessValueText"
                      formData={formData}
                      defaultValue={props.formData?.businessValueText}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    onClick={handleClick}
                    aria-describedby={id}
                    variant="outlined"
                    color="primary"
                  >
                    Select Value Drivers
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 200, left: 530 }}
                    anchorOrigin={{
                      vertical: "center",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                        }}
                      >
                        <div className="title">Select Value Drivers</div>
                        <InfoOutlinedIcon />
                      </div>
                      {dataSelect.map((item, index) => {
                        return (
                          <div key={index} style={{ margin: "10px 0" }}>
                            <div
                              style={{ fontWeight: "500" }}
                              className="sub-title"
                            >
                              {item.name}
                            </div>
                            <div style={{ display: "flex" }}>
                              <div style={{ width: "30px" }}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      // checked={
                                      //   isSelected?.find(
                                      //     (select) => select === id
                                      //   )
                                      //     ? false
                                      //     : true
                                      // }
                                      defaultChecked={checkIsSelected(item.id)}
                                      onChange={(e) =>
                                        handleClickGroupCheckCustom(e, item.id)
                                      }
                                    />
                                  }
                                />
                              </div>
                              <div className="group-business-value">
                                {[...Array(5).keys()].map((ele, index) => {
                                  return (
                                    <span
                                      className={`group-business-value__item ${checkAddClassCustom(
                                        index,
                                        item.value
                                      )}`}
                                      value={ele + 1}
                                      onClick={() =>
                                        handleClickGroupAddDataCustom(
                                          item.id,
                                          ele + 1
                                        )
                                      }
                                    ></span>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      <div style={{ display: "flex", justifyContent: "end" }}>
                        <Button
                          style={{ marginBottom: "20px" }}
                          variant="outlined"
                          color="error"
                        >
                          Cancel
                        </Button>
                        <Button
                          style={{ marginBottom: "20px" }}
                          variant="contained"
                          onClick={() => {
                            setdataView(dataSelect);
                            formik.setFieldValue("businessGroup", dataSelect);
                            handleClose();
                          }}
                        >
                          Select
                        </Button>
                      </div>
                    </Typography>
                  </Popover>
                </div>

                <div>
                  {dataView?.map((item, index) => {
                    return (
                      item.value > 0 && (
                        <div key={index} style={{ margin: "10px 0" }}>
                          <div
                            style={{ fontWeight: "500" }}
                            className="sub-title"
                          >
                            {item.name}
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div className="group-business-value">
                              {[...Array(5).keys()].map((ele, index) => {
                                return (
                                  <span
                                    className={`group-business-value__item ${checkAddClassCustom(
                                      index,
                                      item.value
                                    )}`}
                                    value={ele + 1}
                                    onClick={() =>
                                      handleClickGroupAddDataCustom(
                                        item.id,
                                        ele + 1
                                      )
                                    }
                                  ></span>
                                );
                              })}
                            </div>
                            <div style={{ marginLeft: "20px", width: "367px" }}>
                              <InputField
                                id="outlined-basic"
                                className="input-line1"
                                value={item.description}
                                onChange={(e) =>
                                  handleInputBusinessValues(
                                    e.target.value,
                                    item.id
                                  )
                                }
                                formData={dataView}
                              />
                            </div>
                          </div>
                        </div>
                      )
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessValue;
