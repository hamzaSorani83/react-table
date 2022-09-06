import React from 'react'
import { Search } from '../Formik/FormControl/Controls' 

interface IProps {
  filter: string;
  setFilter: any;
}

const GlobalFilter: React.FC<IProps> = ({filter, setFilter}) => {
  return (
    <Search
      className="mb-0" parentClassName="w-72 mx-auto" 
      varient='purple' placeholder="Search..." 
      value={filter || ''} onChange={(e: any) => setFilter(e.target.value)}
    />
  )
}

export default GlobalFilter