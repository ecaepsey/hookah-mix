import React from 'react'
import {ListGroup, Container, Row, Col, Image} from 'react-bootstrap'

const TasteList = () => {
    return (
        <Container>
 <ListGroup defaultActiveKey="#link1" horizontal>
    <ListGroup.Item action href="#link1">
    ФРУКТОВЫЕ
    </ListGroup.Item>
    <ListGroup.Item action href="#link2">
    ДЕСЕРТНЫЕ 
    </ListGroup.Item>
    <ListGroup.Item action href="#link3">
    ЭКЗОТИЧЕСКИЕ 
    </ListGroup.Item>    
  </ListGroup>
  <Row className="pt-5">
    <Col xs={6} md={4}>
      <Image src="images/1.jpg" rounded width="300" />
    </Col>
    <Col xs={6} md={4}>
    <Image src="images/2.jpeg" rounded width="300"  />
    </Col>
    <Col xs={6} md={4}>
    <Image src="images/3.jpg" rounded width="300" />
    </Col>
  </Row>



        </Container>
       
        
    )
}

export default TasteList
