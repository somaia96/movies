import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Details = ({item}) => {

  return (
    <Row className='align-items-center p-3 det-row'>
      <Col sm={3} className='img-par par'>
        <img className='img-size' src={"https://image.tmdb.org/t/p/w500"+item.poster_path} alt='img'/>
      </Col>
      <Col sm={9} className=''>
        <div className='d-flex det gap-2'>
        <span className='det-span'>اسم الفيلم : {item.title}</span>
        <span className='det-span'>تاريخ الاصدار : {item.release_date}</span>
        <span className='det-span'>عدد المقيمين : {item.vote_count}</span>
        <span className='det-span'>التقييم : {item.vote_average}</span>
        </div>
      </Col>
    </Row>
  )
}

export default Details
