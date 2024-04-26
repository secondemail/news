
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import avatar from '../../assets/download.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
const HomeCategoryNews = ({ catdata }) => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resNews = await axios.get(`https://my-json-server.typicode.com/secondemail/news/news?catId=${catdata.id}`);
      if (resNews) {
        setNewsData(resNews.data);
      }
    }
    getData();
  }, []);

  return (
      <Col lg="3">
        {
          newsData.length > 0?
          (
            <Link to={`/category/${catdata.id}`}>
              <h3 className='mb-4' style={{ borderRight: "10px solid #07284a", paddingRight: "10px" }}>
                {catdata.title}
                <ReplyAllIcon style={{marginRight:"15px"}}/>
              </h3>
            </Link>
          ):null
        }
        {
          newsData.length > 0 ? 
            newsData.slice(-3).reverse().map(newsD=>
              <Col key={newsD.id}>
                <Link to={`/news/${newsD.id}`}>
                  <div className='watch_also d-flex'>
                    <img width="120" height="120" src={newsD.image} />
                    <div style={{paddingRight:"10px"}}>
                      <p className='mt-3'>
                        {newsD.title}
                      </p>
                    </div>
                  </div>
                </Link>
                <hr/>
              </Col>
            ):null
        }
      </Col>
  )
}

export default HomeCategoryNews
