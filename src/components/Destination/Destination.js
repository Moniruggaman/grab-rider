import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import './Destination.css';
import DateTimePickers from '../DateTimePickers/DateTimePickers'
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from 'react-bootstrap';
import { Input } from "reactstrap";
import MapContainer from "../MapContainer/MapContainer";
import { faMapMarkerAlt, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Destination() {

    const [pick, setPick] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { From, To } = data;
        const pickInfo = { pickFrom: From, pickTo: To };
        setPick(pickInfo);
    }


    return (
        <div className="destination-container">

            <div className="w-100, border, form-container" style={{ maxWidth: "250px", maxHeight: "auto", marginRight: "50px"}}>
                <div>
                    <p> <FontAwesomeIcon icon={faMapMarkerAlt} /> {pick.pickFrom}</p>
                    <br />
                    <p><FontAwesomeIcon icon={faMapPin}/> {pick.pickTo}</p>
                </div>
                <DateTimePickers></DateTimePickers>
                <br />
                <Form onSubmit={handleSubmit(onSubmit)} className="search-form" >
                    Pick From
                    <Input defaultValue="" {...register("From")} />
                    <br />
                    Pick To
                    <Input defaultValue="" {...register("To", { required: true })} />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <Input type="submit" />
                </Form>
            </div>
            <div>
                <MapContainer></MapContainer>
            </div>
        </div>

    );
}

