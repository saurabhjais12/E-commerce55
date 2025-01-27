import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SummaryApi from '../common'
import VerticalCard from '../Components/verticalCardsearch'

const SearchProduct = () => {
  const query = useLocation()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  console.log('Search query:', query.search)

  const fetchProduct = async () => {
    setLoading(true)
    try {
      // Check if query.search is valid (not empty)
      if (!query.search) {
        console.error("Search query is empty")
        setLoading(false)
        return
      }

      const response = await fetch(SummaryApi.searchProduct.url, {
        method: 'POST',  // POST method
        headers: {
          'Content-Type': 'application/json',  // Send JSON content
        },
        body: JSON.stringify({ query:query.search })  // Send the search query in the body
      })

      if (!response.ok) {
        console.error('Error fetching data:', response.status)
        setLoading(false)
        return
      }

      // Parse the response as JSON
      const dataResponse = await response.json()
      console.log('Response Data:', dataResponse)

      // Check if the response contains the expected data field
      if (dataResponse && dataResponse.data) {
        setData(dataResponse.data)  // Set the products to state
      } else {
        console.error('Unexpected response structure:', dataResponse)
      }
    } catch (error) {
      console.error('Error in fetch:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
      fetchProduct()
  },[query])

  return (
    <div className='container mx-auto p-4'>
      {loading && (
        <p className='text-lg text-center'>Loading ...</p>
      )}

      <p className='text-lg font-semibold my-3'>Search Results: {data.length}</p>

      {data.length === 0 && !loading && (
        <p className='bg-white text-lg text-center p-4'>No Data Found....</p>
      )}

      {/* You can render the products as needed */}
      {data.length !== 0 && !loading && (
        <VerticalCard loading={loading} data={data} />
      )}
    </div>
  )
}

export default SearchProduct
