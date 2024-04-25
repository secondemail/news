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
import DateObject from 'react-date-object';

const AddNews = () => {
  /* ================ FORM VALIDATION ================ */
  const { Formik } = formik;
  const [date, setdate] = useState(new DateObject());
  const schema = yup.object().shape({
    title: yup.string().required('هذا الحقل مطلوب'),
    summary: yup.string().required('هذا الحقل مطلوب'),
    content: yup.string().required('هذا الحقل مطلوب'),
    imageCaption: yup.string().required('هذا الحقل مطلوب'),
    catId: yup.string().required('هذا الحقل مطلوب'),
    subCatId: yup.string().required('هذا الحقل مطلوب'),
  });

  const [isPress, setIsPress] = useState(false);
  const [loading, setLoading] = useState(true);
  const [resCatData, setResCatData] = useState([]);
  const [res, setRes] = useState([]);

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
      let resCat = await axios.get(`https://my-json-server.typicode.com/secondemail/news/src/api/category`);
      setResCatData(resCat.data)
    }
    getCatData();
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName: "dd47zs1qk",
        uploadPreset: "woqtczxy",
        multiple: false,
        folder: "news/newsimage"
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

  const [selectedCatName, setSelectedCatName] = useState("");
  const [selectedCatSubCat, setSelectedCatsubCat] = useState([]);
  const handelselect = async(e) => {
    if (e.target.value !=="0") {
      let ressub = await axios.get(`https://my-json-server.typicode.com/secondemail/news/src/api/subCategory?catId=${e.target.value}`)
      setSelectedCatsubCat(ressub.data)
      setSelectedCatName(e.target.options[e.target.selectedIndex].text);
    } else {
      setSelectedCatsubCat([])
      setSelectedCatName("")
    }
  }    
  
  const catSubmit = async (values) => {
    let userId = ""
    if (localStorage.getItem("skylineLoginUser") !== null) {
      userId = JSON.parse(localStorage.getItem("skylineLoginUser")).id;
    }
    setIsPress(true);
    setLoading(true);
    if (values.catId != "0" && values.catId !== "" &&values.subCatId != "0" && values.subCatId !== "" && images != "" && userId !="") {
      let res = await axios.post(`https://my-json-server.typicode.com/secondemail/news/src/api/news`, {
        title: values.title,
        summary: values.summary,
        content: values.content,
        imageCaption: values.imageCaption,
        catId: values.catId,
        subCatId: values.subCatId,
        image: images[0].uploadInfo.secure_url,
        userId: userId,
        catName: selectedCatName,
        important: values.important,
        date: date.format(),
        time: date.format(date.format("hh:mm")),
      });
      setLoading(false);
      setRes(res);
    } else {
      notify("الرجاء اكمال البيانات","error")
      setIsPress(false);
    }
  }
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 201) {
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
        <h2  className='text-center'>أضف مقال جديد</h2>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col lg="6">
            <div className='mb-4'>
              {
                imagesBtn ?
                    (<button style={{cursor:"not-allowed"}} className='btn btn-secondary' disabled>تم رفع صوره المقال</button>)
                    :
                    (<button className='btn btn-primary' onClick={handelImageUpload} >رفع صوره المقال</button>)
              }
            </div>
            <Formik
              validationSchema={schema}
              onSubmit={catSubmit}
              initialValues={{
                  title:"",
                  summary:"",
                  content:"",
                  imageCaption:"",
                  catId:"",
                  subCatId:"",
                  important:"normal",
              }}
            >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className='d-flex flex-column mb-3' as={Col} controlId="validationFormikimageCaption">
                    <InputGroup hasValidation>
                        <FloatingLabel
                          controlId="floatingInputimageCaption"
                          label=" أدخل وصف الصوره"
                          className="mb-3"
                        >
                        <Form.Control
                          type="text"
                          placeholder="name@example.com"
                          name="imageCaption"
                          value={values.imageCaption}
                          onChange={handleChange}
                          isInvalid={!!errors.imageCaption}
                        />
                        </FloatingLabel>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className='d-flex flex-column mb-3' as={Col} controlId="validationFormiktitle">
                    <InputGroup hasValidation>
                        <FloatingLabel
                          controlId="floatingInputtitle"
                          label=" أدخل عنوان المقال"
                          className="mb-3"
                        >
                        <Form.Control
                          type="text"
                          placeholder="name@example.com"
                          name="title"
                          value={values.title}
                          onChange={handleChange}
                          isInvalid={!!errors.title}
                        />
                        </FloatingLabel>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className='d-flex flex-column mb-3' as={Col} controlId="validationFormiksummary">
                    <InputGroup hasValidation>
                        <FloatingLabel
                          controlId="floatingInputsummary"
                          label="أدخل ملخص المقال"
                          className="mb-3"
                        >
                        <Form.Control
                          as="textarea"
                          style={{ height: '100px' }}
                          placeholder="name@example.com"
                          name="summary"
                          value={values.summary}
                          onChange={handleChange}
                          isInvalid={!!errors.summary}
                        />
                        </FloatingLabel>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className='d-flex flex-column mb-3' as={Col} controlId="validationFormikcontent">
                    <InputGroup hasValidation>
                        <FloatingLabel
                          controlId="floatingInputcontent"
                          label="أدخل المقال"
                          className="mb-3"
                        >
                        <Form.Control
                          as="textarea"
                          style={{ height: '200px' }}
                          placeholder="name@example.com"
                          name="content"
                          value={values.content}
                          onChange={handleChange}
                          isInvalid={!!errors.content}
                        />
                        </FloatingLabel>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className='d-flex flex-column mb-3' as={Col} controlId="validationFormik2">
                      <InputGroup hasValidation>
                      <FloatingLabel controlId="floatingSelect" label="إختر تصنيف رئيسي">
                      <Form.Select isInvalid={!!errors.catId} required onChange={(e) => { handleChange(e); handelselect(e); }} value={values.catId} name="catId" aria-label="Floating label select example" >
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
                  <Form.Group className='d-flex flex-column mb-3' as={Col} controlId="validationFormiksubCat">
                      <InputGroup hasValidation>
                      <FloatingLabel controlId="floatingSelectsubcat" label="إختر تصنيف فرعي">
                      <Form.Select isInvalid={!!errors.subCatId} required onChange={handleChange } value={values.subCatId} name="subCatId" aria-label="Floating label select example">
                            <option value="0">....</option>
                            {
                              selectedCatSubCat.length>0?
                              selectedCatSubCat.map(resSubCat=>
                                (<option key={resSubCat.id} value={resSubCat.id}>{ resSubCat.title }</option>)
                              ):null
                            }
                          </Form.Select>
                        </FloatingLabel>
                      </InputGroup>
                  </Form.Group>
                  <Form.Group className='d-flex flex-column mb-3' as={Col} controlId="validationFormikimportant">
                      <InputGroup hasValidation>
                      <FloatingLabel controlId="floatingSelectimportant" label="إختر النوع (الافتراضي:عادي)">
                      <Form.Select onChange={handleChange } value={values.important} name="important" aria-label="Floating label select example">
                            <option value="normal">عادي</option>
                            <option value="excvlusev">خاص</option>
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

export default AddNews
