import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import { Search } from '@mui/icons-material';
const AdminDashBoard = () => {
  const [userNews, setUserNews] = useState([])
  useEffect(() => {
    if (localStorage.getItem("skylineLoginUser") === null) {
      window.location.href = "/";
    } else {
      const getNews = async () => {
        let id = JSON.parse(localStorage.getItem("skylineLoginUser")).id
        let resNews = await axios.get(`https://my-json-server.typicode.com/secondemail/news/news?userId=${id}`);
        setUserNews(resNews.data)
      }
      getNews();
    }
  }, [])  


  return (
    <Container>
      <Row className='mb-4' >
        {
          localStorage.getItem("skylineLoginUser") !== null ?
            (<h1> أهلا,{ JSON.parse(localStorage.getItem("skylineLoginUser")).userName } </h1>):null
        }
        <h3>
          لديك ({userNews.length >0 ?userNews.length : 0}) مقال
        </h3>
      </Row>
      <Row>
        <Table variant="dark" striped bordered hover>
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>عنوان المقال</th>
              <th>التاريخ</th>
              <th>تعديل/حذف</th>
            </tr>
          </thead>
          {
            userNews.length > 0 ?
              userNews.map((d, index) =>
                (
                  <tbody key={d.id}>
                    <tr>
                      <td>{ index + 1 }</td>
                        <td>
                          <Link className='d-block' to={`/news/${d.id}`}>
                              {d.title}
                          </Link>
                        </td>
                      <td>{d.date}</td>
                      <td className='text-center'>
                        <span>
                          <EditIcon/>
                        </span>
                        {" | "}
                        <span className=''>
                          <DeleteForeverIcon/>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                )
              ):null
          }
        </Table>
      </Row>
    </Container>
  )
}

export default AdminDashBoard
