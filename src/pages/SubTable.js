// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Box,
//   styled,
//   Paper,
//   Checkbox,
//   FormControlLabel,
//   InputBase,
//   IconButton,
//   TableCell,
//   Table,
//   TableContainer,
//   TableBody,
//   TableRow,
//   TableHead,
//   Avatar,
//   Chip,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import SearchIcon from "@mui/icons-material/Search";
// import CircleIcon from "@mui/icons-material/Circle";
// import Rating from "@mui/material/Rating";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { dataTable } from "../data";

// // const Item = styled(Paper)(({ theme }) => ({
// //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
// //   ...theme.typography.body2,
// //   padding: theme.spacing(1),
// //   textAlign: "center",
// //   color: theme.palette.text.secondary,
// // }));
// const StyledRating = styled(Rating)({
//   "& .MuiRating-iconFilled": {
//     color: "#faaf007a",
//   },
//   // '& .MuiRating-iconHover': {
//   //   color: '#ff3d47',
//   // },
// });

// const SubTable = () => {
//   const [map, setMap] = useState(new Map());
//   const [characters, updateCharacters] = useState(dataTable);
//   // console.log(dataTable);

//   function handleOnDragEnd(result) {
//     console.log(result);
//     if (!result.destination) return;

//     const items = Array.from(characters);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);

//     updateCharacters(items);
//   }

//   const statusData = [
//     "wishlist",
//     "prioritised",
//     "in progress",
//     "planned",
//     "blocked",
//     "completed",
//   ];

//   useEffect(() => {
//     setMap(
//       new Map(
//         statusData.map((object) => {
//           console.log(object);
//           return [object, false];
//         })
//       )
//     );
//   }, []);

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
//               {statusData.map((e) => (
//                 <FormControlLabel
//                   value={e}
//                   control={
//                     <Checkbox
//                       onChange={(event, isChecked) => {
//                         const newMap = new Map(map);
//                         newMap.set(event.target.value.toLowerCase(), isChecked);
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
//             <Button variant="contained">
//               {" "}
//               <AddIcon />
//               New Opportunity
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
//       <TableContainer component={Paper}>
//         <Table aria-label="caption table">
//           <TableHead>
//             <TableRow>
//               <TableCell align="left">headline</TableCell>
//               <TableCell align="left">type</TableCell>
//               <TableCell align="left">status</TableCell>
//               <TableCell align="left">for</TableCell>
//               <TableCell align="left">due</TableCell>
//               <TableCell align="left">planned</TableCell>
//               <TableCell align="left">assigned</TableCell>
//               <TableCell align="left">effort</TableCell>
//               <TableCell align="left">business</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableCell colSpan={9}>
//               {statusData.map((item) => {
//                 return (
//                   <Accordion hidden={!map.get(item)}>
//                     <AccordionSummary
//                       expandIcon={<ExpandMoreIcon />}
//                       aria-controls="panel1a-content"
//                       id="panel1a-header"
//                     >
//                       <Typography>{item}</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <DragDropContext onDragEnd={handleOnDragEnd}>
//                         <Droppable droppableId="characters">
//                           {(provided) => (
//                             <TableBody
//                               style={{
//                                 display: "inline-table",
//                                 width: "100%",
//                               }}
//                               {...provided.droppableProps}
//                               ref={provided.innerRef}
//                               className="characters"
//                             >
//                               {characters.map((data, index) => {
//                                 return (
//                                   <Draggable
//                                     key={data.id}
//                                     draggableId={data.id}
//                                     index={index}
//                                   >
//                                     {(provided) =>
//                                       data.status === item && (
//                                         <TableRow
//                                           key={data.id}
//                                           ref={provided.innerRef}
//                                           {...provided.draggableProps}
//                                           {...provided.dragHandleProps}
//                                         >
//                                           <TableCell
//                                             // width={"13%"}
//                                             align="left"
//                                           >
//                                             {data.headline}
//                                           </TableCell>
//                                           <TableCell
//                                             // width={"6%"}
//                                             align="left"
//                                           >
//                                             {data.type}
//                                           </TableCell>
//                                           <TableCell
//                                             align="left"
//                                             // width={"9%"}
//                                           >
//                                             <Chip
//                                               variant="outlined"
//                                               color={data.color}
//                                               label={data.status}
//                                             />
//                                           </TableCell>
//                                           <TableCell
//                                             // width={"7%"}
//                                             align="left"
//                                           >
//                                             {data.for}
//                                           </TableCell>
//                                           <TableCell
//                                             // width={"7%"}
//                                             align="left"
//                                           >
//                                             <Avatar
//                                               sx={{
//                                                 bgcolor:
//                                                   data.due[0][`bg-color`],
//                                               }}
//                                             >
//                                               {data.due[0].name}
//                                             </Avatar>
//                                           </TableCell>
//                                           <TableCell
//                                             // width={"10%"}
//                                             align="left"
//                                           >
//                                             {data.planned}
//                                           </TableCell>
//                                           <TableCell
//                                             // width={"10%"}
//                                             align="left"
//                                           >
//                                             {data.assigned}
//                                           </TableCell>
//                                           <TableCell
//                                             // width={"10%"}
//                                             align="left"
//                                           >
//                                             <PermIdentityIcon />
//                                             {data.effort}
//                                           </TableCell>
//                                           <TableCell
//                                             // width={"10%"}
//                                             align="left"
//                                           >
//                                             <StyledRating
//                                               name="customized-color"
//                                               defaultValue={data.business}
//                                               precision={1}
//                                               icon={
//                                                 <CircleIcon fontSize="inherit" />
//                                               }
//                                               emptyIcon={
//                                                 <CircleIcon fontSize="inherit" />
//                                               }
//                                             />
//                                           </TableCell>
//                                         </TableRow>
//                                       )
//                                     }
//                                   </Draggable>
//                                 );
//                               })}
//                             </TableBody>
//                           )}
//                         </Droppable>
//                       </DragDropContext>
//                     </AccordionDetails>
//                   </Accordion>
//                 );
//               })}
//             </TableCell>
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default SubTable;
