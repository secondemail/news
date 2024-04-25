import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import avatar from '../../assets/1-1706589 (1).webp'
import avatar2 from '../../assets/1-1706431.webp'
import AccessTimeIcon  from '@mui/icons-material/AccessTime';


const InfoGraphic = () => {
  return (
    <Row className='economic infografic pt-4 mb-5 pb-5'>
        <h1 style={{ borderRight: "10px solid #ac0000", paddingRight: "10px",color:"white" }}>
          إنفوغرافيك
          <ReplyAllIcon fontSize='large' style={{marginRight:"15px"}}/>
        </h1>
        <Row className='pt-5'>
          <Col lg="6">
            <img src={avatar} />
            <div>
              <h3 style={{color:"white"}}>
              أنفوغرافيك.. الهجوم الإيراني على إسرائيل بالأرقام
              </h3>
              <span style={{fontSize:"16px",color:"white"}}>
                <AccessTimeIcon style={{marginLeft:"7px"}} fontSize='small' />
                14 ابريل 2024
              </span>
            </div>
          </Col>
          <Col lg="6">
            <img src={avatar2} />
            <div>
              <h3 style={{color:"white"}}>
              إنفوغرافيك.. منظومة إيران الصاروخية
              </h3>
              <span style={{fontSize:"16px",color:"white"}}>
                <AccessTimeIcon style={{marginLeft:"7px"}} fontSize='small' />
                13 ابريل 2024
              </span>
            </div>
          </Col>
        </Row>
    </Row>
  )
}

export default InfoGraphic
