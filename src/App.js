import React from 'react';
import './App.css';
import List from './components/List';

function App() {
  const [text, setText] = React.useState('');
  const [listItems, setListItems] = React.useState([]);

  const handleClick = () => {
    setListItems((prevState) => [...prevState, text]);
    setText('');
  };

  const deleteItem = (value) => {
    setListItems(
      listItems.filter((item) => {
        return item != value;
      })
    );
  };

  return (
    <main>
      <div className='App'>
        <input
          type='text'
          placeholder='Enter Item'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick}>Add Item</button>
      </div>
      <List listItems={listItems} deleteItem={deleteItem} />
    </main>
  );
}

export default App;
