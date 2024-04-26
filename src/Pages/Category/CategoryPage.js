import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import SubCategoryNews from '../../Components/News/SubCategoryNews';
import { Fade } from 'react-awesome-reveal';

const CategoryPage = () => {
  const { id } = useParams();
  const [subCatData, setSubCatData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resSubCat = await axios.get(`https://my-json-server.typicode.com/secondemail/news/subCategory?catId=${id}`);
      if (resSubCat) {
        setSubCatData(resSubCat.data);
      }
    }
    getData();
  }, []);

  return (
    <Container>
      <Fade>
        <Row className='home_collection'>
          {
            subCatData.length>0 ?
              subCatData.map(data =>
                (<SubCategoryNews key={data.id} subcatdata={data} />)
              ):(<h3>لا يوجد بيانات</h3>)
          }
        </Row>
      </Fade>
    </Container>
  )
}

export default CategoryPage