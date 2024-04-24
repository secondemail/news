import React, { useEffect,useState } from 'react'
import { Accordion, Badge, Container, Navbar, Row } from 'react-bootstrap'
import logo from '../../assets/logo.png'
import Button from '@mui/material/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavBar.css'
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Divider from '@mui/material/Divider';
import DateObject from 'react-date-object';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {Link, NavLink } from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import axios from 'axios';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [date, setdate] = useState(new DateObject());
    const [catData, setCatData] = useState([]);
    const [subCatData, setSubCatData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let resCat = await axios.get("kareem28elmohammady.eb2a.com/api/data.json/category");
            let resSubCat = await axios.get("kareem28elmohammady.eb2a.com/api/data.json/subCategory");
            if (resCat) {
                setCatData(resCat.data);
            }
            if (resSubCat) {
                setSubCatData(resSubCat.data);
            }
        }
        getData();
    }, [])

    return (
        <Container className='py-3'>
            <h5 className='text-center'>
                <Badge bg="secondary"><CalendarMonthIcon fontSize='medium'/>{date.format("YYYY/MM/DD")}</Badge>
            </h5>
            <Navbar style={{height:"120px"}} className="bg-body-tertiary">
                    <Link style={{marginRight:"0px"}} to="/">
                        <img 
                            src={logo}
                            width="160"
                            alt=""
                        />
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button className='open_Nav' variant="outlined" onClick={handleShow} >
                            <ClearAllIcon fontSize='large' />
                        </Button>
                        <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
                            <Offcanvas.Header closeButton>
                                <Link style={{marginRight:"0px"}} to="/">
                                    <img 
                                        src={logo}
                                        width="150"
                                        alt=""
                                    />
                                </Link>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            التصنيفات
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {
                                                catData ? 
                                                    catData.map((cat, index) =>
                                                        (
                                                            <Accordion key={cat.id} className='mb-2'>
                                                                <Accordion.Item eventKey={index}>
                                                                    <Accordion.Header>
                                                                        {cat.title}
                                                                    </Accordion.Header>
                                                                    <Accordion.Body>
                                                                        {
                                                                            subCatData&& catData?
                                                                            subCatData.filter(data => data.catId === cat.id).length > 0 ?
                                                                            subCatData.filter(data => data.catId === cat.id).map((subCat, index2) =>                                                                                 (
                                                                                    <div key={index2}>
                                                                                        <NavLink to={`/category/${cat.id}/subcategory/${subCat.id}`} className='my-2'>
                                                                                            {({ isActive }) => (
                                                                                                isActive? 
                                                                                                (
                                                                                                    <div className='my-2'>
                                                                                                        <ArrowCircleLeftIcon/>
                                                                                                        {subCat.title}
                                                                                                    </div>
                                                                                                ) :
                                                                                                (
                                                                                                    <div className='my-2'>
                                                                                                        {subCat.title}
                                                                                                    </div>
                                                                                                )
                                                                                            )}
                                                                                        </NavLink>
                                                                                        <Divider/>
                                                                                    </div>
                                                                                ))
                                                                                :(<h4>لا يوجد بيانات</h4>)
                                                                            :null
                                                                        }
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                        )
                                                    )
                                                    :
                                                    (<h3>لا يوجد بيانات</h3>)
                                            }
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Navbar.Text>
                    </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default NavBar
