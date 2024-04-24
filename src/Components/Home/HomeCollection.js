import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import axios from 'axios';
import HomeCategoryNews from '../News/HomeCategoryNews';

function HomeCollection() {
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resCat = await axios.get("http://localhost:3000/category");
      if (resCat) {
        setCatData(resCat.data);
      }
    }
    getData();
  }, []);

  return (
    <Row className='home_collection'>
      {
        catData.length>0 ?
          catData.map(data =>
            (<HomeCategoryNews key={data.id} catdata={data} />)
          ):null
      }
    </Row>
  )
}

export default HomeCollection