import React, { useEffect, useState } from "react";
import {
  IconButton,
  // InfoIcon,
  // AddCircleOutlineIcon,
  MoreVertIcon,
  Button,
  // TextField,
  MenuItem,
  Menu,
  DeleteOutlineOutlinedIcon,
  // InfoOutlinedIcon,
  // AddCircleIcon,
  // Avatar,
} from "../../mui";
import { useFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import BusinessNeed from "./BusinessNeed";
import BusinessValue from "./BusinessValue";
import Planning from "./Planning";
import Approach from "./Approach";
// import { Autocomplete, Box, Chip } from "@mui/material";
// import {
//   dueColorData,
//   colorStatusData,
//   statusData,
//   dueNameData,
//   typeData,
//   businessData,
//   assignedData,
//   workstreamData,
// } from "../../data";
import Summary from "./Summary";

const options = ["Delete Opportunity"];

const ITEM_HEIGHT = 48;

const SignupSchema = Yup.object().shape({
  // headline: Yup.string().required("Required"),
  // for: Yup.string().required("Required"),
  // createDue: Yup.string().required("Required"),
  // assigned: Yup.string().required("Required"),
  // workStream: Yup.string().required("Required"),
  // dueDate: Yup.string().required("Required"),
  // criticalReason: Yup.string().required("Required"),
});

const NewOpportunity = (props) => {
  const {
    onSubmitCreate,
    onSubmitUpdate,
    formData,
    setFormData,
    typeButton,
    stateGuidance,
    setStateGuidance,
    setCurrentClick,
    currentClick,
    setStateExpand,
    stateExpand,
    renderStateExpand,
    renderStateExpandWeb,
    updateID,
  } = props;

  const [data, setData] = useState(null);
  const [currentBusinessValue, setCurrentBusinessValue] = useState(null);
  const [isCreate, setisCreate] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const dataInit = {
    headline: formData?.headline ? formData?.headline : "",
    for: "",
    createDue: "",
    assigned: "",
    workStream: "",
    dueDate: "",
    criticalReason: "",
  };

  const [checked, setChecked] = useState(false);

  const formik = useFormik({
    initialValues: dataInit,
    onSubmit: (e, values) => {
      console.log(e);
      console.log(values);
      if (data) {
        console.log("update");
        console.log(updateID);
        onSubmitUpdate(e);
      } else {
        console.log("create");
        onSubmitCreate(e);
      }
      // same shape as initial values
      // console.log(values);
    },
    validationSchema: SignupSchema,
  });

  // console.log(formData);
  const dataOportunity = [
    {
      children: (
        <Summary
          formik={formik}
          index={"1"}
          title={"summary"}
          currentClick={currentClick}
          handleClickCollapse={(data) => handleClickCollapse(data)}
          stateGuidance={stateGuidance}
          checked={checked}
          changeColor={"red-color"}
          currentBusinessValue={currentBusinessValue}
          setCurrentBusinessValue={setCurrentBusinessValue}
          formData={formData}
        />
      ),
    },
    {
      children: (
        <BusinessNeed
          formik={formik}
          index={"2"}
          title={"business need"}
          currentClick={currentClick}
          handleClickCollapse={(data) => handleClickCollapse(data)}
          stateGuidance={stateGuidance}
          setStateExpand={setStateExpand}
          stateExpand={stateExpand}
          checked={checked}
          setChecked={setChecked}
          changeColor={"red-color"}
        />
      ),
    },
    {
      children: (
        <BusinessValue
          formik={formik}
          index={"3"}
          title={"business value"}
          currentClick={currentClick}
          handleClickCollapse={(data) => handleClickCollapse(data)}
          stateGuidance={stateGuidance}
          checked={checked}
          changeColor={"red-color"}
        />
      ),
    },
    {
      children: (
        <Approach
          index={"4"}
          title={"approach"}
          currentClick={currentClick}
          handleClickCollapse={(data) => handleClickCollapse(data)}
          stateGuidance={stateGuidance}
        />
      ),
    },
    {
      children: (
        <Planning
          formik={formik}
          index={"5"}
          title={"planning"}
          currentClick={currentClick}
          handleClickCollapse={(data) => handleClickCollapse(data)}
          stateGuidance={stateGuidance}
          checked={checked}
          changeColor={"red-color"}
        />
      ),
    },
  ];

  const [currency, setCurrency] = useState("");
  const handleChangeMulti = (event) => {
    setCurrency(event.target.value);
  };

  const handleClickCollapse = (e) => {
    const checkCurrentClick = currentClick?.find((ele) => ele === e);
    if (checkCurrentClick) {
      setCurrentClick(currentClick?.filter((ele) => ele !== e));
    } else {
      setCurrentClick((prev) => [...prev, e]);
    }
  };
  const handleClickExpandAll = () => {
    setCurrentClick(["1", "2", "3", "4", "5"]);
  };
  const handleClickCollapseAll = () => {
    setCurrentClick([]);
    setStateGuidance(false);
    // console.log(currentClick.length);
    setStateExpand("1");
  };
  const handleClickGuidance = () => {
    if (!stateGuidance) {
      setStateExpand("2");
      setStateGuidance(true);
    } else {
      setStateExpand("1");
      setStateGuidance(false);
    }
    if (stateExpand === "3" && !stateGuidance) {
      setStateExpand("4");
      console.log("4");
    } else if (stateExpand === "4" && stateGuidance) {
      setStateExpand("3");
    }
  };
  useEffect(() => {
    if (props.formData) {
      setisCreate(false);
      setData(props.formData);
    } else {
      setisCreate(true);
    }
  }, [props]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeInput = (key, value) => {
    const newData = { ...data, [key]: value };
    setData(newData);
  };

  // [].map(v,i)=> {
  //   if(i == 0) {

  //     dataInit[`form_${i+1}_headline`] = 'aaa';
  //   }else {
  //     dataInit[`form_${i+1}_rate`] = '15%'
  //   }
  // }
  // console.log(formik.errors);
  const disablebButtonSave = () => {
    // console.log(formik.values);
    if (
      formik.values.headline !== "" &&
      formik.values.for !== "" &&
      formik.values.createDue !== "" &&
      formik.values.assigned !== "" &&
      formik.values.dueDate !== "" &&
      formik.values.criticalReason !== ""
    ) {
      return false;
    } else {
      return true;
    }
  };
  // console.log(formik.values);
  // console.log(data);
  // console.log(updateID);
  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div
            className="new-opportunity"
            style={{
              width: `${renderStateExpandWeb()}px`,
            }}
          >
            <div
              className="new-opportunity__header"
              style={{
                width: "calc(`${renderStateExpandWeb()}px` - 10px)",
              }}
            >
              <div className="new-opportunity__header__caption">
                New Opportunity
              </div>
              <div className="new-opportunity__header__guide">
                <Button
                  onClick={handleClickGuidance}
                  className="custom-button"
                  variant="outlined"
                  color="inherit"
                  disabled={currentClick.length === 0 ? true : false}
                >
                  {!stateGuidance ? "Show Guidance" : "Hide Guidance"}
                </Button>
                <Button
                  onClick={
                    currentClick?.length < 5
                      ? handleClickExpandAll
                      : handleClickCollapseAll
                  }
                  className="custom-button"
                  variant="outlined"
                  color="primary"
                >
                  {currentClick?.length < 5 ? "Expand All" : "Collapse All"}
                </Button>

                <div>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "22ch",
                      },
                    }}
                  >
                    {options.map((option, index) => (
                      <MenuItem
                        key={index}
                        selected={option === "Pyxis"}
                        onClick={handleClose}
                      >
                        <div className="delete">
                          <DeleteOutlineOutlinedIcon />
                          {option}
                        </div>
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </div>
            </div>
            <div
              className="new-opportunity__body"
              style={{
                width: "calc(`${renderStateExpandWeb()}px` - 30px)",
              }}
            >
              {dataOportunity.map((element) => element.children)}
            </div>
            <div
              className="new-opportunity__footer"
              style={{ width: `${renderStateExpandWeb()}px` }}
            >
              <div className="new-opportunity__footer__button">
                <Button variant="outlined" color="error">
                  Cancel
                </Button>
                {data ? (
                  <Button
                    className="button--update"
                    type="submit"
                    variant="contained"
                    // disabled={disablebButtonSave()}
                  >
                    update
                  </Button>
                ) : (
                  <Button
                    className="button--save"
                    type="submit"
                    variant="contained"
                    // disabled={disablebButtonSave()}
                  >
                    save
                  </Button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <div
        className="new-opportunity"
        style={{
          width: `${renderStateExpandWeb()}px`,
        }}
      >
        <div
          className="new-opportunity__header"
          style={{ width: "calc(`${renderStateExpandWeb()}px` - 10px)" }}
        >
          <div className="new-opportunity__header__caption">
            New Opportunity
          </div>
          <div className="new-opportunity__header__guide">
            <Button
              onClick={handleClickGuidance}
              className="custom-button"
              variant="outlined"
              color="inherit"
              disabled={currentClick.length === 0 ? true : false}
            >
              {!stateGuidance ? "Show Guidance" : "Hide Guidance"}
            </Button>
            <Button
              onClick={
                currentClick?.length < 5
                  ? handleClickExpandAll
                  : handleClickCollapseAll
              }
              className="custom-button"
              variant="outlined"
              color="primary"
            >
              {currentClick?.length < 5 ? "Expand All" : "Collapse All"}
            </Button>

            <div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "22ch",
                  },
                }}
              >
                {options.map((option, index) => (
                  <MenuItem
                    key={index}
                    selected={option === "Pyxis"}
                    onClick={handleClose}
                  >
                    <div className="delete">
                      <DeleteOutlineOutlinedIcon />
                      {option}
                    </div>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </div>
        <div
          className="new-opportunity__body"
          style={{ width: "calc(`${renderStateExpandWeb()}px` - 30px)" }}
        >
          {dataOportunity.map((element) => element.children)}
        </div>
        <div
          className="new-opportunity__footer"
          style={{ width: `${renderStateExpandWeb()}px` }}
        >
          <div className="new-opportunity__footer__button">
            <Button variant="outlined" color="error">
              Cancel
            </Button>
            {typeButton === "update" ? (
              <Button
                className="button--update"
                type="submit"
                variant="contained"
              >
                update
              </Button>
            ) : (
              <Button
                className="button--save"
                type="submit"
                variant="contained"
              >
                save
              </Button>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default NewOpportunity;
