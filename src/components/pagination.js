import * as React from "react";
import TablePagination from "@mui/material/TablePagination";

export default function Pagination(props) {
  const {
    count = 100,
    page = 0,
    rowsPerPage = 10,
    handleChangeRowsPerPage = () => {},
    handleChangePage = () => {},
  } = props;

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
