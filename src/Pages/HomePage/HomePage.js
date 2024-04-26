import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import HomePosts from '../../Components/Home/HomePosts'
import HomeLatestNews from './../../Components/Home/HomeLatestNews';
import HomeEconomic from '../../Components/Home/HomeEconomic';
import HomeCollection from '../../Components/Home/HomeCollection';
import InfoGraphic from '../../Components/Home/InfoGraphic';
import HomePrivate from '../../Components/Home/HomePrivate';
import HomeGallerey from '../../Components/Home/HomeGallerey';
import { Bounce, Fade, Slide } from 'react-awesome-reveal';

const HomePage = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1200);
    }, [])
    
    
    return (
        <Container>
            {!loading ?
                (
                    <Fade>
                        <HomeLatestNews/>
                        <Bounce>
                            <HomeEconomic/>
                        </Bounce>
                        <HomeCollection />
                        <Slide>
                            <InfoGraphic/>
                        </Slide>
                            <HomePrivate/>
                        <HomeGallerey/>
                    </Fade>
                ) : (
                    <div className='text-center'>
                        <Spinner style={{padding:"70px",fontSize:"20px"}} animation="border" variant="primary" size='large' />
                    </div>
                )
            }
        </Container>
    )
}

export default HomePage
