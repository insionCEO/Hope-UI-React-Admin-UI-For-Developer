import React,{Fragment,memo} from 'react'

const Counter = memo((props) => {
  return (
    <Fragment>
        <h2 className=" mb-2 counter">{props.couterVlue}</h2>
        <h6>{props.counterTitle}</h6>
    </Fragment>
  )
})

export default Counter