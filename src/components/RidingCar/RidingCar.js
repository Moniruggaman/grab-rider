import React from 'react';
import { useHistory } from 'react-router-dom';
import './RidingCar.css';


const RidingCar = (props) => {

    const { id, name, image } = props.car;

    const history = useHistory();
    const handleBook = (id) => {
        history.push(`/booking/${id}`);
        console.log(id)
    }

   
    return (
        <div className="grid" >
            <div className="car-img" onClick={() => handleBook(id)}>
                <img width="150px" height="auto" className="img-responsive" src={image} alt="" />
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default RidingCar;