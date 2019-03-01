import React from 'react'
import { connect } from 'react-redux'

const Dashboard = ({authData}) => {
  console.log('DASHBOARD RENDERING', authData);
  const { name, verified } = authData || {}
  
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <p><strong>Congratulations {name}!</strong> If you're seeing this page, you've logged in with uPort successfully.</p>
        <p>Here are the verifications you've shared with this app:</p>
        <p>Change the data displayed here by updating the <code>verified</code> property in the argument to <code>requestDisclosure</code> in <code>src/components/util/LoginButton.js</code></p>
        {verified && verified.map((attestation) =>
          <AttestationCard {...attestation} />
        )}
      </div>
    </div>
  )
}

const AttestationCard = ({claim, iss, sub}) => (
  <div className="card">
    <h4>subject: <code>{sub}</code></h4>
    <h4>issuer: <code>{iss}</code></h4>
    <ExpandJSON obj={claim} />
  </div>
)

const ExpandJSON = ({obj}) => {
  return (
    <ul className="key">
      {Object.keys(obj).map((key) => (
        <li><b>{key}: </b>
          {
            (Array.isArray(obj[key])) 
              ? '[' + obj[key].map((item) => <ExpandJSON obj={item} />) + ']'
              : (typeof obj[key] === 'object')
              ? <ExpandJSON obj={obj[key]} />
              : obj[key]
          }
        </li>
      ))}
    </ul>
  )
}

export default connect(
  (state) => ({
    authData: state.user.data
  })
)(Dashboard)
