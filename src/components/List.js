import React from 'react';

function List({ listItems, deleteItem }) {
  return (
    <div className='list-items'>
      <ul>
        {listItems.length > 0 &&
          listItems.map((item, idx) => (
            <li key={idx} onClick={() => deleteItem(item)}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default List;
