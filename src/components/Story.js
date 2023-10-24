import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Story = ({item}) => {
return (
    <Row className='storyRow pt-3 pb-5 px-2'>
        <Col>
            <h2 className='story-text pb-2'>القصة :</h2>
            <p className='lead'>{item.overview}</p>
        </Col>
    </Row>
)
}

export default Story