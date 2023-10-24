import React from 'react'
import { Row,Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BtnFilm = () => {
  return (
    <Row className='my-2'>
        <Col className='gap-btn justify-content-center d-flex'>
            <Button className='btn-show'><Link className='link-style' to="/">عودة للرئيسية</Link></Button>
            <Button className='btn-show'><Link className='link-style' to="">مشاهدة الفيلم</Link></Button>
        </Col>
    </Row>
  )
}
export default BtnFilm
