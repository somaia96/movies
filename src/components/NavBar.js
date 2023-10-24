import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { GetAllMovie, GetMovieSearch } from '../redux/actions/movieAction';

function NavScrollExample() {

    const search=(word)=>{
        onSearch(word)
    }
    const dispatch =useDispatch()
    const onSearch= (word)=>{
        if(word === ""){
            dispatch(GetAllMovie())
        }else{
        dispatch(GetMovieSearch(word))
        }
    }

return (
<Navbar expand="lg" className='nav-bar'>
    <Container>
        <Row className='w-100 justify-content-between'>
            <Col sm={2}>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            </Col>
            <Col  sm={9} xl={10}>
            <Form className='icon-par'>
            <Form.Control 
                onChange={(e)=>{search(e.target.value)}}
                type="search"
                placeholder="ابحث"
                className="me-2 search px-4"
                aria-label="Search"
            />
            <i className='icon'>O</i>
            </Form>
            </Col>
        </Row>
    </Container>
</Navbar>
);
}

export default NavScrollExample;