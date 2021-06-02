import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';



function ShelfPage() {
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();

  const addItem = event => {

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        description: description,
        image_url: url,
      }
    })

  }


  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <form>
        <input
          required
          value={description}
          type="text"
          placeholder="Item Description"
          onChange={(event) => setDescription(event.target.value)}>
        </input>

        <input
          required
          value={url}
          type="text"
          placeholder="Item URL"
          onChange={(event) => setUrl(event.target.value)}>
        </input>
        <button onClick={(event) => addItem(event)}>Add Item</button>
      </form>
    </div>
  );
}

export default ShelfPage;

