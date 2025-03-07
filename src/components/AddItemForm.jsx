import { useRef, useState } from 'react';
import Button from './Button';

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState('');
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic validation, if the itemText is empty, do nothing
    if (itemText.trim() === '') {
      alert("Item can't be empty");
      setItemText('');
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add item</h2>
      <input
        ref={inputRef}
        autoFocus
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
}
