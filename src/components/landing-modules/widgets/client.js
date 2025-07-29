import React, {Fragment, memo } from 'react'

export const Client = memo((props) => {
  return (
    <Fragment>
      <img src={props.clientImage} alt="client-details" className="img-fluid client-img" loading="lazy"/>

    </Fragment>
  )
})
export default Client
