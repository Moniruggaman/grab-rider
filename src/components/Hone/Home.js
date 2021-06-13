import React, { useEffect, useState } from 'react';
import CarData from '../../data/data.json';
import RidingCar from '../RidingCar/RidingCar';
import './Home.css';


const Home = () => {
    
    const [cars, setCars] = useState([]);
    useEffect(() => setCars(CarData) , []);

    return (
        <div className="grid-layout" >
            {
                cars.map(car =><RidingCar key={car.id} car={car}></RidingCar>)
            }
        </div>
    );
};

export default Home;