import React from 'react'
import { useTable, Column, useGlobalFilter, useFilters } from 'react-table'
import GlobalFilter from './GlobalFilter';

interface IProps {
  columns: Array<Column<object>>;
  data: Array<object>;
}

const Table: React.FC<IProps> = ({columns, data}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    // globalfilter
    useGlobalFilter,
    // localfilter
    useFilters
  );
  // globalfilter
  const { globalFilter } = state;
  
  return (
    <React.Fragment>
      {/* globalFilter */}
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(group => (
            <tr {...group.getHeaderGroupProps()}>
              {group.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}
                  {/* column filter */}
                  <div>{column.canFilter ? column.render("Filter") : null }</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          {footerGroups.map(group => (
            <tr {...group.getFooterGroupProps()}>
              {group.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </ React.Fragment>
  )
}

export default Table