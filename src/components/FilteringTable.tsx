import React from "react";
import users from "../data/MOCK_DATA.json";
import { COLUMNS } from "./Columns";
import FilteringTableComponent from './Table/FilteringTableComponent'


interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  age: number;
  country: string;
  phone: string;
}

const BasicTable = () => {
  const columns = React.useMemo(() => COLUMNS, []);
  const data: IUser[] = React.useMemo(() => users, []);
  return (
    <FilteringTableComponent columns={columns} data={data} />
  );
};

export default BasicTable;
