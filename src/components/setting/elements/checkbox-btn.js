import {memo} from 'react'
import { useDispatch } from 'react-redux'
import SettingAction from '../../../store/setting/actions'

const CheckboxBtn = memo((props) => {
    const dispatch = useDispatch();
    const checkboxCheckValue = (selector,value) => {
        if(selector.includes(value)) {
            return true
        }
        return false
    }

    const changeDispatch = (e) => {
        const value = props.value
        if(checkboxCheckValue(props.defaultChecked, props.value)) {
            dispatch(SettingAction[props.btnName]([...props.defaultChecked.filter(item => item !== value)]))
        } else {
            dispatch(SettingAction[props.btnName]([...props.defaultChecked, value]))
        }
    }
    return (
        <div className={`${props.className}`}>
            <input type="checkbox" value={props.value} className={props.type === 'switch' ? 'form-check-input' : 'btn-check'} name={props.btnName} id={props.id} autoComplete="off" defaultChecked={checkboxCheckValue(props.defaultChecked, props.value)} onClick={changeDispatch} />
            <label className={`btn btn-border d-block ${props.labelclassName}`} htmlFor={props.id}>
                {props.children}
            </label>
            {props.imgComponent ? <span className="mt-2"> {props.label || ''} </span> : ''}
        </div>
    )
})

CheckboxBtn.displayName = 'CheckboxBtn'
export default CheckboxBtn