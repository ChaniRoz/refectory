// import ChatBtn from './components/chat/chatBtn'
// import Form from './components/form/form'
import React
, { useEffect } 
from 'react';
import { useDispatch } from 'react-redux';
import { Add } from './redux/eventSlice';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch createEvent action with demo parameter
    dispatch(Add({ 
      id: 1,
      name: 'Demo Event',
      date: '2022-01-01'
    }));
  }, [dispatch]);

  return (
    <div>
      <h1>Sample Component</h1>
      {/* Add any UI display for testing purposes */}
    </div>
  );
}

export default App;