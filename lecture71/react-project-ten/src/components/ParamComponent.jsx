import React from 'react'
// import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

const ParamComponent = () => {
//   const params = useParams();
  const [searchParams] = useSearchParams();
  return (
    <div>
      {/* Route Params: {params.id} */}
      Query Params: {searchParams.get("id")}
    </div>
  )
}

export default ParamComponent
