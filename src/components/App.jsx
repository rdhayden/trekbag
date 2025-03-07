import Background from './Background';
import Footer from './Footer';
import '../index.css';
import Header from './Header';
import ItemList from './ItemList';
import SideBar from './SideBar';
import { INITIALITEMS } from '../lib/constants';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(INITIALITEMS);

  const handleAddItem = (text) => {
    setItems(() => {
      return [
        ...items,
        {
          id: Date.now(),
          completed: false,
          text: text,
        },
      ];
    });
  };

  const handleDeleteItem = (id) => {
    setItems(() => {
      return items.filter((item) => item.id !== id);
    });
  };

  const handleToggleItem = (id) => {
    setItems(() => {
      return items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    });
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(INITIALITEMS);
  };

  const handleMarkAllAsComplete = () => {
    setItems(() => {
      return items.map((item) => {
        return {
          ...item,
          completed: true,
        };
      });
    });
  };

  const handleMarkAllAsIncomplete = () => {
    setItems(() => {
      return items.map((item) => {
        return {
          ...item,
          completed: false,
        };
      });
    });
  };

  return (
    <>
      <Background />
      <main>
        <Header />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <SideBar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
