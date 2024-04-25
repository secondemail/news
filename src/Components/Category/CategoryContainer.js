import React, { useEffect, useState } from 'react'
import { Col, Container, Row,Card } from 'react-bootstrap'
import avatar from '../../assets/download.png'
import './CategoryContainer.css';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const CategoryContainer = () => {
  const { id } = useParams();
  const [subCatData, setSubCatData] = useState([]);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resSubCat = await axios.get(`https://my-json-server.typicode.com/secondemail/api/subCategory?id=${id}`);
      if (resSubCat) {
        setSubCatData(resSubCat.data);
      }
      let resNews = await axios.get(`https://my-json-server.typicode.com/secondemail/api/news?subCatId=${id}`);
      if (resNews) {
        setNewsData(resNews.data);
      }
    }
    getData();
  }, [id]);
  return (
    <Container>
      <Row className='slide_title pb-5'>
        <Col lg="7">
          <img src={subCatData.length>0 ? subCatData[0].image : avatar}/>
        </Col>
        <Col className='pt-5' lg="5">
          <h1 className='almarai-extrabold'>
            {subCatData.length>0 ? subCatData[0].title : null}
          </h1>
          <h6 className='mt-4'>
            {subCatData.length>0 ?subCatData[0].caption:null}
          </h6>
        </Col>
      </Row>
      <Row className='latest_news pb-5'>
        <Col lg="9">
          <h3 className='mb-4' style={{ borderRight: "10px solid #594b42", paddingRight: "10px" }}>
            آخر الأخبار
            <ReplyAllIcon style={{marginRight:"15px"}}/>
          </h3>
          <Row>
            {
              newsData.length>0?
              newsData.slice(0,6).map((i, index) =>
                (
                  <Col key={i.id} className='mb-3' lg="4">
                    <Link to={`/news/${i.id}`}>
                      <Card>
                        <Card.Img style={{height:"200px"}} variant="top" src={i.image} />
                        <Card.Body>
                          <Card.Text> {i.catName} </Card.Text>
                          <Card.Title>
                            {i.title}
                          </Card.Title>
                          <span style={{fontSize:"12px"}} className='text-muted'>
                            <AccessTimeIcon style={{marginLeft:"7px"}} fontSize='small' />
                            {i.date}
                          </span>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                )
              ):(<h3>لا يوجد مقالات</h3>)
            }
          </Row>
        </Col>
      <Col lg="3">
        <h4 className='mb-4' style={{ borderRight: "10px solid #594b42", paddingRight: "10px" }}>
          تصفح أيضا
          <ReplyAllIcon style={{marginRight:"15px"}}/>
        </h4>
        {
          newsData.length > 0 ?
          newsData.slice(0,3).reverse().map((i, index) =>
          (
            <Link to={`/news/${i.id}`}>
              <div className='watch_also d-flex'>
                <img width="120" height="120" src={i.image} />
                <div style={{paddingRight:"10px"}}>
                  <span>
                    {i.catName}
                  </span>
                  <p className='mt-3'>
                    {i.title}
                  </p>
                </div>
              </div>
              <hr/>
            </Link>
          )
          ):null
        }
      </Col>
      </Row>
      <Row className='latest_news'>

          <h3 className='mb-4' style={{ borderRight: "10px solid #594b42", paddingRight: "10px" }}>
            المزيد من الأخبار
            <ReplyAllIcon style={{marginRight:"15px"}}/>
          </h3>
          <Row>
            {
              newsData.length>0?
              newsData.reverse().map((i, index) =>
                (
                  <Col key={index} className='mb-3' lg="3">
                    <Link to={`/news/${i.id}`}>
                      <Card>
                        <Card.Img style={{height:"200px"}} variant="top" src={i.image} />
                        <Card.Body>
                          <Card.Text> {i.catName} </Card.Text>
                          <Card.Title>
                            {i.title}
                          </Card.Title>
                          <span style={{fontSize:"12px"}} className='text-muted'>
                            <AccessTimeIcon style={{marginLeft:"7px"}} fontSize='small' />
                            {i.date}
                          </span>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                )
              ):(<h3>لا يوجد مقالات</h3>)
            }
          </Row>
      </Row>
    </Container>
  )
}

export default CategoryContainer
