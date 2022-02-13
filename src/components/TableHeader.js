import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TableHeader = () => {
  return (
    <TableHead className="table-head-container">
      <TableRow>
        <TableCell align="center">FLAG</TableCell>
        <TableCell align="center">NAME</TableCell>
        <TableCell align="center">POPULATION&nbsp;</TableCell>
        <TableCell align="center">REGION&nbsp;</TableCell>
        <TableCell align="center">LANGUAGES&nbsp;</TableCell>
        <TableCell align="center">Favourites</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
