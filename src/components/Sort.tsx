import { useDispatch, useSelector } from "react-redux";
import {
  noSort,
  sortNameAsc,
  sortNameDes,
  sortPopulationDes,
  sortPopulationAsc,
  sortRegionAsc,
  sortRegionDes,
} from "../redux/sort/action";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.sort.sort);

  const handleSort = (sortAction) => {
    if (sortAction === "") {
      return dispatch(noSort());
    } else if (sortAction === "populationAsc") {
      return dispatch(sortPopulationAsc());
    } else if (sortAction === "populationDes") {
      return dispatch(sortPopulationDes());
    } else if (sortAction === "nameAsc") {
      return dispatch(sortNameAsc());
    } else if (sortAction === "nameDes") {
      return dispatch(sortNameDes());
    } else if (sortAction === "regionAsc") {
      return dispatch(sortRegionAsc());
    } else if (sortAction === "regionDes") {
      return dispatch(sortRegionDes());
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="sort by select">sort</InputLabel>
      <Select
        labelId="sort by select"
        id="demo-simple-select"
        value={sort}
        label="Sort"
        onChange={(e) => {
          handleSort(e.target.value);
        }}
      >
        <MenuItem value={""}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={"populationDes"}>Population ↓</MenuItem>
        <MenuItem value={"populationAsc"}>Population ↑</MenuItem>
        <MenuItem value={"nameDes"}>Name ↓</MenuItem>
        <MenuItem value={"nameAsc"}>Name ↑</MenuItem>
        <MenuItem value={"regionDes"}>Region ↓</MenuItem>
        <MenuItem value={"regionAsc"}>Region ↑</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Sort;
