import React from 'react'
import { Container } from 'react-bootstrap'
import HomePosts from '../../Components/Home/HomePosts'
import HomeLatestNews from './../../Components/Home/HomeLatestNews';
import HomeEconomic from '../../Components/Home/HomeEconomic';
import HomeCollection from '../../Components/Home/HomeCollection';
import InfoGraphic from '../../Components/Home/InfoGraphic';
import HomePrivate from '../../Components/Home/HomePrivate';
import HomeGallerey from '../../Components/Home/HomeGallerey';

const HomePage=()=> {
    return (
        <Container>
{/*             <HomePosts /> */}
            <HomeLatestNews/>
            <HomeEconomic/>
            <HomeCollection />
            <InfoGraphic/>
            <HomePrivate/>
            <HomeGallerey/>
        </Container>
    )
}

export default HomePage
