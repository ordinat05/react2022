import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <img src="img/img-1.jpg" alt="" /> */}
      {/* <img src="./public/img/img-1.jpg" alt="" /> */}
      {/* <img src="/img/img-1.jpg" alt="" /> */}
      {/* <img src="public/img/img-1.jpg" alt="" /> */}
      {/* <img src="../img/img-2.jpg" alt="" /> */}
      {/* test */}

      <img src="img2/img-2.jpg" alt="" />
      <img src="/img2/img-2.jpg" alt="" />
      <img src="./img2/img-2.jpg" alt="" />
      <img src="../img2/img-2.jpg" alt="" />
      <img src="./../img2/img-2.jpg" alt="" />
      <img src="../../img2/img-2.jpg" alt="" />
    </div>
  );
}

export default App;
