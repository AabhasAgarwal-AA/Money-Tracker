import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [ description, setDescription] = useState('');

  function handleSubmit(){
    
  }

  return (
    <>
      <main>
        <h1>
          Rs 400<span>.00</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="basic">
            <input type="text"
            value={name}
            onChange={e => setName(e.target.value)}

            placeholder={"+200 TV"} />
            <input type="datetime-local" 
            value={datetime}
            onChange={e => setDatetime(e.target.value)} />
          </div>
          <div className="description">
            <input type="text" placeholder={"description"}
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
          </div>
          <button type="submit">Add new transaction</button>
        </form>
        <div className="transactions">

          <div className="transaction">
            <div className="left">
              <div className="name">New TV</div>
              <div className="description"> it was time for new tv</div>
            </div>

            <div className="right">
              <div className="price red">- 500 rs</div>
              <div className="datetime">2025-1-112</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">Earned from gig</div>
              <div className="description"> it was time for new tv</div>
            </div>

            <div className="right">
              <div className="price green">+700 rs</div>
              <div className="datetime">2025-1-112</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">Spend</div>
              <div className="description"> it was time for new tv</div>
            </div>

            <div className="right">
              <div className="price red">-900 rs</div>
              <div className="datetime">2025-1-112</div>
            </div>
          </div>

            
        </div>
      </main>
    </>
  );
}

export default App;
