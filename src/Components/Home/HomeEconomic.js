import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import avatar from '../../assets/download.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';


const HomeEconomic = () => {
  var loop = [1, 2, 3,4];
  return (
    <Row className='economic pt-4 mb-5'>
        <h1 className='mb-4' style={{ borderRight: "10px solid #594b42", paddingRight: "10px",color:"white" }}>
          أخبار الاقتصاد
          <ReplyAllIcon fontSize='large' style={{marginRight:"15px"}}/>
        </h1>
        <Row>
          {
            loop.map((i, index) =>
              (
                <Col key={index} className='mb-3' lg="3">
                  <Link to={`/news/${index}`}>
                    <Card>
                      <Card.Img style={{height:"190px"}} variant="top" src={avatar} />
                      <img className='eco_img' src={logo}/>
                      <Card.Body>
                        <Card.Text> رياضة </Card.Text>
                        <Card.Title>
                          الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            )
          }
        </Row>
    </Row>
  )
}

export default HomeEconomic
