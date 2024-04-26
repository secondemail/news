import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import avatar from '../../assets/download.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePrivate = () => {
  var loop = [1, 2, 3, 4, 5, 6];

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resNews = await axios.get(`https://my-json-server.typicode.com/secondemail/news/news?important=excvlusev`);
      if (resNews) {
        setNewsData(resNews.data);
      }
    }
    getData();
  }, []);

  return (
    <Row className='latest_news'>
      <Col lg="9">
        <h3 className='mb-4' style={{ borderRight: "10px solid #07284a", paddingRight: "10px" }}>
          خاص
          <ReplyAllIcon style={{marginRight:"15px"}}/>
        </h3>
        <Row>
          {
            newsData.length>0?
            newsData.slice(-6).reverse().map((i, index) =>
              (
                <Col key={index} className='mb-3' lg="4">
                  <Link to={`/news/${i.id}`}>
                    <Card>
                      <Card.Img style={{height:"200px"}} variant="top" src={i.image} />
                      <Card.Body>
                        <Card.Text> خاص </Card.Text>
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
        <h4 className='mb-4' style={{ borderRight: "10px solid #07284a", paddingRight: "10px" }}>
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
          ):(<h3>لا يوجد مقالات</h3>)
        }
      </Col>
    </Row>
  )
}

export default HomePrivate
