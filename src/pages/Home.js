import React, { useState, useEffect } from "react";
import {
  Stack,
  Button,
  Box,
  styled,
  Paper,
  Checkbox,
  FormControlLabel,
  InputBase,
  IconButton,
  Avatar,
  Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Rating from "@mui/material/Rating";
import CircleIcon from "@mui/icons-material/Circle";
import CustomTable from "./CustomTable";
import { dataTable, dataTableHeader } from "../data";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#faaf007a",
  },
  // '& .MuiRating-iconHover': {
  //   color: '#ff3d47',
  // },
});

const Home = () => {
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
  const handleClick = () => {
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

  return (
    <div className="home">
      <Stack direction="column" spacing={2}>
        <Button
          className="switchButton"
          variant="contained"
          onClick={handleClick}
          style={{ marginLeft: "20px" }}
        >
          {isChange ? "Switch to Explorer Mode" : "Switch to Backlog Mode"}
        </Button>
      </Stack>
      {isChange ? (
        <>
          <Box sx={{ width: 1, marginTop: "10px" }}>
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
                  className="hideScroll"
                >
                  {groupData.map((item, index) => (
                    <Button
                      key={index}
                      className={
                        item.value === selectGroup ? "selected" : "non-selected"
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
                  className="hideScroll"
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
                <Button variant="contained" className="newButton">
                  <AddIcon className="newButton__Icon" />
                  <span className="newButton__Text">New Opportunity</span>
                </Button>
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
            className="color-rowHome"
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
                                  <td style={{ minWidth: "280px" }}>
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
                    <tbody className="table-body" style={{ display: "block" }}>
                      {dataTable.length &&
                        search(dataTable)?.map(
                          (data, index) =>
                            statusManagement.includes(data.status) && (
                              <tr key={index}>
                                <td style={{ minWidth: "280px" }}>
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
                                  {data.effort}
                                </td>
                                <td style={{ minWidth: "80px" }}>
                                  {data.effort}
                                </td>
                                <td style={{ minWidth: "130px" }}>
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
                )}
              </td>
            </tr>
          </table>
        </>
      ) : (
        <CustomTable />
      )}
    </div>
  );
};

export default Home;
