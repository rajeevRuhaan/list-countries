import {
  SORT_NAME_ASC,
  SORT_NAME_DES,
  SORT_POPULATION_ASC,
  SORT_POPULATION_DES,
  SORT_REGION_ASC,
  SORT_REGION_DES,
  NO_SORT,
} from "../../constant";

export const noSort = () => {
  return {
    type: NO_SORT,
    payload: "",
  };
};
export const sortNameAsc = () => {
  return {
    type: SORT_NAME_ASC,
    payload: "nameAsc",
  };
};
export const sortNameDes = () => {
  return {
    type: SORT_NAME_DES,
    payload: "nameDes",
  };
};
export const sortPopulationAsc = () => {
  return {
    type: SORT_POPULATION_ASC,
    payload: "populationAsc",
  };
};
export const sortPopulationDes = () => {
  return {
    type: SORT_POPULATION_DES,
    payload: "populationDes",
  };
};
export const sortRegionAsc = () => {
  return {
    type: SORT_REGION_ASC,
    payload: "regionAsc",
  };
};
export const sortRegionDes = () => {
  return {
    type: SORT_REGION_DES,
    payload: "regionDes",
  };
};

type NoSortAction = {type: typeof NO_SORT, payload: string}
type SortNameAscAction = {type: typeof SORT_NAME_ASC, payload: string}
type SortNameDesAction = {type: typeof SORT_NAME_DES, payload: string}
type SortPopulationAscAction = {type: typeof SORT_POPULATION_ASC, payload: string}
type SortPopulationDesAction = {type: typeof SORT_POPULATION_DES, payload: string}
type SortRegionAscAction ={type: typeof SORT_REGION_ASC, payload: string}
type SortRegionDesAction = {type: typeof SORT_REGION_DES, payload: string}

export type Actions = NoSortAction | SortNameAscAction | SortNameDesAction | SortPopulationAscAction | SortPopulationDesAction | SortRegionAscAction | SortRegionDesAction