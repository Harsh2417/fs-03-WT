function Footer() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "250px",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              padding: "32px",
              width: "33%",
              marginLeft: "60px",
              color: "white",
            }}
          >
            <h2>About flex business pro</h2>
            <p style={{ marginTop: "16px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              voluptate, iste quia reiciendis provident quos dolorum quas repellat
              cum natus magni rerum quis perspiciatis, fugit expedita, enim illo
              sint nulla.
            </p>
          </div>
          <div
            style={{
              width: "30%",
              color: "white",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h2>Recent post</h2>
            <h5 style={{ marginTop: "16px" }}>Fly to London</h5>
            <p>September 18 2018</p>
            <h5 style={{ marginTop: "16px" }}>Stair communication</h5>
            <p>September 18 2018</p>
            <h5 style={{ marginTop: "16px" }}>Do you want to be a robote </h5>
            <p>September 18 2018</p>
          </div>
          <div
            style={{
              width: "33%",
              color: "white",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* <h2>Galary</h2>
            <div
              style={{
                height: "30px",
                width: "30px",
                display: "flex",
                gap: "5px",
              }}
            >
              <img src="https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80" />
              <img src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?b=1&s=170667a&w=0&k=20&c=XCzSqjgn02etddi527fy6Q9Dz_MtPYKKc-MMbhS3kK0=" />
  
              <img src="https://images.pexels.com/photos/3401402/pexels-photo-3401402.jpeg?auto=compress&cs=tinysrgb&w=400" />
  
              <img src="https://images.pexels.com/photos/6893804/pexels-photo-6893804.jpeg?auto=compress&cs=tinysrgb&w=400" />
            </div>
  
            <div
              style={{
                height: "30px",
                width: "30px",
                display: "flex",
                gap: "5px",
                marginTop: "5px",
              }}
            >
              <img src="https://images.pexels.com/photos/5588490/pexels-photo-5588490.jpeg?auto=compress&cs=tinysrgb&w=400" />
              <img src="https://images.pexels.com/photos/5615067/pexels-photo-5615067.jpeg?auto=compress&cs=tinysrgb&w=400" />
  
              <img src="https://images.pexels.com/photos/5855210/pexels-photo-5855210.jpeg?auto=compress&cs=tinysrgb&w=400" />
  
              <img src="https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&w=400" />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
  export default Footer;
  