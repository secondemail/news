import React from 'react'
import { Badge, Col, Image, Row } from 'react-bootstrap'
import avatar from '../../assets/download.png'
import './Home.css'
const HomePosts=()=> {
  return (
    <Row className='d-flex justify-content-between py-5'>
      <Col className='post mb-4' lg="4">
        <Image className='post_image' src={avatar} thumbnail />
        <h4 className='badge_category'>
          <Badge bg="secondary">رياضة</Badge>
        </h4>
        <h4 className='title_post'>
          الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
        </h4>
      </Col>
      <Col className='post mb-4' lg="4">
        <Image className='post_image' src={avatar} thumbnail />
        <h4 className='badge_category'>
          <Badge bg="secondary">رياضة</Badge>
        </h4>
        <h4 className='title_post'>
          الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
        </h4>
      </Col>
      <Col className='post mb-4' lg="4">
        <Image className='post_image' src={avatar} thumbnail />
        <h4 className='badge_category'>
          <Badge bg="secondary">رياضة</Badge>
        </h4>
        <h4 className='title_post'>
          الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
        </h4>
      </Col>
      <Col className='post mb-4' lg="4">
        <Image className='post_image' src={avatar} thumbnail />
        <h4 className='badge_category'>
          <Badge bg="secondary">رياضة</Badge>
        </h4>
        <h4 className='title_post'>
          الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
        </h4>
      </Col>
      <Col className='post mb-4' lg="4">
        <Image className='post_image' src={avatar} thumbnail />
        <h4 className='badge_category'>
          <Badge bg="secondary">رياضة</Badge>
        </h4>
        <h4 className='title_post'>
          الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
        </h4>
      </Col>
      <Col className='post mb-4' lg="4">
        <Image className='post_image' src={avatar} thumbnail />
        <h4 className='badge_category'>
          <Badge bg="secondary">رياضة</Badge>
        </h4>
        <h4 className='title_post'>
          الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
        </h4>
      </Col>
    </Row>
  )
}

export default HomePosts
