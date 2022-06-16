import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "../components/button";
import { getSearchItems } from "../api";
import Loading from "../components/loading";
import UserListing from "../components/userListing";
import styles from "./result.module.css";
import Pagination from "../components/pagination";

const Result = () => {
  const navigate = useNavigate();

  const { searchString, type } = useParams();
  const [items, setItems] = useState(null);
  const backToHome = () => {
    navigate("/");
  };
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [storedData, setStoredData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    (async () => {
      const key = `${rowsPerPage}+${page}`;
      const stored = storedData[key];
      if (stored) {
        setItems(stored);
      } else {
        try {
          setIsLoading(true);
          const response = await getSearchItems({
            searchString,
            type,
            per_page: rowsPerPage,
            page: page + 1,
          });
          const data = await response.json();
          setItems(data.items || []);
          setCount(data.total_count);
          setStoredData({ ...storedData, [key]: data.items });
          setIsLoading(false);
        } catch (err) {
          console.log("api error", err);
        }
      }
    })();
  }, [page, rowsPerPage]);

  console.log("stored data", storedData);
  return (
    <Box>
      <h1>Result</h1>
      <Button label="Back" variant="contained" onClick={backToHome} />
      <div className={styles.listing}>
        {!isLoading && items ? (
          <UserListing items={items} />
        ) : (
          <Loading className={styles.loading} />
        )}
      </div>
      <Pagination
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        handleChangePage={handleChangePage}
        count={count}
        page={page}
        rowsPerPage={rowsPerPage}
      />
    </Box>
  );
};

export default Result;
