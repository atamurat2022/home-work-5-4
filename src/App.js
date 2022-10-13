import "./App.css";
import Block from "./Block";

function App() {
  const blocks = [
    {
      id: "b1",
      block: "yellow",
    },
    {
      id: "b2",
      block: "green",
    },
    {
      id: "b3",
      block: "color",
    },
    

    {
      id: "b4",
      block: `${Math.random()}`,
    },
  ];

  return (
    <div className="App textWrap">
      {blocks.map((el, id) => (
        <Block data={el} key={id} />
      ))}
    </div>
  );
}

export default App;
