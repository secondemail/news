import React from 'react'
import { Badge, Col, Image, Row } from 'react-bootstrap'
import avatar from '../../assets/1.webp'
import avatar1 from '../../assets/2.webp'
import avatar2 from '../../assets/3.webp'
import avatar3 from '../../assets/4.webp'
import avatar4 from '../../assets/5.webp'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import './Home.css'
import  ReplyAllIcon  from '@mui/icons-material/ReplyAll';

const HomeGallerey=()=> {
  return (
    <Row className='d-flex justify-content-between py-5'>
      <h3 className='mb-4' style={{ borderRight: "10px solid #07284a", paddingRight: "10px" }}>
        حديث الصور
        <ReplyAllIcon style={{marginRight:"15px"}}/>
      </h3>
      <Row>
        <Col className='post mb-4' lg="6">
          <Image className='post_image' src={avatar} thumbnail />
          <h4 className='badge_category'>
            <Badge bg="secondary">
              9 <CameraAltIcon/>
            </Badge>
          </h4>
          <h4 className='title_post'>
كسوف الشمس.. مشهد سماوي لن يتكرر قبل 2044
          </h4>
        </Col>
        <Col className='post mb-4' lg="6">
          <Image className='post_image' src={avatar1} thumbnail />
          <h4 className='badge_category'>
            <Badge bg="secondary">
              15 <CameraAltIcon/>
            </Badge>
          </h4>
          <h4 className='title_post'>
            غزة.. فرحة رمضان تتحدى مرارة الحرب
          </h4>
        </Col>
      </Row>
      <Row>
        <Col className='post mb-4' lg="4">
          <Image className='post_image' src={avatar2} thumbnail />
          <h4 className='badge_category'>
            <Badge bg="secondary">
              15 <CameraAltIcon/>
            </Badge>
          </h4>
          <h4 className='title_post'>
وفي غزة.. فرح!          </h4>
        </Col>
        <Col className='post mb-4' lg="4">
          <Image className='post_image' src={avatar3} thumbnail />
          <h4 className='badge_category'>
            <Badge bg="secondary">
              8 <CameraAltIcon/>
            </Badge>
          </h4>
          <h4 className='title_post'>

بمشاركة محمد رمضان.. حفل أمم إفريقيا يجسد روح القارة السمراء          </h4>
        </Col>
        <Col className='post mb-4' lg="4">
          <Image className='post_image' src={avatar4} thumbnail />
          <h4 className='badge_category'>
            <Badge bg="secondary">
              12 <CameraAltIcon/>
            </Badge>
          </h4>
          <h4 className='title_post'>
العالم يودع 2023          </h4>
        </Col>
      </Row>
    </Row>
  )
}

export default HomeGallerey
