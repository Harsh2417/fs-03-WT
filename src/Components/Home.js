function Home() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            height: "320px",
            backgroundImage: "url(https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            color: "white",
            position:"cover",
          }}
        >
          <h1 style={{ display: "flex", justifyContent: "center" }}>
            Your awsome business theam
          </h1>
          <p style={{ margin: "0 120px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolores
            ad voluptates temporibus error dolorum, id earum. Cumque voluptatem
            quibusdam, debitis neque, quo unde ratione expedita, quam vero odio
            harum.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            {" "}
            <button
              style={{
                height: "40px",
                width: "150px",
                backgroundColor: "#1E31BE",
                color: "white",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
              }}
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default Home;
  