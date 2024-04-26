import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, InputGroup, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './AdminStyle.css'
import * as formik from 'formik';
import * as yup from 'yup';
import { CircularProgress } from '@mui/material';
import { Flip, ToastContainer } from 'react-toastify';
import notify from './useNotify';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
/* ================ FORM VALIDATION ================ */
  const { Formik } = formik;
  const schema = yup.object().shape({
      userName: yup.string().required('هذا الحقل مطلوب'),
      password: yup.string().required('هذا الحقل مطلوب'),
  });

  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [resdata, setResData] = useState([]);
  
  const login = async (values) => {
    setIsPress(true);
    setLoading(true);
    let res = await axios.get(`https://my-json-server.typicode.com/secondemail/news/users?userName=${values.userName}&&password=${values.password}`);
    setLoading(false);
    setResData(res)
  }
  useEffect(() => {
    if (loading === false) {
      if (resdata && resdata.status === 200) {
        if (resdata.data.length > 0) {
          notify("تم تسجيل الدخول بنجاح", "success")
          localStorage.setItem("skylineLoginUser",JSON.stringify({userName:resdata.data[0].userName,role:resdata.data[0].role,id:resdata.data[0].id}));
          setTimeout(() => {
            window.location.href = "/admin/dashboard";
          }, 1000);
        } else {
          notify("خطأ في اسم المستخدم او كلمة المرور", "error")
          setIsPress(false);
          setLoading(true);
        }

      }
    }
  }, [loading])
  return (
    <Container>
      <Row className='mb-5'>
        <h1 className='text-center'>تسجيل الدخول</h1>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col lg="6">
            <Formik
              validationSchema={schema}
              onSubmit={login}
              initialValues={{
                  userName:"",
                  password:"",
              }}
            >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className='d-flex flex-column mb-3' as={Col} controlId="validationFormikuserName">
                      <InputGroup hasValidation>
                          <FloatingLabel
                            controlId="floatingInputuserName"
                            label="أدخل اسم المستخدم"
                            className="mb-3"
                          >
                          <Form.Control
                            type="text"
                            placeholder="name@example.com"
                            name="userName"
                            value={values.userName}
                            onChange={handleChange}
                            isInvalid={!!errors.userName}
                          />
                          </FloatingLabel>
                      </InputGroup>
                      <Form.Control.Feedback type="invalid">{ errors.userName }</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='d-flex flex-column mb-3' as={Col} controlId="validationFormikpassword">
                      <InputGroup hasValidation>
                          <FloatingLabel
                            controlId="floatingInputpassword"
                            label="أدخل كلمة المرور"
                            className="mb-3"
                          >
                          <Form.Control
                            type="password"
                            placeholder="name@example.com"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            isInvalid={!!errors.password}
                          />
                          </FloatingLabel>
                      </InputGroup>
                      <Form.Control.Feedback type="invalid">{ errors.password }</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className='d-flex flex-column' as={Col} >
                      {
                          isPress ?
                              (
                                  <div className='text-center'>
                                      <CircularProgress />
                                  </div>
                              )
                              :
                              (
                                  <Button className="btn-login mx-auto w-100" type="submit">تسجيل الدخول</Button>
                                  
                              )
                      }
                  </Form.Group>
                </Form>
            )}
            </Formik>
        </Col>
      </Row>
      <div className='py-5'>
        <Link className='btn btn-dark' to="/admin/signUp">
          تسجيل حساب جديد
        </Link>
      </div>
      <ToastContainer position="top-center" autoClose={1000} theme="colored" transition={Flip} />
    </Container>
  )
}

export default AdminLogin