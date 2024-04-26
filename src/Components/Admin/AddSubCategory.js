import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, InputGroup, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './AdminStyle.css'
import * as formik from 'formik';
import * as yup from 'yup';
import { CircularProgress } from '@mui/material';
import { Flip, ToastContainer } from 'react-toastify';
import notify from './useNotify';

const AddSubCategory = () => {
  /* ================ FORM VALIDATION ================ */
  const { Formik } = formik;
  const schema = yup.object().shape({
    subCatName: yup.string().required('هذا الحقل مطلوب'),
    caption: yup.string().required('هذا الحقل مطلوب'),
    catId: yup.string().required('هذا الحقل مطلوب'),
  });
  
  const [isPress, setIsPress] = useState(false);
  const [loading, setLoading] = useState(true);
  const [resdata, setResData] = useState([]);
  const [loadingCat, setLoadingCat] = useState(true);
  const [resCatData, setResCatData] = useState([]);

  //values images products        
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [images, setImages] = useState([]);
  const [imagesBtn, setImagesBtn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("skylineLoginUser") === null) {
      window.location.href = "/";
    }
    const getCatData = async () => {
      setLoadingCat(true);
      let resCat = await axios.get(`https://my-json-server.typicode.com/secondemail/news/category`);
      setLoading(false);
      setResCatData(resCat.data)
    }
    getCatData();
      cloudinaryRef.current = window.cloudinary;
      widgetRef.current = cloudinaryRef.current.createUploadWidget({
          cloudName: "dd47zs1qk",
          uploadPreset: "woqtczxy",
          multiple: false,
          clientAllowedFormats: ["jpg","jpeg","png"],
          folder: "news/subcategory"
      }, function (error, result) {
          if (result && result.info && result.info.files) {
              setImages(result.info.files);
          }
      })
  }, [])
  
    const handelImageUpload = () => {
        widgetRef.current.open();
    }
    useEffect(() => {
        if (images.length > 0) {
            setImagesBtn(true);
        } else {
            setImagesBtn(false);
        }
    }, [images])
  
  const catSubmit = async (values) => {
    setIsPress(true);
    if (values.catId != "0" && values.catId !== "" && images !="") {
      setLoading(true);
      let res = await axios.post(`https://my-json-server.typicode.com/secondemail/news/subCategory`, {
        title: values.subCatName,
        caption: values.caption,
        catId: values.catId,
        image:images[0].uploadInfo.secure_url
      });
      setLoading(false);
      setResData(res);
    } else {
      notify("الرجاء اكمال البيانات","error")
      setIsPress(false);
    }
  }
  useEffect(() => {
    if (loading === false) {
      if (resdata && resdata.status === 201) {
        notify("تم الاضافة بنجاح","success")
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }
  }, [loading])
  
  return (
    <Container>
      <Row className='mb-4'>
        <h2  className='text-center'>أضف تصنيف فرعي جديد</h2>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col lg="6">
            <div className='mb-4'>
              {
                imagesBtn ?
                    (<button style={{cursor:"not-allowed"}} className='btn btn-secondary' disabled>تم رفع صوره الماركه</button>)
                    :
                    (<button className='btn btn-primary' onClick={handelImageUpload} >رفع صوره الماركه</button>)
              }
            </div>
            <Formik
              validationSchema={schema}
              onSubmit={catSubmit}
              initialValues={{
                  subCatName:"",
                  caption:"", 
                  catId:"",
              }}
            >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className='d-flex flex-column mb-3' as={Col} controlId="validationFormik">
                      <InputGroup hasValidation>
                          <FloatingLabel
                            controlId="floatingInput"
                            label=" أدخل اسم التصنيف الفرعي"
                            className="mb-3"
                          >
                          <Form.Control
                            type="text"
                            placeholder="name@example.com"
                            name="subCatName"
                            value={values.subCatName}
                            onChange={handleChange}
                            isInvalid={!!errors.subCatName}
                          />
                          </FloatingLabel>
                      </InputGroup>
                  </Form.Group>
                  <Form.Group className='d-flex flex-column mb-3' as={Col} controlId="validationFormik2">
                      <InputGroup hasValidation>
                          <FloatingLabel
                            controlId="floatingInput2"
                            label="أدخل وصف التصنيف الفرعي"
                            className="mb-3"
                          >
                          <Form.Control
                            type="text"
                            placeholder="name@example.com"
                            name="caption"
                            value={values.caption}
                            onChange={handleChange}
                            isInvalid={!!errors.caption}
                          />
                          </FloatingLabel>
                      </InputGroup>
                  </Form.Group>
                  <Form.Group className='d-flex flex-column mb-3' as={Col} controlId="validationFormik2">
                      <InputGroup hasValidation>
                        <FloatingLabel controlId="floatingSelect" label="إختر تصنيف رئيسي">
                          <Form.Select isInvalid={!!errors.catId} onChange={handleChange} value={values.catId} name="catId" aria-label="Floating label select example" required>
                            <option value="0">....</option>
                            {
                              resCatData.length>0?
                              resCatData.map(resCat=>
                                (<option key={resCat.id} value={resCat.id}>{ resCat.title }</option>)
                              ):null
                            }
                          </Form.Select>
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

export default AddSubCategory
