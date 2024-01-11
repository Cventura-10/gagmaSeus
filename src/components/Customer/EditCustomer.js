import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Uncomment if you use Redux action creators
// import { useDispatch } from 'react-redux';
// import { updateCustomer } from 'path-to-your-action-creators';

function EditCustomer({ customerID }) {
  const [customer, setCustomer] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Uncomment if you use Redux
  // const dispatch = useDispatch();

  useEffect(() => {
    const fetchCustomer = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/customers/${customerID}`);
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        setCustomer(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
      setIsLoading(false);
    };

    fetchCustomer();
  }, [customerID]);

  if (isLoading) return <div>Loading...</div>;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Uncomment and use your actual code for dispatching update action
    // dispatch(updateCustomer(customer));
    console.log('Submitted', customer);
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCustomer((prevCustomer) => ({ ...prevCustomer, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={customer.name || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={customer.email || ''}
          onChange={handleChange}
        />
      </label>
      {/* Include other fields as necessary */}
      <button type="submit">Update Customer</button>
    </form>
  );
}

EditCustomer.propTypes = {
  customerID: PropTypes.string.isRequired,
};

export default EditCustomer;
