// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Box,
//   Paper,
//   Checkbox,
//   FormControlLabel,
//   InputBase,
//   IconButton,
//   styled,
//   Chip,
//   Avatar,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import SearchIcon from "@mui/icons-material/Search";
// import CircleIcon from "@mui/icons-material/Circle";
// import Rating from "@mui/material/Rating";
// import { dataTable, dataTableHeader } from "../data";

// const StyledRating = styled(Rating)({
//   "& .MuiRating-iconFilled": {
//     color: "#faaf007a",
//   },
//   // '& .MuiRating-iconHover': {
//   //   color: '#ff3d47',
//   // },
// });

// const CustomTable = () => {
//   const [map, setMap] = useState(new Map());
//   const [collapse, setCollapse] = useState(true);
//   const statusData = [
//     "wishlist",
//     "prioritised",
//     // "in progress",
//     "planned",
//     // "blocked",
//     // "completed",
//   ];

//   useEffect(() => {
//     const newMap = new Map(map);
//     setMap(newMap);
//   }, []);
//   const handleCollapse = () => {
//     setCollapse(!collapse);
//   };
//   return (
//     <div>
//       <Box sx={{ width: 1, marginTop: "10px" }}>
//         <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
//           <Box gridColumn="span 6" sx={{ marginTop: "15px" }}>
//             <span> Opportunity status:</span>
//             <Box
//               style={{
//                 maxHeight: 50,
//                 maxWidth: 200,
//                 display: "flex",
//                 marginTop: "10px",
//               }}
//             >
//               {statusData.map((e, index) => (
//                 <FormControlLabel
//                   key={index}
//                   value={e}
//                   control={
//                     <Checkbox
//                       defaultChecked
//                       onChange={(event, isChecked) => {
//                         const newMap = new Map(map);
//                         if (isChecked) {
//                           newMap.set(event.target.value.toLowerCase(), true);
//                         } else {
//                           newMap.delete(event.target.value.toLowerCase());
//                         }
//                         setMap(newMap);
//                       }}
//                     />
//                   }
//                   label={e}
//                 />
//               ))}
//             </Box>
//           </Box>
//           <Box gridColumn="span 5">
//             <Button variant="contained" className="newButton">
//               <AddIcon className="newButton__Icon" />
//               <span className="newButton__Text">New Opportunity</span>
//             </Button>
//             <Paper
//               component="form"
//               sx={{
//                 p: "2px 4px",
//                 display: "flex",
//                 alignItems: "center",
//                 width: 300,
//               }}
//             >
//               <InputBase
//                 sx={{ ml: 1, flex: 1 }}
//                 placeholder="Search for opportunity..."
//                 inputProps={{ "aria-label": "Search for opportunity..." }}
//               />
//               <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
//                 <SearchIcon />
//               </IconButton>
//             </Paper>
//           </Box>
//         </Box>
//       </Box>
//       <table>
//         <thead>
//           <tr>
//             {dataTableHeader.map((item, index) => (
//               <th
//                 key={index}
//                 style={{
//                   minWidth: `${item.width}`,
//                   padding: "20px 0",
//                 }}
//               >
//                 {item.name}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tr>
//           <td colSpan={9}>
//             {statusData.map((item, index) => {
//               return (
//                 <tbody
//                   key={index}
//                   className="table-body"
//                   style={{ display: `${map.has(item) ? "table" : "none"}` }}
//                 >
//                   <tr className="color-row">
//                     <td
//                       colSpan={9}
//                       style={{
//                         textTransform: "uppercase",
//                         color: "white",
//                         fontWeight: "600",
//                         fontSize: "12px",
//                         padding: "5px",
//                         cursor: "pointer",
//                       }}
//                       onClick={handleCollapse}
//                     >
//                       {item}
//                     </td>
//                   </tr>
//                   {dataTable.map(
//                     (data, index) =>
//                       collapse &&
//                       data.status === item && (
//                         <tr key={index}>
//                           <td style={{ width: "300px" }}>{data.headline}</td>
//                           <td style={{ width: "50px" }}>{data.type}</td>
//                           <td style={{ width: "125px" }}>
//                             <Chip
//                               variant="outlined"
//                               color={data.color}
//                               label={data.status}
//                             />
//                           </td>
//                           <td style={{ width: "125px" }}>{data.for}</td>
//                           <td style={{ width: "125px" }}>
//                             <Avatar
//                               sx={{
//                                 bgcolor: data.dueColor,
//                               }}
//                             >
//                               {data.dueName}
//                             </Avatar>
//                           </td>
//                           <td style={{ width: "200px" }}>{data.planned}</td>
//                           <td style={{ width: "80px" }}>{data.effort}</td>
//                           <td style={{ width: "80px" }}>{data.effort}</td>
//                           <td style={{ width: "160px" }}>
//                             <StyledRating
//                               name="customized-color"
//                               defaultValue={data.business}
//                               precision={1}
//                               icon={<CircleIcon fontSize="inherit" />}
//                               emptyIcon={<CircleIcon fontSize="inherit" />}
//                             />
//                           </td>
//                         </tr>
//                       )
//                   )}
//                 </tbody>
//               );
//             })}
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// };

// export default CustomTable;
