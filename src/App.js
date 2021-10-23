import Content from "./views/Content";
import NavBar from "./views/NavBar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
