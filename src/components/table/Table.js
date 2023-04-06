/* eslint-disable jsx-a11y/anchor-is-valid */
import Data from '../../Data.json';
import { useState } from 'react';

function Table() {
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)

  return (
    <div>
      <table className='table-history'>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {records.map((d,i) => (
            <tr key={i}>
              <td>{d.ID}</td>
              <td>{d.Name}</td>
              <td>{d.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className='pagination'>
          <li>
            <a href='#' className='page-link'
            onClick={prePage}>Pref</a>
          </li>
          {
             numbers.map((n, i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <a href='#' className='page-link'
                onClick={()=> changeCPage(n)} >{n}</a>
              </li>
             ))
          }
          <li className='page-item'>
            <a href='#' className='page-link'
            onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
  function prePage() {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  function changeCPage(id) {
    setCurrentPage(id)
  }
  function nextPage() {
    if(currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }
}

export default Table;
