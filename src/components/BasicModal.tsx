import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';

const BasicModal = ({
  open,
  setShowModal,
  addTruck,
  isEditing,
  selectedTruck,
  updateTruck,
}) => {
  const [truckDetails, setTruckDetails] = useState({
    truckId: '',
    model: '',
    status: '',
    location: '',
    capacity: '',
    fuelLevel: '',
    lastMaintenance: '',
  });

  // Pre-fill the form when editing a truck
  useEffect(() => {
    if (isEditing && selectedTruck) {
      setTruckDetails(selectedTruck);
    }
  }, [isEditing, selectedTruck]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing && selectedTruck) {
      updateTruck(truckDetails);
    } else {
      addTruck(truckDetails);
    }
    setShowModal(false);
  };

  const handleChange = (e) => {
    setTruckDetails({
      ...truckDetails,
      [e.target.name]: e.target.value,
    });
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: '70%', // Custom height
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto', // Add scroll if content exceeds height
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {isEditing ? 'Upadate Details' : 'Add New Truck'}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            component="div"
          >
            <form>
              <div className="form-group">
                <label htmlFor="truckId" className="form-label">
                  Truck ID
                </label>
                <input
                  type="number"
                  id="truckId"
                  name="truckId"
                  value={truckDetails.truckId}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="model" className="form-label">
                  Model
                </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={truckDetails.model}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  value={truckDetails.status}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={truckDetails.location}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="capacity" className="form-label">
                  Capacity
                </label>
                <input
                  type="text"
                  id="capacity"
                  name="capacity"
                  value={truckDetails.capacity}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="fuelLevel" className="form-label">
                  Fuel Level
                </label>
                <input
                  type="text"
                  id="fuelLevel"
                  name="fuelLevel"
                  value={truckDetails.fuelLevel}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastMaintenance" className="form-label">
                  Last Maintenance
                </label>
                <input
                  type="date"
                  id="lastMaintenance"
                  name="lastMaintenance"
                  value={truckDetails.lastMaintenance}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="form-button"
              >
                {isEditing ? 'Save Updates' : 'Add Truck'}
              </button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
