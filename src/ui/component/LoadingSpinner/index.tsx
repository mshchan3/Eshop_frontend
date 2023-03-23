import React from "react";
import {Spinner} from "react-bootstrap";
import './style.css'

export default function LoadingSpinner() {
    return <div className={"loading-page-box"}>
        <div className={"spinner-box"}>
            <Spinner animation={"grow"} variant={"success"}>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
            <Spinner animation={"grow"} variant={"success"}>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
            <Spinner animation={"grow"} variant={"success"}>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        </div>
    </div>
}