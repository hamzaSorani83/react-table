import React from "react";
import users from "../data/MOCK_DATA.json";
import { GROUPED_COLUMNS } from "./Columns";
import ReactTableComponent from './Table/TableComponent'

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
  const columns = React.useMemo(() => GROUPED_COLUMNS, []);
  const data: IUser[] = React.useMemo(() => users, []);
  return (
    <ReactTableComponent columns={columns} data={data} />
  );
};

export default BasicTable;
