import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import avatar from '../../assets/download.png';
import { Link } from 'react-router-dom';

function HomeCollection() {
  var loop = ["شرق أوسط", "عالم", "رياضة", "علوم وتكنولوجيا","بيئة ومناخ","منوعات","الولايات المتحدة","اخترنا لكم"];
  return (
    <Row className='home_collection'>
      {
        loop.map((i, index) =>
          (
            <Col key={index} lg="3">
              <Link to={`/${index}`}>
                <h3 className='mb-4' style={{ borderRight: "10px solid #594b42", paddingRight: "10px" }}>
                  {i}
                  <ReplyAllIcon style={{marginRight:"15px"}}/>
                </h3>
              </Link>
              <Link to={`/news/${index}`}>
                <div className='mainpost mb-3'>
                  <img className='mainimg' src={avatar} />
                  <h6>
                    الأهلي المصري يعود بـ"تعادل ثمين" من أرض مازيمبي
                  </h6>
                </div>
              </Link>
              <Col>
                <Link to={`/news/1`}>
                  <div className='watch_also d-flex'>
                    <img width="120" height="120" src={avatar} />
                    <div style={{paddingRight:"10px"}}>
                      <p className='mt-3'>
                        بعد ضربة أصفهان.. ماذا كشفت صور الأقمار الاصطناعية؟
                      </p>
                    </div>
                  </div>
                </Link>
                <hr/>
                <Link to={`/news/2`}>
                  <div className='watch_also d-flex'>
                    <img width="120" height="120" src={avatar} />
                    <div style={{paddingRight:"10px"}}>
                      <p className='mt-3'>
                        بعد ضربة أصفهان.. ماذا كشفت صور الأقمار الاصطناعية؟
                      </p>
                    </div>
                  </div>
                </Link>
                <hr/>
                <Link to={`/news/3`}>
                  <div className='watch_also d-flex'>
                    <img width="120" height="120" src={avatar} />
                    <div style={{paddingRight:"10px"}}>
                      <p className='mt-3'>
                        بعد ضربة أصفهان.. ماذا كشفت صور الأقمار الاصطناعية؟
                      </p>
                    </div>
                  </div>
                </Link>
                <hr/>
              </Col>
            </Col>
          )
        )
      }
    </Row>
  )
}

export default HomeCollection