import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import avatar from '../../assets/download.png';

const CategoryPage = () => {
  var loop = ["اخر الاخبار", "عالم", "مصر", "الجزائر","رياضة","منوعات","السعودية","اخترنا لكم"];
  return (
    <Container>
      <Row className='home_collection'>
        {
          loop.map((i, index) =>
            (
              <Col key={index} lg="3">
                <Link to={`/0/${index}`}>
                  <h3 className='mb-4' style={{ borderRight: "10px solid #594b42", paddingRight: "10px" }}>
                    {i}
                    <ReplyAllIcon style={{marginRight:"15px"}}/>
                  </h3>
                </Link>
                <div className='mainpost mb-3'>
                  <img className='mainimg' src={avatar} />
                  <h6>
                    الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
                  </h6>
                </div>
                <Col>
                  <div className='watch_also d-flex'>
                    <img width="120" height="120" src={avatar} />
                    <div style={{paddingRight:"10px"}}>
                      <p className='mt-3'>
                        بعد ضربة أصفهان.. ماذا كشفت صور الأقمار الاصطناعية؟
                      </p>
                    </div>
                  </div>
                  <hr/>
                  <div className='watch_also d-flex'>
                    <img width="120" height="120" src={avatar} />
                    <div style={{paddingRight:"10px"}}>
                      <p className='mt-3'>
                        بعد ضربة أصفهان.. ماذا كشفت صور الأقمار الاصطناعية؟
                      </p>
                    </div>
                  </div>
                  <hr/>
                  <div className='watch_also d-flex'>
                    <img width="120" height="120" src={avatar} />
                    <div style={{paddingRight:"10px"}}>
                      <p className='mt-3'>
                        بعد ضربة أصفهان.. ماذا كشفت صور الأقمار الاصطناعية؟
                      </p>
                    </div>
                  </div>
                  <hr/>
                </Col>
              </Col>
            )
          )
        }
      </Row>
    </Container>
  )
}

export default CategoryPage