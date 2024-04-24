import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <Container className='pt-5'>
      <Row className='pt-5'>
        <Col lg="8">
          <h5>
            تابعنا  على المنصات المختلفه
          </h5>
        </Col>
        <Col className='text-center' lg="4">
          <FacebookIcon fontSize='large' className='mx-2'/>
          <InstagramIcon fontSize='large' className='mx-2'/>
          <LinkedInIcon fontSize='large' className='mx-2'/>
          <XIcon fontSize='large' className='mx-2'/>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col lg="3" sm="6" xs="4">
          <h5>
            الآن نيوز
            <hr/>
          </h5>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
        </Col>
        <Col lg="3" sm="6" xs="4">
          <h5>
            الآن نيوز
            <hr/>
          </h5>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
        </Col>
        <Col lg="3" sm="6" xs="4">
          <h5>
            الآن نيوز
            <hr/>
          </h5>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
        </Col>
        <Col lg="3" sm="6" xs="4">
          <h5>
            الآن نيوز
            <hr/>
          </h5>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
          <p>إتصل بنا</p>
        </Col>
      </Row>
      <hr />
      <Row className='text-center pb-5'>
        <h5 className='text-muted'>
          <img width="100" src={logo} /> <br/>
          كافة العلامات التجارية الخاصة بـ Kareem وكل ما تتضمنه من حقوق الملكية الفكرية هي ملك لمجموعة Kareem Co ولا تستخدم إلا بتصريح مسبق
        </h5>
      </Row>
    </Container>
  )
}

export default Footer
