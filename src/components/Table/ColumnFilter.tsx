import React from 'react'
import { Search } from '../Formik/FormControl/Controls' 

interface IProps {
  column: any;
}

const ColumnFilter: React.FC<IProps> = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <Search
      className="mb-0" parentClassName="w-36 mx-auto" 
      varient='purple' placeholder="Search..." 
      value={filterValue || ''} onChange={(e: any) => setFilter(e.target.value)}
    />
  )
}

export default ColumnFilter