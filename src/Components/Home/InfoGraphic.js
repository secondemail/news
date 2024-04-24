import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import avatar from '../../assets/download.png'
import AccessTimeIcon  from '@mui/icons-material/AccessTime';


const InfoGraphic = () => {
  var loop = [1, 2];
  return (
    <Row className='economic infografic pt-4 mb-5 pb-5'>
        <h1 style={{ borderRight: "10px solid #594b42", paddingRight: "10px",color:"white" }}>
          إنفوغرافيك
          <ReplyAllIcon fontSize='large' style={{marginRight:"15px"}}/>
        </h1>
        <Row className='pt-5'>
          {
            loop.map((i, index) =>
              (
                <Col key={index} lg="6">
                  <img src={avatar} />
                  <div>
                    <h3 style={{color:"white"}}>
                      الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
                    </h3>
                    <span style={{fontSize:"16px",color:"white"}}>
                      <AccessTimeIcon style={{marginLeft:"7px"}} fontSize='small' />
                      14 ابريل 2024
                    </span>
                  </div>
                </Col>
              )
            )
          }
        </Row>
    </Row>
  )
}

export default InfoGraphic
