import React from 'react';
import { useHistory, useParams } from 'react-router';
import CarData from '../../data/data.json';
import { Button, Card } from 'react-bootstrap';
import "./Booking.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTag } from '@fortawesome/free-solid-svg-icons';
import MapContainer from '../MapContainer/MapContainer';

const Booking = () => {

  const { id } = useParams();
  const history = useHistory();

  // Dynamic data fetch from home.
  const carName = CarData.find(car => car.id == id)
  const { name, fare, seat, image } = carName;
  console.log(carName);

  return (

    <div className="booking-container">
        <Card className="form-container" style={{ width: '18rem', height: '25rem', marginRight: "50px"}}>

          <Card.Body >
            <div style={{ display: 'flex', marginBottom: '20px', backgroundColor: 'lightGray', padding: "20px", borderRadius: '7px' }}>
              <Card.Img variant="top" style={{ height: "50 px", width: "50px", paddingRight: "10px" }} src={image} />
              <p style={{ paddingRight: "15px" }}>{name}</p>
              <p style={{ paddingRight: "25px" }}><FontAwesomeIcon icon={faUserTag} />{seat}</p>
              <p>{fare}</p>
            </div>

            <div style={{ display: 'flex', marginBottom: '20px', padding: "20px",  backgroundColor: 'lightGray', borderRadius: '7px' }}>
              <Card.Img variant="top" style={{ height: "50 px", width: "50px", paddingRight: "10px" }} src={image} />
              <p style={{ paddingRight: "15px" }}>{name}</p>
              <p style={{ paddingRight: "25px" }}><FontAwesomeIcon icon={faUserTag} />{seat}</p>
              <p>{fare}</p>
            </div>

            <div style={{ display: 'flex', marginBottom: '20px', padding: "20px",  backgroundColor: 'lightGray', borderRadius: '7px'}}>
              <Card.Img variant="top" style={{ height: "50px", width: "50px", paddingRight: "10px" }} src={image} />
              <p style={{ paddingRight: "15px" }}>{name}</p>
              <p style={{ paddingRight: "25px" }}><FontAwesomeIcon icon={faUserTag} />{seat}</p>
              <p>{fare}</p>
            </div>
          </Card.Body>
          <Button variant="primary" onClick={() => history.push('/destination')}>Go somewhere</Button>
        </Card>
        <div>
          <MapContainer></MapContainer>
        </div>
    </div>
  );
};

export default Booking;