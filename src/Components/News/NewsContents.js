import React, { useEffect, useState } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import avatar from '../../assets/download.png'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import './NewsContents.css'
import { useParams } from 'react-router';
import axios from 'axios';

const NewsContents = () => {
  const { id } = useParams();

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resNews = await axios.get(`https://my-json-server.typicode.com/secondemail/api/news?id=${id}`);
      if (resNews) {
        setNewsData(resNews.data);
      }
    }
    getData();
  }, []);

  return (
    <Container>
      {
        newsData.length > 0 ?
          (
            <div>
              <Row className="news_title">
                <h2 className='almarai-extrabold pb-2'>
                  {newsData[0].title}
                </h2>
                <h6>
                  <AccessTimeIcon className='mx-2' fontSize='small' />
                  {newsData[0].date} - {newsData[0].time} بتوقيت القاهرة
                </h6>
                <span className='almarai-extrabold pt-4'>
                  الآن نيوز - مصر
                </span>
              </Row>
              <Row className='pt-5'>
                <Col lg="9">
                  <div className='news_image mb-5'>
                    <img src={newsData[0].image} />
                    <h5 className='image_caption'>
                      {newsData[0].imageCaption}
                    </h5>
                  </div>
                  <div className='summary'>
                    <h5 className='almarai-extrabold'>
                      {newsData[0].summary}
                    </h5>
                  </div>
                  <div className='article_content'>
                    <h4>
                      {newsData[0].content}
                    </h4>
                  </div>
                  <div className='tags'>
                    {
                      newsData[0].tags.map((tag, index) =>
                        (
                          <span key={index} className='fs-4 mx-2'>
                            <Badge bg="secondary">{tag}</Badge>
                          </span>
                        )
                      )
                    }
                  </div>
                </Col>
              </Row>
            </div>
          ):null
      }
    </Container>
  )
}

export default NewsContents
