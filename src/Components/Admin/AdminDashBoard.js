import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'

const AdminDashBoard = () => {
  useEffect(() => {
    if (localStorage.getItem("skylineLoginUser") === null) {
      window.location.href = "/";
    }
  },[])
  return (
    <Container>
      <Row >
        {
          localStorage.getItem("skylineLoginUser") !== null ?
            (<h1> أهلا,{ JSON.parse(localStorage.getItem("skylineLoginUser")).userName } </h1>):null
        }
      </Row>
    </Container>
  )
}

export default AdminDashBoard
