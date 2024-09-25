import './App.css';
import AddTruck from './components/AddTruck';

function App() {
  return (
    <div className="container">
      <h2 className="title">Truck Management System</h2>
      <div className="truck-add">
        <AddTruck />
      </div>
    </div>
  );
}

export default App;
