import React, { useEffect, useState } from "react";
import {
  IconButton,
  InfoIcon,
  AddCircleOutlineIcon,
  MoreVertIcon,
  Button,
  TextField,
  MenuItem,
  Menu,
  DeleteOutlineOutlinedIcon,
} from "../../mui";
import BusinessNeed from "./BusinessNeed";
import BusinessValue from "./BusinessValue";
import Planning from "./Planning";
import Approach from "./Approach";

const options = ["Delete Opportunity"];

const ITEM_HEIGHT = 48;
const test = () => {


  const [data, setData] = useState(null);

  const dataTitleOpportunity = [
    "summary",
    "business need",
    "business value",
    "approach",
    "planning",
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // collapse caption
  const [expand, setExpand] = useState(new Map());
  const [currentClick, setCurrentClick] = useState(["summary"]);

  // useEffect(() => {
  //   setCurrentClick(currentClick);
  // }, [currentClick]);
  const handleClickCollapse = (e) => {
    // const test = [...currentClick]
    // test.push(e);
    // test.shift();
    // console.log(test)
    setCurrentClick([e])
  };
  const handleClickExpandAll = (e) => {
    setCurrentClick(["summary",
    "business need",
    "business value",
    "approach",
    "planning",])
  }
  const handleClickCollapseAll = (e) => {
    setCurrentClick([""])
  }

  // const handleClickCollapse = (e) => {
  //   if (expand.get(e)) {
  //     const newMap = new Map(expand);
  //     console.log(newMap);
  //     newMap.delete(e);
  //     setExpand(newMap);
  //     console.log(newMap);
  //   } else {
  //     const newMap = new Map(expand);
  //     newMap.set(e, true);
  //     setExpand(newMap);
  //   }
  // };
  useEffect(() => {
    setExpand(new Map());
  }, []);

  useEffect(() => {
    if (props.formData) {
      setData(props.formData);
    }
  }, [props.formData]);

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

  return (
    <div className="newOpportunity" style={{ margin: "80px 0" }}>
      <div className="newOpportunity__header">
        <div className="newOpportunity__header__caption">New Opportunity</div>
        <div className="newOpportunity__header__guide">
          <Button className="customButton" variant="outlined" color="inherit">
            Show Guidance
          </Button>
          <Button 
          onClick={(event) => handleClickExpandAll(event)}
          className="customButton" variant="outlined" color="primary">
            Expand All
          </Button>
          <Button 
          onClick={(event) => handleClickCollapseAll(event)}
          className="customButton" variant="outlined" color="primary">
            Collapse All
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
              {options.map((option,index) => (
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
      {dataTitleOpportunity.map((title, index) => (
        <div key={index} className="newOpportunity__body__test">
          <div className="newOpportunity__body__caption__test">
            <AddCircleOutlineIcon />
            <button
              // onClick={(event) => {
              //   if (
              //     dataTitleOpportunity.includes(
              //       event.target.value.toLowerCase()
              //     )
              //   ) {
              //     handleClickCollapse(event.target.value.toLowerCase());
              //   }
              // }}
              onClick={(event) => handleClickCollapse(event.target.value)}
              value={title}
            >
              {title}
            </button>
            <InfoIcon />
          </div>
          <div>
          {currentClick?.find(
            (item) => item === title) && <div> curent</div>
          } 
          </div>
          {/* {!expand.get(String(title)?.toLowerCase()) && (
            <div style={{ display: "flex" }}>abc</div>
          )} */}
        </div>
      ))}
      <form
        onSubmit={(e) => {
          props.formData ? onSubmitCreate(e, data) : onSubmitUpdate(e, data);
        }}
      >
        <div className="newOpportunity__body">
          <>
            <div className="newOpportunity__body__caption">
              <AddCircleOutlineIcon />
              <p style={{ paddingRight: "10px" }}>Summary</p>
              <InfoIcon />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderLeft: "4.5px solid #0056d8",
                paddingLeft: "10px",
                borderLeftStyle: "double",
              }}
            >
              <div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Headline"
                    className="inputLine1"
                    variant="outlined"
                    value={data?.headline}
                    name="headline"
                    onChange={(e) =>
                      handleChangeInput("headline", e.target.value)
                    }
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  columnGap: "20px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="type"
                  className="inputLine1"
                  variant="outlined"
                  value={data?.type}
                  name="type"
                  onChange={(e) => handleChangeInput("type", e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="for"
                  className="inputLine1"
                  variant="outlined"
                  value={data?.for}
                  name="for"
                  onChange={(e) => handleChangeInput("for", e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  columnGap: "20px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="status"
                  className="inputLine1"
                  variant="outlined"
                  value={data?.status}
                  name="status"
                  onChange={(e) => handleChangeInput("status", e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="dueName"
                  className="inputLine1"
                  variant="outlined"
                  value={data?.dueName}
                  name="dueName"
                  onChange={(e) => handleChangeInput("dueName", e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  columnGap: "20px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="dueColor"
                  className="inputLine1"
                  variant="outlined"
                  value={data?.dueColor}
                  name="dueColor"
                  onChange={(e) =>
                    handleChangeInput("dueColor", e.target.value)
                  }
                />
                <TextField
                  id="outlined-basic"
                  label="typeColor"
                  className="inputLine1"
                  variant="outlined"
                  value={data?.typeColor}
                  name="typeColor"
                  onChange={(e) =>
                    handleChangeInput("typeColor", e.target.value)
                  }
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  columnGap: "20px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="planned"
                  className="inputLine1"
                  variant="outlined"
                  value={data?.planned}
                  name="planned"
                  onChange={(e) => handleChangeInput("planned", e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="assigned"
                  className="inputLine1"
                  variant="outlined"
                  value={data?.assigned}
                  name="assigned"
                  onChange={(e) =>
                    handleChangeInput("assigned", e.target.value)
                  }
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  columnGap: "20px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="color"
                  className="inputLine1"
                  variant="outlined"
                  value={data?.color}
                  name="color"
                  onChange={(e) => handleChangeInput("color", e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="business"
                  className="inputLine1"
                  variant="outlined"
                  value={data?.business}
                  name="business"
                  onChange={(e) =>
                    handleChangeInput("business", e.target.value)
                  }
                />
              </div>
            </div>
          </>
          <BusinessNeed />
          <BusinessValue />
          <Approach />
          <Planning />
        </div>

        <div className="newOpportunity__footer">
          <div className="newOpportunity__footer__button">
            <Button variant="outlined" color="error">
              Cancel
            </Button>
            {props.formData ? (
              <Button type="submit" variant="contained">
                save
              </Button>
            ) : (
              <Button type="submit" variant="contained">
                send
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default test;
