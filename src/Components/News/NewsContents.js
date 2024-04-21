import React from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import avatar from '../../assets/download.png'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import './NewsContents.css'

const NewsContents = () => {
  return (
    <Container>
      <Row className="news_title">
        <h2 className='almarai-extrabold pb-2'>
          مصر تعتزم خفض أسعار الخبز غير المدعم بما يصل إلى 40%
        </h2>
        <h6>
          <AccessTimeIcon className='mx-2' fontSize='small' />
          19 أبريل 2024 - 10:30 بتوقيت القاهرة
        </h6>
        <span className='almarai-extrabold pt-4'>
          المحلة نيوز - مصر
        </span>
      </Row>
      <Row className='pt-5'>
        <Col lg="9">
          <div className='news_image mb-5'>
            <img src={avatar} />
            <h5 className='image_caption'>
              رئيس الوزراء المصري مصطفى مدبولي
            </h5>
          </div>
          <div className='summary'>
            <h5 className='almarai-extrabold'>
              قال رئيس الوزراء المصري مصطفى مدبولي وممثلون عن القطاع الخاص الخميس إن الحكومة اتفقت مع القطاع الخاص في البلاد على خفض أسعار ما يعرف بالخبز السياحي اعتبارا من يوم الأحد.
            </h5>
          </div>
          <div className='article_content'>
            <h4>
              وتواجه مصر أزمة اقتصادية ممتدة خفت حدتها في الأسابيع الأخيرة بعد إتمام صفقة استثمارية غير مسبوقة مع صندوق سيادي إماراتي والاتفاق على قرض موسع من صندوق النقد الدولي.
              وحدد التسعير الثابت الجديد سعر رغيف الخبز السياحي وزن 25 و40 و80 جراما عند 50 قرشا (0.0104 دولار) و75 و150 قرشا على الترتيب.
              كما تحدد سعر الخبز الأفرنجي (الفينو) وزن 35 و70 جراما عند 100 و150 قرشا على الترتيب.
              وينتج القطاع الخاص في مصر الخبز السياحي، وهو غير مدعم.
              وأعلن الأسعار الجديدة ممثلون عن اتحاد الصناعات المصرية والاتحاد العام للغرف التجارية.
              ويتراوح معدل التخفيضات بين 25 بالمئة إلى 40 بالمئة.
              وبلغ التضخم في مصر مستويات مرتفعة في العامين الماضيين نتيجة نقص حاد في العملة الأجنبية وما تبعه من خفض في قيمة الجنيه.
              وارتفعت أسعار الخبز السياحي خاصة بعد الحرب الروسية ضد أوكرانيا، والذي تسبب في تعطيل صادرات القمح عبر البحر الأسود.
            </h4>
          </div>
          <div className='tags'>
            <span className='fs-4 mx-2'>
              <Badge bg="secondary">مصر</Badge>
            </span>
            <span className='fs-4 mx-2'>
              <Badge bg="secondary">اقتصاد مصر</Badge>
            </span>
            <span className='fs-4 mx-2'>
              <Badge bg="secondary">أسعار الخبز</Badge>
            </span>
            <span className='fs-4 mx-2'>
              <Badge bg="secondary">أسعار الخبز السياحي</Badge>
            </span>
          </div>
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
        </Col>
      </Row>
    </Container>
  )
}

export default NewsContents