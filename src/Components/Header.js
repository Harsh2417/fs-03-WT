function Header(){
    return ( 
    <div>
        <div style={{display:"flex",width:"100%",backgroundColor:"white",justifyContent:"space-between",height:"60px",alignItems:"center",fontSize:"25px"}}>
          <div style={{marginLeft:"20px"}}>
            <h2>Flex business pro</h2>
            <p style={{marginTop:"0px",fontSize:"20px"}}>Clean and mordan business theam</p>
            </div>  
            <div style={{display:"flex",width:"50%",justifyContent:"space-evenly",cursor:"pointer",color:"#000000" }}>
                <h4>Home</h4>
                <h4>About us</h4>
                <h4>Styleguide</h4>
                <h4>Blog</h4>
                <h4>contact us</h4>
                
                </div>
            </div>
        
        </div>
    )
    }
    export default Header