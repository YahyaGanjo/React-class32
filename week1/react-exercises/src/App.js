import "./App.css";
import HobbyList from "./components/hobbyList";
import Guarantee from "./components/guarantee";
import freeShipping from "./f-delivery.png";
import chat from "./chat.png";
import coin from "./coin.png";
import Counter from "./components/counter";

function App() {
  const Lorem =
    "Quis commodo sint enim labore enim labore magna. Sit et dolore ipsum ea deserunt et nisi excepteur. Magna ex consequat esse est minim culpa. Culpa culpa fugiat consectetur laboris eiusmod consectetur cupidatat officia exercitation mollit. Excepteur id minim culpa sint cillum.";
  return (
    <div className="App">
      <HobbyList />
      <div className="container">
        <Guarantee
          image={freeShipping}
          title="Free shipping"
          description={Lorem}
        />
        <Guarantee image={coin} title="100% Money back" description={Lorem} />
        <Guarantee
          image={chat}
          title="Online support 24/7"
          description={Lorem}
        />
      </div>
      <Counter />
    </div>
  );
}

export default App;
