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

const AddCategory = () => {
/* ================ FORM VALIDATION ================ */
    const { Formik } = formik;
    const schema = yup.object().shape({
        catName: yup.string().required('هذا الحقل مطلوب'),
    });
  useEffect(() => {
    if (localStorage.getItem("skylineLoginUser") === null) {
      window.location.href = "/";
    }
  }, [])
  
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [resdata, setResData] = useState([]);
  const catSubmit = async (values) => {
    setIsPress(true);
    setLoading(true);
    let res = await axios.post(`https://my-json-server.typicode.com/secondemail/news/src/api/category`, { title: values.catName });
    setLoading(false);
    setResData(res)
    values.catName =""
  }
  useEffect(() => {
    if (loading === false) {
      if (resdata && resdata.status === 201) {
        notify("تم الاضافة بنجاح","success")
        setIsPress(false);
      }
    }
  }, [loading])
  
  return (
    <Container>
      <Row className='mb-4'>
        <h2  className='text-center'>أضف تصنيف جديد</h2>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col lg="6">
            <Formik
              validationSchema={schema}
              onSubmit={catSubmit}
              initialValues={{
                  catName:"",
              }}
            >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className='d-flex flex-column mb-3' as={Col} controlId="validationFormikEmail2">
                      <InputGroup hasValidation>
                          <FloatingLabel
                            controlId="floatingInput"
                            label="أدخل اسم التصنيف"
                            className="mb-3"
                          >
                          <Form.Control
                            type="text"
                            placeholder="name@example.com"
                            name="catName"
                            value={values.catName}
                            onChange={handleChange}
                            isInvalid={!!errors.catName}
                          />
                          </FloatingLabel>
                      </InputGroup>
                      <Form.Control.Feedback type="invalid">{ errors.catName }</Form.Control.Feedback>
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
                                  <Button className="btn-login mx-auto w-100" type="submit">حفظ</Button>
                                  
                              )
                      }
                  </Form.Group>
                </Form>
            )}
            </Formik>
        </Col>
      </Row>
        <ToastContainer position="top-center" autoClose={1000} theme="colored" transition={Flip} />
    </Container>
  )
}

export default AddCategory
