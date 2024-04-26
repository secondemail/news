import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const NotFoundPage = () => {
  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <h1 style={{fontSize: "100px"}} className='text-center'>4<SentimentVeryDissatisfiedIcon style={{ fontSize: "100px",color: "darkred" }} />4</h1>
        <h1 className='text-center'>هذه الصفحة غير متوفره</h1>
      </Row>
    </Container>
  )
}

export default NotFoundPage