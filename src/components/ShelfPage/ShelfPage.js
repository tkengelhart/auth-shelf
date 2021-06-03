import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';



function ShelfPage() {
  const shelf = useSelector(store => store.shelf);
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_SHELF'
    })
  }, [])


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

      {shelf ?
        shelf.map(item => 
        (<div key={item.id}>
        <img src={item.image_url} />
        <div>{item.description}</div>
        </div>))
        :
        <p>Your shelf is empty</p>}

    </div>
  );
}

export default ShelfPage;

