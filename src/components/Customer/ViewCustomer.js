import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function ViewCustomer({ customerID }) {
  const [customer, setCustomer] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCustomer = async () => {
      setIsLoading(true)
      try {
        // Replace '/api/customers/' with your actual API endpoint
        const response = await fetch(`/api/customers/${customerID}`)
        if (!response.ok) throw new Error('Network response was not ok.')
        const data = await response.json()
        setCustomer(data)
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
      setIsLoading(false)
    }

    fetchCustomer()
  }, [customerID])

  if (isLoading) return <div>Loading...</div>
  if (!customer) return <div>Customer not found</div>

  // Render customer information based on the state object
  return (
    <div>
      <h2>Customer Details</h2>
      <p>Name: {customer?.name ?? 'N/A'}</p>
      <p>Email: {customer?.email ?? 'N/A'}</p>
      <p>Phone: {customer?.phone ?? 'N/A'}</p>
      {/* You can add more customer details here as needed */}
    </div>
  )
}

ViewCustomer.propTypes = {
  customerID: PropTypes.string.isRequired,
}

export default ViewCustomer
