import React from 'react'
import { Accordion, Badge, Container, Navbar, Row } from 'react-bootstrap'
import logo from '../../assets/logo.png'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavBar.css'
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Divider from '@mui/material/Divider';
import DateObject from 'react-date-object';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {Link, NavLink } from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [date, setdate] = useState(new DateObject());

    return (
        <Container className='py-3'>
            <h5 className='text-center'>
                <Badge bg="secondary"><CalendarMonthIcon fontSize='medium'/>{date.format()}</Badge>
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
                                            <Accordion className='mb-2'>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>
                                                        شرق أوسط
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <NavLink to="/0/0" className='my-2'>
                                                            {({ isActive }) => (
                                                                isActive? 
                                                                (
                                                                    <div className='my-2'>
                                                                        <ArrowCircleLeftIcon/>
                                                                        اخر الاخبار
                                                                    </div>
                                                                ) :
                                                                (
                                                                    <div className='my-2'>
                                                                        اخر الاخبار
                                                                    </div>
                                                                )
                                                            )}
                                                        </NavLink>
                                                        <Divider/>
                                                        <NavLink to="/0/2" className='my-2'>
                                                            {({ isActive }) => (
                                                                isActive? 
                                                                (
                                                                    <div className='my-2'>
                                                                        <ArrowCircleLeftIcon/>
                                                                        من مصر
                                                                    </div>
                                                                ) :
                                                                (
                                                                    <div className='my-2'>
                                                                        من مصر
                                                                    </div>
                                                                )
                                                            )}
                                                        </NavLink>
                                                        <Divider/>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
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
