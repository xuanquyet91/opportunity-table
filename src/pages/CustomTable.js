import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import {
  Button,
  Box,
  Paper,
  Checkbox,
  FormControlLabel,
  InputBase,
  IconButton,
  styled,
  Chip,
  Avatar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import CircleIcon from "@mui/icons-material/Circle";
import Rating from "@mui/material/Rating";
import { dataTable, dataTableHeader } from "../data";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#faaf007a",
  },
  // '& .MuiRating-iconHover': {
  //   color: '#ff3d47',
  // },
});
const CustomTable = () => {
  const [query, setQuery] = useState("");
  const keys = ["headline"];
  //
  const [statusManagement, setStatusManagement] = useState([
    "wishlist",
    "prioritised",
    "planned",
  ]);
  const object = localStorage.getItem("current");
  const [expand, setExpand] = useState(new Map());
  const [debouncedValue] = useDebounce(query, 2000);
  const [dataTableCustom, setDataTableCustom] = useState(
    JSON.parse(object)?.data || []
  );

  const [selectGroup, setSelectGroup] = useState(JSON.parse(object)?.type);
  const [key, setKey] = useState(JSON.parse(object)?.key || null);
  const handleClick = (e) => {
    if (expand.get(e)) {
      const newMap = new Map(expand);
      newMap.delete(e);
      setExpand(newMap);
    } else {
      const newMap = new Map(expand);
      newMap.set(e, true);
      setExpand(newMap);
    }
  };

  useEffect(() => {
    setDataTableCustom(dataTable);
    const newData = groupByKey([...dataTable], "status");
    setKey("status");
    localStorage.setItem(
      "current",
      JSON.stringify({
        type: "1",
        data: newData,
        key: "status",
        typeColor: "typeColor",
      })
    );
    setDataTableCustom(newData);
    setExpand(new Map());
  }, []);

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
  useEffect(() => {
    setStatusManagement(statusManagement);
  }, [statusManagement]);
  function groupByKey(array, key) {
    const group = array.reduce((hash, obj) => {
      if (obj[key] === undefined) return hash;
      return Object.assign(hash, {
        [obj[key]]: (hash[obj[key]] || []).concat(obj),
      });
    }, {});
    return Object.values(group);
  }

  const search = (data) => {
    console.log("vao day ", data);
    return data?.filter((item) =>
      keys.some((key) => item[key]?.toLowerCase().includes(debouncedValue))
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
    <div>
      <Box sx={{ width: 1, marginTop: "10px" }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 4" sx={{ marginTop: "15px" }}>
            <span> Opportunity status:</span>
            <Box
              style={{
                maxHeight: 50,
                maxWidth: 300,
                // overflow: "scroll hidden",
                display: "flex",
                marginTop: "10px",
              }}
            >
              {statusDataHome?.map((e, index) => (
                <FormControlLabel
                  key={index}
                  value={e}
                  control={
                    <Checkbox
                      defaultChecked
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
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Box>
      </Box>
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
            {dataTableCustom?.map((e, index) => (
              <>
                {e?.length > 0 && (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: e[0][`typeColor`],
                      width: "1280px",
                    }}
                    defaultValue={e[0][`dueName`]}
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
                      <button
                        style={{
                          cursor: statusManagement.includes(
                            e[0][`status`].toLowerCase()
                          )
                            ? "pointer"
                            : null,
                        }}
                        className="buttonCollapse"
                        onClick={(event) => {
                          if (
                            statusManagement.includes(
                              event.target.value.toLowerCase()
                            )
                          ) {
                            handleClick(event.target.value.toLowerCase());
                          }
                        }}
                        value={e[0][`status`]}
                      >
                        {e[0][`${key}`]}
                      </button>
                    </td>
                  </tr>
                )}
                {statusManagement.find((item) => item == e[0][`status`]) ? (
                  !expand.get(String(e[0][`status`])?.toLowerCase()) && (
                    <tbody className="table-body" style={{ display: "block" }}>
                      {e?.length &&
                        search(e)?.map(
                          (data, index) =>
                            statusManagement.includes(data?.status) && (
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
                                    label={data?.status}
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
                  )
                ) : (
                  <tr style={{ textAlign: "center" }}>
                    <td style={{ fontSize: "14px" }}> No data found</td>
                  </tr>
                )}
              </>
            ))}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default CustomTable;
