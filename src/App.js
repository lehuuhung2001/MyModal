
import { useState } from 'react';
import './App.css';
import Modal from './Modal/Modal';
function App() {
  const [showModal,setShowModal] = useState(false)
  const openModal = () =>{
    setShowModal(true)
  }
  
  return (
    <div>
      <div className="App">
        <h1>Welcome to react portals!</h1>
        <button onClick={openModal}>Click to show modal</button>
      </div>
      <Modal title="This is a warning" showModal={showModal} closeModal={()=>setShowModal(false)}>
        Make sure that you are older than 18 to access this page
      </Modal>
    </div>
  );
}

export default App;
