import {AiOutlineLaptop} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import {BsRecycle} from "react-icons/bs"



function Description(){
    return (  <div>
       <div style={{height:"300px",width:"100%",backgroundColor:"white",}}>
        <div style={{display:"flex",justifyContent:"center", }}>  
            <h2 style={{marginTop:"20px"}} >Our Features</h2>
           </div>
           <div style={{fontSize:"60px",display:"flex",justifyContent:"space-evenly",marginTop:"30px",color:"#1E31BE"}}>
              <AiOutlineLaptop/>
               <BsFillPersonFill/>
               <BsRecycle/>
               </div>
               <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"20px",marginLeft:"30px"}}>
                   <h2>Fully Responsive</h2>
                   <h2>Trusted Author</h2>
                   <h2>Reusable element</h2>
                   </div>
                   <div style={{display:"flex",justifyContent:"space-evenly",}}>
                      <p style={{marginLeft:"50px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, impedit?</p> 
                      <p style={{margin:"0 40px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, distinctio.
                       </p> 
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, corporis!</p> 
                       </div>
           </div>
       </div>
    )
   }
   export default Description