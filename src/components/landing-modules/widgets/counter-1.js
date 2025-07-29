import React, { Fragment,memo } from 'react'

const Counter1 = memo((props) => {
  return (
    <Fragment>
         <h2 className=" mb-2 counter text-white">{props.couterVlue}</h2>
         <h6 className="text-white">{props.counterTitle}</h6>
    </Fragment>
  )
})

export default Counter1