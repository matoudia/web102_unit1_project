import React from "react";

const Event = (props) => {

    // Step 1: Function to handle button click and replace content
    const handleButtonClick = () => {
        // Use document.getElementById to get the div and change its content
        const div = document.getElementById(props.eventName);
        if (div) {
            div.innerHTML = props.description + '<br /><br /><br /><button onClick={backButtonClick} > Back ... </button>';

        }
    };

    const backButtonClick = () => {
        // Use document.getElementById to get the div and change its content
        const div = document.getElementById(props.eventName);
        if (div) {
            div.innerHTML = '';  //To be finished

        }
    };



    return (

        <div id={props.eventName} className={'Event'} >

            <h6><img class='event-img' src={props.image} alt={props.description} /></h6>
            <br></br>
            <h3>{props.eventName}</h3>
            <br></br>
            <button onClick={handleButtonClick} >Learn more</button>

        </div>
    
    )
  
}



export default Event;

