import React from 'react';

function ContactCard(props) {
    return (
        <div>
            {/* <img src = {props.contact.imgUrl} alt =""/>
            <h3>{props.contact.name}</h3>
            <p style = {{color:!props.contact.email && "red"}}>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
            putt conditional rendering within style ((this code is for contact cards))  and next is for School products*/}
            <input type="checkbox"  checked= {props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}
export default ContactCard;