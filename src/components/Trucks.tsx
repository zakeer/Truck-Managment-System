import { Truck } from 'lucide-react';
const Trucks = ({
  truckId,
  model,
  status,
  location,
  capacity,
  fuelLevel,
  lastMaintenance,
  onEditClick,
}) => {
  return (
    <div className="truck-card">
      <div className="truck-header">
        <h3>Truck {truckId}</h3>
        <div className="icons">
          <span className="truck-icon">
            <Truck style={{ width: '20px', height: '20px' }} />
          </span>
          <span className="edit-icon" onClick={onEditClick}>
            ✏️
          </span>
        </div>
      </div>
      <h2>{model}</h2>
      <p>
        <strong>Status:</strong> {status}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Capacity:</strong> {capacity}
      </p>
      <p>
        <strong>Fuel Level:</strong> {fuelLevel}
      </p>
      <p>
        <strong>Last Maintenance:</strong> {lastMaintenance}
      </p>
    </div>
  );
};

export default Trucks;
