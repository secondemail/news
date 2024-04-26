import React, { useEffect, useState } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import avatar from '../../assets/download.png'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import './NewsContents.css'
import { useParams } from 'react-router';
import axios from 'axios';
import { Fade, Slide } from 'react-awesome-reveal';

const NewsContents = () => {
  const { id } = useParams();

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resNews = await axios.get(`https://my-json-server.typicode.com/secondemail/news/news?id=${id}`);
      if (resNews) {
        setNewsData(resNews.data);
      }
    }
    getData();
  }, []);

  return (
    <Container>
      <Slide>
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
                  {newsData[0].important === "excvlusev" ?
                    (
                      <h3>
                        <Badge>
                          خاص
                        </Badge>
                      </h3>
                    ):null
                  }
                  <span className='almarai-extrabold pt-4'>
                    سكاي لاين نيوز - مصر
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
                  </Col>
                </Row>
              </div>
            ):null
        }
      </Slide>
    </Container>
  )
}

export default NewsContents