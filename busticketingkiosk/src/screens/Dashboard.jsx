import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import DashboardImage from '../assets/images/DashboardYellowBus.svg'
import '../styles/Dashboard.css';
import { useNavigate } from 'react-router-dom';

const DashboardScreen = ({setPageTitle}) => {
    const navigate = useNavigate();
    const [weatherData, setWeatherData] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());
    const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

    useEffect(() => {
        setPageTitle()
        // Update time every minute
        const interval = setInterval(() => setCurrentTime(new Date()), 60000);

        // Fetch weather data from OpenWeatherMap API for Calgary
        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=${API_KEY}&units=metric`);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeather();

        // Cleanup
        return () => clearInterval(interval);
    },[])
    const iconUrl = weatherData && weatherData.weather && weatherData.weather[0]? `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`: null;
    const temperature = weatherData && weatherData.main ? `${Math.round(weatherData.main.temp)}°C`  : "Loading...";
    const feelsLikeTemperature = weatherData && weatherData.main ? `${Math.round(weatherData.main.feels_like)}°C` : "Loading...";
    return (
        <Container className="dashboard-container mt-4">
            {/* Header */}
            <Row className="header-row">
                <Col>
                    <h1>Dashboard</h1>
                </Col>
            </Row>
            <img src={DashboardImage} alt='Yellow Bus'></img>
            {/* Transit and Weather */}
            <Row className="content-row">
                {/* Transit Details */}
                <Col md={8} className="transit-details">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Arrival Time</th>
                                <th>Route Name</th>
                                <th>Terminal Station Gate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>9:10 AM</td>
                                <td>ROUTE 1 - BOWNESS</td>
                                <td>A</td>
                            </tr>
                            <tr>
                                <td>9:20 AM</td>
                                <td>ROUTE 82 - NOLAN HILL</td>
                                <td>A</td>
                            </tr>
                            <tr>
                                <td>9:22 AM</td>
                                <td>ROUTE 8 - NORTH POINTE</td>
                                <td>B</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>

                {/* Weather and Date */}
                <Col md={4} className="weather-section">
                    <div className="weather-container">
                        <div className="weather-icon">
                            <img src={iconUrl} alt='Weather Icon' />
                        </div>
                        <div className="weather-temp">
                            <span>{temperature}</span>
                            <p>Feels Like: {feelsLikeTemperature}</p>
                        </div>
                    </div>
                    <div className="date-details">
                        <div>{currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                        <div>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
                    </div>
                </Col>
            </Row>
            <Row className="buttons-row">
                <Col>
                    <div className="buttons-group">
                        <Button className="button button-lightblue" block onClick={() => navigate('/tickets')}>Purchase Ticket</Button>
                        <Button className="button button-lightblue" block onClick={() => navigate('/routeInformation')}>Route Information</Button>
                    </div>
                </Col>
                <Col>
                    <div className="buttons-group-bottom">
                        <Button className="button button-light-orange" block onClick={() => navigate('/refund')}>Refund</Button>
                        <Button className="button button-lightcoral" block onClick={() => navigate('/')}>Cancel</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};


export default DashboardScreen