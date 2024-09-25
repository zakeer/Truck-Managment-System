import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.css';

const FIlteringTrucks = ({ truckStatus, handleFilterChange }) => {
  return (
    <div className="dropdown">
      <Dropdown title={truckStatus} onSelect={handleFilterChange}>
        <Dropdown.Item eventKey="All Status">All Status</Dropdown.Item>
        <Dropdown.Item eventKey="Active">Active</Dropdown.Item>
        <Dropdown.Item eventKey="Maintenance">Maintenance</Dropdown.Item>
        <Dropdown.Item eventKey="Out Of Service">Out Of Service</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default FIlteringTrucks;
