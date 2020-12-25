import Background from "./Background";
import Info from "./Info";
import "./style/App.css";
import Skills from "./Skills";
import Github from "./Github";
import Details from "./Details";
function app() {
  return (
    <div className="app">
      <div className="background__components">
        <Background />
        <Info />
        <Skills />
        <Details />
        <Github />
      </div>
    </div>
  );
}

export default app;
