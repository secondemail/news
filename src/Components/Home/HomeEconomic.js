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
      let resNews = await axios.get(`https://my-json-server.typicode.com/secondemail/news/src/api/news?catId=1`);
      if (resNews) {
        setNewsData(resNews.data);
      }
    }
    getData();
  }, []);

  return (
    <Row className='economic pt-4 mb-5'>
        <h1 className='mb-4' style={{ borderRight: "10px solid #07284a", paddingRight: "10px",color:"white" }}>
          أخبار الاقتصاد
          <ReplyAllIcon fontSize='large' style={{marginRight:"15px"}}/>
        </h1>
        <Row>
          {
            newsData.length > 0 ?
            newsData.slice(-3).reverse().map((i, index) =>
              (
                <Col key={index} className='mb-3' lg="4">
                  <Link to={`/news/${i.id}`}>
                    <Card>
                      <Card.Img style={{height:"190px"}} variant="top" src={i.image} />
                      <img width={150} className='eco_img' src={logo}/>
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
