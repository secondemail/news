import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import avatar from '../../assets/download.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';

const HomeLatestNews = () => {
  var loop = [1, 2, 3, 4, 5, 6];
  return (
    <Row className='latest_news'>
      <Col lg="9">
        <h3 className='mb-4' style={{ borderRight: "10px solid #594b42", paddingRight: "10px" }}>
          آخر الأخبار
          <ReplyAllIcon style={{marginRight:"15px"}}/>
        </h3>
        <Row>
          {
            loop.map((i, index) =>
              (
                <Col key={index} className='mb-3' lg="4">
                  <Link to={`/news/${index}`}>
                    <Card>
                      <Card.Img style={{height:"200px"}} variant="top" src={avatar} />
                      <Card.Body>
                        <Card.Text> رياضة </Card.Text>
                        <Card.Title>
                          الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
                        </Card.Title>
                        <span style={{fontSize:"12px"}} className='text-muted'>
                          <AccessTimeIcon style={{marginLeft:"7px"}} fontSize='small' />
                          قبل 3 ساعات
                        </span>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            )
          }
        </Row>
      </Col>
      <Col lg="3">
        <h4 className='mb-4' style={{ borderRight: "10px solid #594b42", paddingRight: "10px" }}>
          تصفح أيضا
          <ReplyAllIcon style={{marginRight:"15px"}}/>
        </h4>
        <div className='watch_also d-flex'>
          <img width="120" height="120" src={avatar} />
          <div style={{paddingRight:"10px"}}>
            <span>
              شرق اوسط
            </span>
            <p className='mt-3'>
              بعد ضربة أصفهان.. ماذا كشفت صور الأقمار الاصطناعية؟
            </p>
          </div>
        </div>
        <hr/>
        <div className='watch_also d-flex'>
          <img width="120" height="120" src={avatar} />
          <div style={{paddingRight:"10px"}}>
            <span>
              شرق اوسط
            </span>
            <p className='mt-3'>
              بعد ضربة أصفهان.. ماذا كشفت صور الأقمار الاصطناعية؟
            </p>
          </div>
        </div>
        <hr/>
        <div className='watch_also d-flex'>
          <img width="120" height="120" src={avatar} />
          <div style={{paddingRight:"10px"}}>
            <span>
              شرق اوسط
            </span>
            <p className='mt-3'>
              بعد ضربة أصفهان.. ماذا كشفت صور الأقمار الاصطناعية؟
            </p>
          </div>
        </div>
        <hr/>
      </Col>
    </Row>
  )
}

export default HomeLatestNews
