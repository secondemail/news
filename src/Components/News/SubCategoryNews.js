import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import  ReplyAllIcon  from '@mui/icons-material/ReplyAll';
import { Link, useParams } from 'react-router-dom';
import avatar from '../../assets/download.png';
import axios from 'axios';

const SubCategoryNews = ({ subcatdata }) => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resNews = await axios.get(`https://my-json-server.typicode.com/secondemail/api/news?subCatId=${subcatdata.id}`);
      if (resNews) {
        setNewsData(resNews.data);
      }
    }
    getData();
  }, []);

  return (
    <Col lg="3">
      <Link to={`/category/${id}/subcategory/${subcatdata.id}`}>
        <h3 className='mb-4' style={{ borderRight: "10px solid #594b42", paddingRight: "10px" }}>
          {subcatdata.title}
          <ReplyAllIcon style={{marginRight:"15px"}}/>
        </h3>
      </Link>
      {
        newsData.length > 0 ?
          newsData.slice(-3).reverse().map(subNews =>
            (
              <Link key={subNews.id} to={`/news/${subNews.id}`}>
                <Col>
                  <div className='watch_also d-flex'>
                    <img width="120" height="120" src={subNews.image} />
                    <div style={{paddingRight:"10px"}}>
                      <p className='mt-3'>
                        {subNews.title}
                      </p>
                    </div>
                  </div>
                  <hr/>
                </Col>
              </Link>
            )
          ):(<h3>لا يوجد مقالات</h3>)
      }
    </Col>
  )
}

export default SubCategoryNews
