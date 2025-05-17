
import './App.css';
import {useState} from "react";

function App() {
  const [name,setName]=useState('');
  const [datetime,setDatetime]=useState('');
  const [description,setDescription]=useState('');
  function addNewTransaction(ev){
    ev.preventDefault();
    const url=process.env.REACT_APP_API_URL+'/transaction';
    const price=name.split(' ')[0]; 
    
    fetch(url,{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body: JSON.stringify({
        price,
        name:name.substring(price.length+1),
        description,
        datetime
      })
    }).then(response =>{
      response.json().then((json) =>{
            setName('');
            setDatetime('');
            setDescription('');
             console.log('result',json);
      });
    });
  }
  return (
    <main>
      <h1>$400</h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
        <input type="text" 
              value={name}
              onChange={ev=> setName(ev.target.value)}
              placeholder={'+200 new samsung tv'} />
        <input 
                value={datetime}
                type="datetime-local"
                onChange={ev =>setDatetime(ev.target.value)} />
        </div>
        <div className="description">
          <input  type="text" 
                  value={description}
                  onChange={ev=>setDescription(ev.target.value)}placeholder={'description'}/>
        </div>
        <button type="submit">Add new transaction</button>
        
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">it was time for new tv</div>

          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2024-12-18 17:55</div>
          </div>

        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Gig job new website</div>
            <div className="description">it was time for new tv</div>

          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2024-12-18 17:55</div>
          </div>

        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description">it was time for new tv</div>

          </div>
          <div className="right">
            <div className="price red">-$900</div>
            <div className="datetime">2024-12-18 17:55</div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default App;
