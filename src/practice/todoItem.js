import React from 'react';
import ContactCard from './contactCard';
//import ContactCard from './contactCard';
import schoolData from './schoolData';

 function  TodoItem(){
     const dataItems = schoolData.map(item => <ContactCard key = {item.id} item={item}/> )
     return(
         <div className ='todo'>
             <label>What do you want to eat</label>
      <input type ='checkbox'/>
      <p>samosa</p>
      <input type ='checkbox'/>
      <p>Paneer Pakora</p>
      <input type ='checkbox'/>
      <p>Jalebi</p>
      <input type ='checkbox'/>
      <p>Pasta</p>
      <img src = "https://www.instagram.com/p/B7k90fpDKtV/?utm_source=ig_web_copy_link" alt =""/>
      
      <div>
      {/* <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: ""}}
            />
      <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
            
            <ContactCard 
                contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
            />
            
            <ContactCard
                contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
            />
            
            <ContactCard 
                contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
            /> */}
            <label style ={{textDecoration: "underline"}}>To do list</label>
            {dataItems}
            
      </div>
         </div>
     )
 }
 export default TodoItem;