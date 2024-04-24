import React from 'react'
import { Badge, Col, Image, Row } from 'react-bootstrap'
import avatar from '../../assets/download.png'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import './Home.css'
import  ReplyAllIcon  from '@mui/icons-material/ReplyAll';

const HomeGallerey=()=> {
  return (
    <Row className='d-flex justify-content-between py-5'>
      <h3 className='mb-4' style={{ borderRight: "10px solid #594b42", paddingRight: "10px" }}>
        حديث الصور
        <ReplyAllIcon style={{marginRight:"15px"}}/>
      </h3>
      <Row>
        <Col className='post mb-4' lg="6">
          <Image className='post_image' src={avatar} thumbnail />
          <h4 className='badge_category'>
            <Badge bg="secondary">
              15 <CameraAltIcon/>
            </Badge>
          </h4>
          <h4 className='title_post'>
            الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
          </h4>
        </Col>
        <Col className='post mb-4' lg="6">
          <Image className='post_image' src={avatar} thumbnail />
          <h4 className='badge_category'>
            <Badge bg="secondary">
              15 <CameraAltIcon/>
            </Badge>
          </h4>
          <h4 className='title_post'>
            الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
          </h4>
        </Col>
      </Row>
      <Row>
        <Col className='post mb-4' lg="4">
          <Image className='post_image' src={avatar} thumbnail />
          <h4 className='badge_category'>
            <Badge bg="secondary">
              15 <CameraAltIcon/>
            </Badge>
          </h4>
          <h4 className='title_post'>
            الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
          </h4>
        </Col>
        <Col className='post mb-4' lg="4">
          <Image className='post_image' src={avatar} thumbnail />
          <h4 className='badge_category'>
            <Badge bg="secondary">
              15 <CameraAltIcon/>
            </Badge>
          </h4>
          <h4 className='title_post'>
            الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
          </h4>
        </Col>
        <Col className='post mb-4' lg="4">
          <Image className='post_image' src={avatar} thumbnail />
          <h4 className='badge_category'>
            <Badge bg="secondary">
              15 <CameraAltIcon/>
            </Badge>
          </h4>
          <h4 className='title_post'>
            الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
          </h4>
        </Col>
      </Row>
    </Row>
  )
}

export default HomeGallerey
