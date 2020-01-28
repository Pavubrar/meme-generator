import React from 'react';

 function Footer (){
     const firstName ="Parveen"
     const lastName= "Kaur"
     const date = new Date()
     const hours = date.getHours()

     let timeOfDay
     const styles = {
        color: "#FF8C00", 
        backgroundColor: "#FF2D00",
        fontSize: '50px'
     }
     if (hours < 12) {
         timeOfDay = 'morning'
         styles.color ="#74992e"
     } else  if (hours>= 12 && hours < 17){
         timeOfDay = 'afternoon'
         styles.color ="#00ff00"
     }else { 
         timeOfDay = 'night'
         styles.color ="rgb(214, 122, 127)"
        }

       
            
               // you can also creat avar for styling and use it as jsx in return
    return (
        <footer>
        {/* <h4>hello {firstName + " " + lastName}</h4> OR use backticks */}
        <h2 style ={styles}>hey</h2>
        <h1 style ={{color:'hsl(50, 33%, 25%)'}}>Hello {`${firstName} ${lastName}`} Good {timeOfDay}!</h1>  
        {/* above styles will be override with this color in h1 */}

            <h3 style = {{backgroundColor: 'pink'}}> this is my footer</h3>
        </footer>
    )
    }
    export default Footer; 