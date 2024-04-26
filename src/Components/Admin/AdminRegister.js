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

const AdminRegister = () => {
/* ================ FORM VALIDATION ================ */
  const { Formik } = formik;
  const schema = yup.object().shape({
    userName: yup.string().matches(/^[\w\u0600-\u06FF]+$/, 'اسم المستخدم يحتوي فقط على ارقام او (_)').required('هذا الحقل مطلوب').test('Unique username', 'هذا الاسم موجود من قبل',
    async (value) => {
      const res = await axios.get(`https://my-json-server.typicode.com/secondemail/news/users?userName=${value}`);
      let user=""
      if (res.data.length > 0) {
        user= res.data[0].userName;
      }
      if (value===user){
        return false  
      } else {
        return true
      }
  }
    
    ),
      password: yup.string().required('هذا الحقل مطلوب'),
  });

  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [resdata, setResData] = useState([]);
  
  const login = async (values) => {
    setIsPress(true);
    setLoading(true);
    let res = await axios.post(`https://my-json-server.typicode.com/secondemail/news/users`, {
      userName: values.userName,
      password: values.password,
      role: "admin"
    });
    setLoading(false);
    setResData(res)
  }
  useEffect(() => {
    if (loading === false) {
      if (resdata.status === 201) {
        if (resdata.data) {
          notify("تم تسجيل الحساب بنجاح", "success")
          localStorage.setItem("skylineLoginUser",JSON.stringify({userName:resdata.data.userName,role:resdata.data.role,id:resdata.data.id}));
          setTimeout(() => {
            window.location.href = "/admin/dashboard";
          }, 1000);
        }
      } else {
          notify("خطأ", "error")
          setIsPress(false);
          setLoading(true);
        }
    }
  }, [loading])
  return (
    <Container>
      <Row className='mb-5'>
        <h1 className='text-center'>تسجيل حساب جديد</h1>
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
                      <Form.Control.Feedback style={{display:"block"}} type="invalid">{ errors.userName }</Form.Control.Feedback>
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
                                  <Button className="btn-login mx-auto w-100" type="submit">تسجيل المستخدم</Button>
                              )
                      }
                  </Form.Group>
                </Form>
            )}
            </Formik>
        </Col>
      </Row>
      <div className='py-5'>
        <Link className='btn btn-dark' to="/admin/login">
          لديك حساب 
        </Link>
      </div>
      <ToastContainer position="top-center" autoClose={1000} theme="colored" transition={Flip} />
    </Container>
  )
}

export default AdminRegister