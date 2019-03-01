import React from 'react'

import guide from '../../guide.md'

const Home = () => {


  return (
    <div>
      <div>
        <h1>Good to Go!</h1>
        <p>You're all set up with uPort, truffle, and react/redux!  
          This boilerplate contains examples of several of uPort's capabilities,
          all wrapped into familiar react/redux patterns:
        </p>
        <div dangerouslySetInnerHTML={{ __html: guide}} />
      </div>
    </div>
  )
}

export default Home
