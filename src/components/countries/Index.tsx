import React, {useState} from "react";
import { useSelector } from "react-redux";
//material ui components
import {
  TableContainer,
  Table,
  Paper,
  TableFooter,
  TableRow,
  TablePagination,
} from "@mui/material";

//import components
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Error from "../Error";
import Loading from "../Loading";
import { InitialState } from "../../redux/store";

type InputTextProps = {
  inputText: string
}

const Index = ({ inputText }: InputTextProps) => {
  const countries = useSelector((state: InitialState) => state.countries.countries);
  const loading = useSelector((state: InitialState) => state.countries.loading);
  const error = useSelector((state: InitialState) => state.countries.error);

  //pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number ) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error err={error} />;
  }
  return (
    <Paper>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead />
          <TableBody
            countries={countries}
            page={page}
            rowsPerPage={rowsPerPage}
            inputText={inputText}
          />
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={countries ? countries.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Index;
