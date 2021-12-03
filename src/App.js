import "./App.css";
import Collaboration from "./Component/Collaboration";
import Footer from "./Component/Footer";
import Projectdetail from "./Component/Projectdetail";
import Skill from "./Component/Skill";
import Smallintro from "./Component/Smallintro";
import Userview from "./Component/Userview";
import Work from "./Component/Work";


function App() {
  return (
    <div className="App">
      <Userview />
      <Smallintro />
      <Skill />
      <Work />
      <Projectdetail />
      <Collaboration />
      <Footer />
    </div>
  );
}

export default App;
