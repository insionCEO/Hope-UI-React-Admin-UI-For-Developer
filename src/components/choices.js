import { Fragment, useEffect, memo, createRef } from 'react'
import _ from 'lodash'

//choices
import Choices from 'choices.js'
import '../assets/custom/css/choices.css'

const ChoicesJs = memo((props) => {
    const single = createRef()
    const isMultiple = props.select === 'multi' ? true : false
    const random = () => {
        return Math.floor(Math.random() * 1000) + 1
    };
    useEffect(()=>{
        if(!single.current.classList.contains('choices__input')) {
            if(props.options.length > 0) {
                const obj = {
                    removeItemButton: isMultiple,
                    allowHTML: true,
                    shouldSort: false,
                }
                new Choices(single.current, obj)
            }
        }
    }, [isMultiple, single, props])
  return (
    <Fragment>
        <select ref={single} id={random()} className={props.className} onChange={(e) => _.isFunction(props.onChange) ? props.onChange(e) : e.preventDefault()} multiple={isMultiple}>
            {props.options.map((item, index) => (
                <option key={index} value={item.value}>{item.label}</option>
            ))}
        </select>
    </Fragment>
  )
})
ChoicesJs.displayName = 'ChoicesJs'
export default ChoicesJs