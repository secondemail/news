import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import avatar from '../../assets/download.png';
import axios from 'axios';
import SubCategoryNews from '../../Components/News/SubCategoryNews';

const CategoryPage = () => {
  const { id } = useParams();
  const [subCatData, setSubCatData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resSubCat = await axios.get(`http://localhost:3000/subCategory?catId=${id}`);
      if (resSubCat) {
        setSubCatData(resSubCat.data);
      }
    }
    getData();
  }, []);

  return (
    <Container>
      <Row className='home_collection'>
        {
          subCatData.length>0 ?
            subCatData.map(data =>
              (<SubCategoryNews key={data.id} subcatdata={data} />)
            ):(<h3>لا يوجد بيانات</h3>)
        }
      </Row>
    </Container>
  )
}

export default CategoryPage