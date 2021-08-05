import "./styles.css";
import im from "./imageInSrc.jpg";
import vid from "./myVideo.mp4";

export default function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src={im} alt="source" />
        <br />
        <img src="/imageInPublic.jpg" alt="public" />
      </div>

      <video width={320} height={240} controls>
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
}
