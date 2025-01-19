import { useEffect, useState } from "react";
import "./App.css";
import { URL } from "./config"
import axios from "axios";

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [ description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);

  async function fetchTransactions(){
    const url = URL+'/api/v1/transactions'
    const response = await axios.get(url);
    return response;
  }

  useEffect(() => {
    fetchTransactions().then(transactions => {
      setTransactions(transactions.data);
    });
  }, []);

  async function handleSubmit(event:any){
    event.preventDefault()
    const url = URL+'/api/v1/transaction';
    // console.log(url);
    const array = name.split(' ');
    const price = array[0];
    const response = await axios.post(`${url}`, {
      price: price,
      name:name.substring(price.length+1),
      description: description,
      datetime:datetime,
      
    },{
      headers:{'Content-type':'application/json'}
    });

    setName("");
    setDatetime("");
    setDescription("");

    const result = response.data.result;
    console.log(result);
  }

  let obj = {
    "name": "abc",
    "description": "description",
    "price": -12,
    "datetime":"12-1-12"
    }

    let balance = 0;
    for(const transaction of transactions){
      balance = (balance + transaction.price);
    }
      

  return (
    <>
      <main>
        <h1>
          Rs {balance}
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
              onChange={e => setDescription(e.target.value)}/>
          </div>
          <button type="submit">Add new transaction</button>
          {/* {transactions.length} */}
        </form>

        <div className="transactions">

          {transactions.length > 0 && transactions.map(transaction => {
            <div>
              <div className="transaction">
                <div className="left">
                  <div className="name">{transaction.name}</div>
                  <div className="description">{transaction.description}</div>
                </div>

                <div className="right">
                  <div className={`price ${transaction.price < 0 ? "red": "green"}`}>
                    {transaction.price}
                    </div>
                  <div className="datetime">{transaction.datetime}</div>
                </div>
              </div>
            </div>
          })};


          <div className="transaction">
                <div className="left">
                  <div className="name">{obj.name}</div>
                  <div className="description">{obj.description}</div>
                </div>

                <div className="right">
                  <div className={`price ${obj.price < 0 ? "red" : "green"}`}>
                    {obj.price}
                    </div>
                  <div className="datetime"></div>
                  <div className="datetime">{obj.datetime}</div>
                </div>
              </div>

          

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
