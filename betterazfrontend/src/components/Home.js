import React, {useEffect, useState} from 'react'
import heading from '../image/heading.jpg'
import {Button, Alert, Container, Image, Row, Col, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './home.css'

const Home = () => {

    const [banner, setBanner] = useState([{Headline:''}]);
    const [news, setNews] = useState([{Headline: '', Textbody:'', Date: '', Source: '', ImageLink: '', VideoLink: ''}]);
    const [events, setEvents] = useState([{Headline: '', Description: '', Date: '', Time: '', Location: ''}]);
    const [locations, setLocations] = useState([{Location: '', Address: '', Hours: '', Days: '', Priority: '', County: '' }]);

    useEffect(()=>{
        const getBanner = async() => {
            let res = await fetch('https://floating-thicket-57272.herokuapp.com/banner');
            if (res.status !== 200) {
                setBanner([])
            } else {
                let data = await res.json();
                let bannerList = [];
                for (let item of data){
                    bannerList.push(item);
                }
                setBanner(bannerList)
            }
        }
    
        const getNews = async()=>{
            let res = await fetch('https://floating-thicket-57272.herokuapp.com/news');
            if (res.status !== 200) {
                setNews([])
            } else {
                let data = await res.json();
                let newsList = [];
                for (let item of data){
                    newsList.push(item);
                }
                setNews(newsList)
            }
        }
    
        const getEvents = async()=>{
            let res = await fetch('https://floating-thicket-57272.herokuapp.com/events');
            if (res.status !== 200) {
                setEvents([])
            } else {
                let data = await res.json();
                let eventsList = [];
                for (let item of data){
                    eventsList.push(item);
                }
                setEvents(eventsList)
            }
        }
    
        const getLocations = async()=>{
            let res = await fetch('https://floating-thicket-57272.herokuapp.com/locations');
            if (res.status !== 200) {
                setLocations([])
            } else {
                let data = await res.json();
                let locationsList = [];
                for (let item of data){
                    locationsList.push(item);
                }
                setLocations(locationsList)
            }
        }
        getBanner();
        getNews();
        getEvents();
        getLocations();
    },[])

    const today = new Date();
    const checkdate = new Date(today);
    checkdate.setDate(checkdate.getDate() - 2)
    
    return (
        <div className='container-fluid w-bg'>
            <Alert variant='light w-bg mt-5' >
                <Alert.Heading className='self-center lg-red-title'>{banner[0].Headline}</Alert.Heading>
            </Alert>
            <Card className= 'relative border-none'>
                <Image src={heading} className='wide-80 b-50 m-l-10vw'/>
                <Button href="#" variant="danger"className='absolute ab-right-up'>Donate</Button>
            </Card>
            
            <Row className='mb-5'>
                <Col xs lg = '4' className='pad-l-5vw-r-1vw dp flow-column'>
                    <div>
                        <h3 className = 'self-center s-title wg-bg'>WE CAN STOP THEM.</h3><br />
                        <p className='reg-content fs-1h'>Today’s Arizona legislature wants to limit your voting rights. <br />The Arizona legislature of a century ago gave us the tools to fight back.</p>
                        <p className='reg-content fs-1h'>Unlike other states whose legislatures are also passing bills to curtail voting rights, Arizona has a constitution that allows the voters themselves either to veto or uphold bills passed by the Legislature and signed by the Governor.</p>
                        <p className='reg-content fs-1h'>Arizona Deserves Better is organizing a referendum effort to repeal these laws. With your help, we can gather 118,000 signatures in 90 days. Arizonans have stopped unpopular laws before and we can do it again, but we can’t do it without you.</p>
                    </div>
                    <div className='dp-jc-space'>
                        <Button variant="danger" className='wide-45'>Voluteer</Button>
                        <Button variant="danger" className='wide-45'>Donate</Button>
                    </div>
                </Col>
                
                <Col xs lg = '8' className='pad-l-1vw-r-5vw'> 
                <h3 className = 'self-center s-title wg-bg'>WHAT'S HOT</h3>
                {news.sort((a, b) => (a.Date < b.Date) ? 1 : -1).slice(0,3).map((item)=>{
                    return(
                        item.ImageLink ? 
                        <Card className='border-none w-bg'>
                            <Row className='pad-l-5px'>
                                <Col xs lg = '4'>
                                    <Image src={item.ImageLink} className='w-20vw mt-4'/>
                                </Col>
                                <Col xs lg = '8'>
                                    <Card.Body>
                                        <Card.Title className='c-title'>{item.Headline}</Card.Title>
                                        <Card.Text className='light-content fs-1h'>{item.Date.split('T')[0]} - {item.Textbody.substring(0,200)}...<span className='link'>Read More</span></Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        : item.VideoLink ?
                        <Card className='border-none w-bg'>
                            <Row className='pad-l-5px'>
                                <Col xs lg = '4'>
                                    <div className="embed-responsive embed-responsive-16by9">
                                    <iframe title="Embeds Page" className="embed-responsive-item w-20vw mt-4" src={"https://www.youtube.com/embed/"+item.VideoLink.split('=')[1]}
                                        allowFullScreen></iframe>
                                    </div>
                                </Col>
                                <Col xs lg = '8'>
                                    <Card.Body>
                                        <Card.Title  className='c-title'>{item.Headline}</Card.Title>
                                        <Card.Text className='light-content fs-1h'>{item.Date.split('T')[0]} - {item.Textbody.substring(0,200)}...<span className='link'>Read More</span></Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        :
                        <Card className='border-none w-bg'>
                            <Card.Body>
                                <Card.Title  className='c-title'>{item.Headline}</Card.Title>
                                <Card.Text className='light-content fs-1h'>{item.Date.split('T')[0]} - {item.Textbody.substring(0,200)}...<span className='link'>Read More</span></Card.Text>
                            </Card.Body>
                        </Card>
                        
                    )
                })}
                <div className='link'>...MORE NEWS</div>
                </Col>
            </Row>

            <Row>
                <Col className='pad-l-5vw-r-1vw'>
                    <h3 className = 'self-center s-title wg-bg'>WHERE TO SIGN?</h3>
                    {locations.sort((a, b)=>(a.Priority < b.Priority) ? 1 : -1).slice(0,5).map((item)=>{
                        return(
                            <Card className='border-none w-bg'>
                                <Card.Title className='dp-jc-center c-title mt-4'>{item.Location}</Card.Title>
                                <Card.Text className='light-content fs-1h'>
                                    <p className='dp-jc-center mb-1'>HOURS: {item.Hours} | DAYS: {item.Days} | COUNTY: {item.County}</p>
                                    <p className='dp-jc-center mb-1'>ADDRESS: {item.Address}</p>
                                </Card.Text>
                            </Card>
                        )
                    })}
                    <div className='dp-jc-center link'>...MORE LOCATIONS</div>
                </Col>
                <Col className='pad-l-1vw-r-5vw dp flow-column'>
                    <div>
                        <h3 className = 'self-center s-title wg-bg'>EVENTS</h3>
                        {events.sort((a, b)=>(a.Date > b.Date) ? 1 : -1).filter(e=>new Date(e.Date) > checkdate).slice(0,4).map((item)=>{
                            return(
                                <Card className='border-none w-bg'>
                                    <Card.Title className='dp-jc-center c-title mt-3'>{item.Headline}</Card.Title>
                                    <Card.Text className='light-content fs-1h'>
                                        <p className='dp-jc-center mb-1'>{item.Description}</p>
                                        <p className='dp-jc-center mb-1'>DATE: {item.Date.split('T')[0]} | TIME: {item.Time} @ {item.Location}</p>
                                    </Card.Text>
                                </Card>
                            )
                        })}
                        <div className='dp-jc-center link'>...MORE EVENTS</div>
                    </div>
                    <div className='dp-jc-space mt-5'>
                        <Button variant="danger" className='wide-45'>Voluteer</Button>
                        <Button variant="danger" className='wide-45'>Donate</Button>
                    </div>
                    
                </Col>
            </Row>

        </div>
    )
    
}

export default Home