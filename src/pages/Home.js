import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Stack,
  styled,
  Paper,
  Checkbox,
  FormControlLabel,
  InputBase,
  IconButton,
  Avatar,
  Chip,
  AddIcon,
  SearchIcon,
  Rating,
  CircleIcon,
  Box,
  Drawer,
  Button,
  MoreVertIcon,
  Menu,
  MenuItem,
  DeleteOutlineOutlinedIcon,
  EditIcon,
  FileUploadIcon,
  SettingsOutlinedIcon,
  KeyboardArrowDownOutlinedIcon,
} from "../mui";
import SvgIcon from "@mui/material/SvgIcon";
import NewOpportunity from "./newOportunity/NewOpportunity";
import CustomTable from "./CustomTable";
import { dataTable, dataTableHeader } from "../data";
import productApi from "../api/productApi";
import axios from "axios";
import NewOpportunityType from "./newOportunity/NewOpportunityType";
import MuiModal from "../components/MuiModal";
import SlidebarFilter from "../pages/filterBox/SlidebarFilter";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#faaf007a",
  },
});
let dataDetail = {
  headline: "",
  type: "",
  status: "",
  for: "",
  dueName: "",
  dueColor: "",
  typeColor: "",
  planned: "",
  assigned: "",
  effort: "",
  business: "",
  color: "",
  id: "",
  businessUnit: "",
  workStream: "",
  ckBusinessNeed: "",
  criticalReason: "",
  ckApproach: "",
  effortDetail: "",
  createDue: "",
  dueDate: "",
  planStartDate: "",
  planEndDate: "",
  businessValueText: "",
  businessGroup: [],
};
const ITEM_HEIGHT = 48;

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [state, setState] = useState({
    left: false,
  });
  const [currentClick, setCurrentClick] = useState(["1"]);
  const [stateExpand, setStateExpand] = useState(["1"]);

  const [formData, setFormData] = useState(dataDetail);
  const [updateID, setUpdateID] = useState("0");
  const [typeButton, setTypeButton] = useState("");
  const [stateGuidance, setStateGuidance] = useState(false);
  //modal
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  //sildebar
  const [checkShowSlide, setCheckShowSlide] = useState(false);
  const [stateCkApproach, setStateCkApproach] = useState("");
  const [stateCkBusinessNeed, setStateCkBusinessNeed] = useState("");

  // const [stateUpdate, setStateUpdate] = useState({});

  const handleChange = (event) => {
    handleOpenModal();
  };

  // fetch API product
  useEffect(() => {
    fetchProductList();
  }, []);
  const fetchProductList = async () => {
    try {
      // const params = { page, limit };
      const response = await productApi.getAll();
      setProductList(response);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };

  const [characters, updateCharacters] = useState(dataTable);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  const renderStateExpand = () => {
    let widthInt = 580;
    switch (stateExpand) {
      case "1":
        widthInt = 580;
        break;
      case "2":
        widthInt = 780;
        break;
      case "3":
        widthInt = 1180;
        break;
      case "4":
        widthInt = 1380;
        break;
    }
    // console.log(widthInt);
    return widthInt;
  };
  const renderStateExpandWeb = () => {
    let widthInt = 580;
    switch (stateExpand) {
      case "1":
        widthInt = 580;
        break;
      case "2":
        widthInt = 780;
        break;
      case "3":
        widthInt = 580;
        break;
      case "4":
        widthInt = 780;
        break;
    }
    // console.log(widthInt);
    return widthInt;
  };

  const toggleDrawer = (anchor, open) => (event) => {
    // handleOpenModalCreate();
    setTypeButton("create");
    // setCurrentClick(["1"]);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
    setFormData(null);
  };
  const list = (anchor) => (
    <Box
      sx={{
        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : renderStateExpand(),
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <NewOpportunity
        productList={productList}
        onSubmitCreate={onSubmitCreate}
        onSubmitUpdate={onSubmitUpdate}
        formData={formData}
        setFormData={setFormData}
        typeButton={typeButton}
        stateGuidance={stateGuidance}
        setStateGuidance={setStateGuidance}
        setCurrentClick={setCurrentClick}
        currentClick={currentClick}
        setStateExpand={setStateExpand}
        stateExpand={stateExpand}
        renderStateExpand={(data) => renderStateExpand(data)}
        renderStateExpandWeb={(data) => renderStateExpandWeb(data)}
        updateID={updateID}
        stateCkApproach={stateCkApproach}
        setStateCkApproach={setStateCkApproach}
        setStateCkBusinessNeed={setStateCkBusinessNeed}
        stateCkBusinessNeed={stateCkBusinessNeed}
      />
      {(stateExpand === "3" || stateExpand === "4") && (
        <NewOpportunityType
          stateGuidance={stateGuidance}
          setStateGuidance={setStateGuidance}
          stateExpand={stateExpand}
          setStateExpand={setStateExpand}
        />
      )}
    </Box>
  );

  const toggleDrawerUpdate = (anchor, open, data) => (event) => {
    setTypeButton("update");

    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setcurrentMenu(null);
    setState({ ...state, left: true });
    setFormData({ ...data });
    setUpdateID(data.id);

    // setForm({ ...data });
  };

  const [query, setQuery] = useState("");
  const keys = ["headline"];
  //
  const [isChange, setIsChange] = useState(true);
  const [statusManagement, setStatusManagement] = useState([
    "wishlist",
    "prioritised",
    "planned",
  ]);
  const object = localStorage.getItem("current");
  const [dataTableMock, setDataTableMock] = useState(
    JSON.parse(object)?.data || []
  );

  const [selectGroup, setSelectGroup] = useState(
    JSON.parse(object)?.type || "1"
  );
  const [key, setKey] = useState(JSON.parse(object)?.key || null);
  const handleClickSwitch = () => {
    setIsChange(!isChange);
  };
  const statusData = [
    "wishlist",
    "prioritised",
    "in progress",
    "planned",
    "blocked",
    "completed",
  ];
  const groupData = [
    { name: "None", value: "1" },
    { name: "Business Unit", value: "2" },
    { name: "Status", value: "3" },
    { name: "Type", value: "4" },
    { name: "Work", value: "5" },
  ];
  useEffect(() => {
    if (!object) {
      setDataTableMock(dataTable);
    }
  }, []);
  const dueData = ["ope", "cor", "ret", "sys", "r&d", "bus"];
  const statusDataHome = ["wishlist", "prioritised", "planned"];
  const handleFilter = (event, isChecked) => {
    if (isChecked === true) {
      setStatusManagement((prev) => [...prev, event.target.value]);
    } else {
      setStatusManagement(
        statusManagement.filter((item) => item !== event.target.value)
      );
    }
  };
  function groupByKey(array, key) {
    const group = array.reduce((hash, obj) => {
      if (obj[key] === undefined) return hash;
      return Object.assign(hash, {
        [obj[key]]: (hash[obj[key]] || []).concat(obj),
      });
    }, {});
    return Object.values(group);
  }
  const handleGroupData = (event) => {
    switch (event.target.value) {
      case "1":
        setSelectGroup("1");
        localStorage.setItem(
          "current",
          JSON.stringify({ type: "1", data: dataTable, key: null })
        );
        setDataTableMock(dataTable);
        break;
      case "2": {
        setSelectGroup("2");
        const newData = groupByKey([...dataTable], "dueName");
        setKey("dueName");
        setDataTableMock(newData);
        localStorage.setItem(
          "current",
          JSON.stringify({
            type: "2",
            data: newData,
            key: "dueName",
            dueColor: "dueColor",
          })
        );
        break;
      }
      case "3": {
        setSelectGroup("3");
        const newData = groupByKey([...dataTable], "status");
        setKey("status");
        localStorage.setItem(
          "current",
          JSON.stringify({
            type: "3",
            data: newData,
            key: "status",
            typeColor: "typeColor",
          })
        );
        setDataTableMock(newData);
        break;
      }
      case "4": {
        setSelectGroup("4");
        const newData = groupByKey([...dataTable], "type");
        setKey("type");
        localStorage.setItem(
          "current",
          JSON.stringify({
            type: "4",
            data: newData,
            key: "type",
            typeColor: "typeColor",
          })
        );
        setDataTableMock(newData);
        break;
      }
      case "5": {
        setSelectGroup("5");
        const newData = groupByKey([...dataTable], "type");
        setKey("type");
        localStorage.setItem(
          "current",
          JSON.stringify({ type: "5", data: newData, key: "type" })
        );
        setDataTableMock(newData);
        break;
      }
    }
  };
  const search = (data) => {
    return data?.filter((item) =>
      keys.some((key) => item[key]?.toLowerCase().includes(query))
    );
  };
  const renderColor = (e) => {
    let color = "white";
    for (let index = 0; index < e.length; index++) {
      if (e[index].dueColor) {
        color = e[index].dueColor;
      } else {
        color = "#fff";
      }
    }
    return color;
  };
  const onSubmitCreate = (data) => {
    // event.preventDefault();
    // console.log("vao day create");
    console.log("data",data);
    console.log("newdata",newData);
    const newData = {
      ...data,
      ckApproach: stateCkApproach,
      ckBusinessNeed: stateCkBusinessNeed,
    };

    axios
      .post(`https://6281bd1bed9edf7bd877ffb0.mockapi.io/product`, newData)
      .then(async (response) => {
        console.log("add succcess!", response);
        await fetchProductList();
      });

    setState({ ...state, left: false });
  };

  const onSubmitUpdate = (data) => {
    const newData = {
      ...data,
      ckApproach: stateCkApproach,
      ckBusinessNeed: stateCkBusinessNeed,
    };
    axios
      .put(
        `https://6281bd1bed9edf7bd877ffb0.mockapi.io/product/${updateID}`,
        newData
      )
      .then(async (response) => {
        console.log("add succcess!", response);
        await fetchProductList();
      });
    setState({ ...state, left: false });
  };
  //
  const handleDelete = (id) => {
    axios
      .delete(`https://6281bd1bed9edf7bd877ffb0.mockapi.io/product/${id}`)
      .then(async () => {
        console.log("update succcess!", id);
        await fetchProductList();
      });

    handleClose();
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentMenu, setcurrentMenu] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event, index) => {
    setcurrentMenu(index);

    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log(updateID);
  const handleSlidebarFilter = () => {
    console.log("abc");
    setCheckShowSlide(!checkShowSlide);
  };
  return (
    <>
      <MuiModal
        openModal={openModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        saveButton={"yes"}
        styles={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 735,
          height: 226,
          padding: "5px 30px",
        }}
        title={"Upload CSV file"}
        content1={
          "To import existing Opportunities they will be required to be stored in a CSV file."
        }
        content2={
          "Also, please go to Account Settings before you Import to set-up up your Business Units (if required)."
        }
      />
      <div className="home">
        {/* <NewOpportunity /> */}
        <Stack
          direction="column"
          spacing={2}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "end",
            borderBottom: "1px solid rgba(0,0,0,.1)",
            paddingBottom: "15px",
            width: "1280px",
            marginLeft: "20px",
          }}
        >
          <Box style={{ display: "flex" }}>
            <Button
              className="switch-button style-button"
              variant="contained"
              onClick={handleClickSwitch}
            >
              {isChange ? "Switch to Explorer Mode" : "Switch to Backlog Mode"}
            </Button>
            <Button
              className="style-button"
              variant="outlined"
              style={{ marginLeft: "10px", width: "160px" }}
            >
              Pipeline Summary
              <KeyboardArrowDownOutlinedIcon />
            </Button>
            <Button
              className="style-button"
              variant="contained"
              style={{ marginLeft: "10px", minWidth: "90px" }}
            >
              Save View
            </Button>
          </Box>
          <Box style={{ display: "flex" }}>
            <Button
              onClick={handleChange}
              className="style-button"
              variant="outlined"
            >
              <FileUploadIcon />
              Import Csv
            </Button>
            <Button
              onClick={handleSlidebarFilter}
              className="style-button"
              variant="outlined"
            >
              <img src="https://www.svgrepo.com/show/318331/filter.svg" />
              Filter
            </Button>
            <Button className="style-button" variant="outlined">
              <SettingsOutlinedIcon />
              Customise Columns
            </Button>
          </Box>
        </Stack>
        {isChange ? (
          <>
            <Box
              sx={{
                width: 1,
                marginLeft: "20px",
              }}
            >
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 3">
                  <span> Group by:</span>
                  <Box
                    style={{
                      maxHeight: 50,
                      maxWidth: 400,
                      overflow: "scroll hidden",
                      display: "flex",
                    }}
                    className="hide-scroll"
                  >
                    {groupData.map((item, index) => (
                      <Button
                        key={index}
                        className={
                          item.value === selectGroup
                            ? "selected"
                            : "non-selected"
                        }
                        onClick={(event) => handleGroupData(event)}
                        variant="outlined"
                        value={item.value}
                      >
                        {item.name}
                      </Button>
                    ))}
                  </Box>
                </Box>
                <Box gridColumn="span 4" sx={{ marginTop: "15px" }}>
                  <span> Opportunity status:</span>
                  <Box
                    style={{
                      maxHeight: 50,
                      maxWidth: 300,
                      overflow: "scroll hidden",
                      display: "flex",
                      marginTop: "10px",
                    }}
                    className="hide-scroll"
                  >
                    {statusDataHome?.map((e, index) => (
                      <FormControlLabel
                        key={index}
                        value={e}
                        control={
                          <Checkbox
                            defaultChecked
                            // checked={true}
                            onChange={(event, isChecked) =>
                              handleFilter(event, isChecked)
                            }
                          />
                        }
                        label={e}
                      />
                    ))}
                  </Box>
                </Box>
                <Box gridColumn="span 5">
                  {["left"].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button
                        onClick={toggleDrawer(anchor, true)}
                        variant="contained"
                        className="new-button"
                      >
                        <AddIcon className="new-button__Icon" />
                        <span className="new-button__Text">
                          New Opportunity
                        </span>
                      </Button>
                      <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                      >
                        {list(anchor)}
                      </Drawer>
                    </React.Fragment>
                  ))}

                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 300,
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search for opportunity..."
                      inputProps={{ "aria-label": "search for opportunity..." }}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <IconButton
                      type="submit"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                  </Paper>
                </Box>
              </Box>
            </Box>
            <tr
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "1280px",
                margin: "15px auto 5px",
                fontWeight: "500",
              }}
              className="color-row-home"
            >
              <td
                colSpan={9}
                style={{
                  textTransform: "capitalize",
                  fontSize: "12px",
                  padding: "5px",
                  cursor: "pointer",
                  color: "#000",
                  fontWeight: "600",
                  display: "flex",
                }}
              >
                <td>Opportunity Status: </td>
                <td style={{ fontWeight: "400", display: "inline-block" }}>
                  {statusManagement.join(", ")}
                </td>
              </td>
              <td
                colSpan={9}
                style={{
                  textTransform: "capitalize",
                  fontSize: "12px",
                  padding: "5px",
                  cursor: "pointer",
                  color: "#000",
                  fontWeight: "600",
                }}
                onClick={(event) => {
                  setStatusManagement([]);
                }}
              >
                Clear All
              </td>
            </tr>
            <table>
              <thead>
                <tr>
                  {dataTableHeader.map((item, index) => (
                    <th
                      key={index}
                      style={{
                        minWidth: `${item.width}`,
                        padding: "20px 0",
                      }}
                    >
                      {item.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tr>
                <td colSpan={9}>
                  {dataTableMock.length &&
                    selectGroup !== "1" &&
                    dataTableMock.map((e, index) => (
                      <>
                        {e?.length && (
                          <tr
                            key={index}
                            style={{
                              backgroundColor:
                                selectGroup == "2"
                                  ? e[0][`dueColor`] || null
                                  : e[0][`typeColor`],
                              width: "1280px",
                            }}
                            // style={{ backgroundColor: renderColor(e) }}
                          >
                            <td
                              style={{
                                textTransform: "uppercase",
                                fontWeight: "600",
                                fontSize: "12px",
                                padding: "5px",
                                cursor: "pointer",
                                color: "white",
                              }}
                            >
                              {e[0][`${key}`]}
                            </td>
                          </tr>
                        )}
                        <tbody
                          className="table-body"
                          style={{ display: "block" }}
                        >
                          {e?.length &&
                            search(e)?.map(
                              (data, index) =>
                                statusManagement.includes(data.status) && (
                                  <tr key={index}>
                                    <td style={{ minWidth: "305px" }}>
                                      {data.headline}
                                    </td>
                                    <td style={{ minWidth: "125px" }}>
                                      {data.type}
                                    </td>
                                    <td
                                      style={{
                                        minWidth: "85px",
                                        marginRight: "10px",
                                      }}
                                    >
                                      <Chip
                                        variant="outlined"
                                        color={data.color}
                                        label={data.status}
                                      />
                                    </td>
                                    <td style={{ minWidth: "125px" }}>
                                      {data.for}
                                    </td>
                                    <td style={{ minWidth: "125px" }}>
                                      {data.dueName && (
                                        <Avatar
                                          sx={{
                                            bgcolor: data.dueColor,
                                          }}
                                        >
                                          {data.dueName}
                                        </Avatar>
                                      )}
                                    </td>
                                    <td style={{ minWidth: "180px" }}>
                                      {data.planned}
                                    </td>
                                    <td style={{ minWidth: "80px" }}>
                                      {data.effort}
                                    </td>
                                    <td style={{ minWidth: "80px" }}>
                                      {data.effort}
                                    </td>
                                    <td style={{ minWidth: "140px" }}>
                                      <StyledRating
                                        name="customized-color"
                                        defaultValue={data.business}
                                        precision={1}
                                        icon={<CircleIcon fontSize="inherit" />}
                                        emptyIcon={
                                          <CircleIcon fontSize="inherit" />
                                        }
                                      />
                                    </td>
                                  </tr>
                                )
                            )}
                        </tbody>
                      </>
                    ))}
                  {selectGroup === "1" && (
                    <>
                      <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="characters">
                          {(provided) => (
                            <tbody
                              // className="characters"
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              // className="table-body"
                              style={{ display: "block" }}
                            >
                              {productList.length &&
                                search(productList)?.map(
                                  (data, index) =>
                                    statusManagement.includes(data.status) && (
                                      <Draggable
                                        key={index}
                                        draggableId={data.id}
                                        index={index}
                                      >
                                        {(provided) => (
                                          <tr
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            key={index}
                                          >
                                            <td
                                              onClick={toggleDrawerUpdate(
                                                "left",
                                                true,
                                                data
                                              )}
                                              style={{ minWidth: "305px" }}
                                            >
                                              {data.headline}
                                            </td>
                                            <td style={{ minWidth: "125px" }}>
                                              {data.type}
                                            </td>
                                            <td
                                              style={{
                                                minWidth: "85px",
                                                marginRight: "10px",
                                              }}
                                            >
                                              <Chip
                                                variant="outlined"
                                                color={data.color}
                                                label={data.status}
                                              />
                                            </td>
                                            <td style={{ minWidth: "125px" }}>
                                              {data.for}
                                            </td>
                                            <td style={{ minWidth: "125px" }}>
                                              <Avatar
                                                sx={{
                                                  bgcolor: data.dueName
                                                    ? data.dueColor
                                                    : null,
                                                }}
                                              >
                                                {data.dueName || ""}
                                              </Avatar>
                                            </td>
                                            <td style={{ minWidth: "180px" }}>
                                              {data.planned}
                                            </td>
                                            <td style={{ minWidth: "80px" }}>
                                              {data.assigned}
                                            </td>
                                            <td style={{ minWidth: "80px" }}>
                                              {data.effort}
                                            </td>
                                            <td style={{ minWidth: "130px" }}>
                                              <td
                                                style={{
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                  alignItems: "center",
                                                }}
                                              >
                                                <StyledRating
                                                  // === 1 edit here
                                                  readOnly
                                                  name="customized-color"
                                                  defaultValue={data.business}
                                                  precision={1}
                                                  icon={<CircleIcon />}
                                                  emptyIcon={<CircleIcon />}
                                                />
                                                <div>
                                                  <IconButton
                                                    aria-label="more"
                                                    id="long-button"
                                                    aria-controls={
                                                      open
                                                        ? "long-menu"
                                                        : undefined
                                                    }
                                                    aria-expanded={
                                                      open ? "true" : undefined
                                                    }
                                                    aria-haspopup="true"
                                                    onClick={(event) =>
                                                      handleClick(event, index)
                                                    }
                                                  >
                                                    <MoreVertIcon />
                                                  </IconButton>
                                                  <Menu
                                                    id={"long-menu" + index}
                                                    anchorEl={anchorEl}
                                                    open={
                                                      open &&
                                                      currentMenu == index
                                                    }
                                                    onClose={handleClose}
                                                    PaperProps={{
                                                      style: {
                                                        maxHeight:
                                                          ITEM_HEIGHT * 4.5,
                                                        width: "26ch",
                                                      },
                                                    }}
                                                  >
                                                    <MenuItem
                                                      onClick={toggleDrawerUpdate(
                                                        "left",
                                                        true,
                                                        data
                                                      )}
                                                    >
                                                      <div
                                                        style={{
                                                          marginRight: "8px",
                                                        }}
                                                      >
                                                        <EditIcon />
                                                      </div>
                                                      Edit Opportunity
                                                    </MenuItem>

                                                    <MenuItem
                                                      className="delete"
                                                      onClick={() =>
                                                        handleDelete(data.id)
                                                      }
                                                    >
                                                      <div
                                                        style={{
                                                          marginRight: "8px",
                                                        }}
                                                      >
                                                        <DeleteOutlineOutlinedIcon />
                                                      </div>
                                                      Delete Opportunity
                                                    </MenuItem>
                                                    <Drawer
                                                      anchor={"left"}
                                                      open={state.left}
                                                      onClose={toggleDrawer(
                                                        "left",
                                                        false
                                                      )}
                                                    >
                                                      {list("left")}
                                                    </Drawer>
                                                  </Menu>
                                                </div>
                                              </td>
                                            </td>
                                          </tr>
                                        )}
                                      </Draggable>
                                    )
                                )}
                            </tbody>
                          )}
                        </Droppable>
                      </DragDropContext>
                    </>
                  )}
                </td>
              </tr>
            </table>
          </>
        ) : (
          <CustomTable />
        )}
      </div>
      <SlidebarFilter checkShowSlide={checkShowSlide} />
    </>
  );
};

export default Home;
