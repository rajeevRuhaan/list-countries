import React from "react";
// material ui components
import MuiTableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const titles = [
  "FLAG",
  "NAME",
  "POPULATION",
  "REGION",
  "LANGUAGES",
  "FAVOURITES",
];

const TableHead = () => {
  return (
    <MuiTableHead>
      <TableRow>
        {titles.map((title) => {
          return (
            <TableCell align="center" key={title}>
              {title}
            </TableCell>
          );
        })}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
