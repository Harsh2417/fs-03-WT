import { BsFillTaxiFrontFill } from "react-icons/bs";
import { AiFillTrophy } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

function Social() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "250px",
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            fontSize: "60px",
            display: "flex",
            justifyContent: "space-evenly",
            padding: "50px",
            color: "white",
          }}
        >
          <AiFillTrophy />
          <BsFillBagCheckFill />
          <BsFillTaxiFrontFill />
          <AiOutlineTwitter />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "-28px",
            marginLeft: "30px",
            color: "white",
          }}
        >
          <h1>22</h1>
          <h1>145</h1>
          <h1>49</h1>
          <h1>2456</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "0 20px",
            color: "white",
          }}
        >
          <h4 style={{ marginLeft: "12px",fontSize:"25px" }}>Award winning</h4>
          <h4 style={{ marginLeft: "12px",fontSize:"25px" }}>Finished project</h4>
          <h4 style={{ marginLeft: "12px",fontSize:"25px" }}>Product sold</h4>
          <h4 style={{ marginLeft: "12px",fontSize:"25px" }}>Twitter fans</h4>
        </div>
      </div>
    </div>
  );
}
export default Social;