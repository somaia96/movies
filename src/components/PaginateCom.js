import React from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllMovie } from '../redux/actions/movieAction';

const PaginateCom = () => {
  const dispatch = useDispatch()
const pageCount = useSelector((state)=>state.moviesReducer.pageCount)

  const changePage=(page)=>{
    dispatch(GetAllMovie(page))
  }

    const handlePageClick=(e)=>{
      changePage(e.selected + 1)
    }
  return (
    <ReactPaginate
    // className='paginate'
    breakLabel="..."
    nextLabel="التالي"
    marginPagesDisplayed={2}
    onPageChange={handlePageClick}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="السابق"
    renderOnZeroPageCount={null}
    containerClassName='pagination justify-content-center p-3'
    pageClassName='page-item'
    nextClassName='page-item'
    previousClassName='page-item'
    pageLinkClassName='page-link'
    previousLinkClassName='page-link'
    nextLinkClassName='page-link'
    breakClassName='page-item'
    breakLinkClassName='page-link'
    activeClassName='active'
  />
  )
}

export default PaginateCom