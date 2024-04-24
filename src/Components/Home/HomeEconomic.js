import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import avatar from '../../assets/download.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import axios from 'axios';


const HomeEconomic = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resNews = await axios.get(`http://localhost:3000/news?catName=أخبار الاقتصاد`);
      if (resNews) {
        setNewsData(resNews.data);
      }
    }
    getData();
  }, []);

  return (
    <Row className='economic pt-4 mb-5'>
        <h1 className='mb-4' style={{ borderRight: "10px solid #594b42", paddingRight: "10px",color:"white" }}>
          أخبار الاقتصاد
          <ReplyAllIcon fontSize='large' style={{marginRight:"15px"}}/>
        </h1>
        <Row>
          {
            newsData.length > 0 ?
            newsData.map((i, index) =>
              (
                <Col key={index} className='mb-3' lg="3">
                  <Link to={`/news/${i.id}`}>
                    <Card>
                      <Card.Img style={{height:"190px"}} variant="top" src={avatar} />
                      <img className='eco_img' src={logo}/>
                      <Card.Body>
                        <Card.Text> {i.catName} </Card.Text>
                        <Card.Title>
                          {i.title}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            ):(<h3 style={{color:"white"}}>لا يوجد مقالات</h3>)
          }
        </Row>
    </Row>
  )
}

export default HomeEconomic
