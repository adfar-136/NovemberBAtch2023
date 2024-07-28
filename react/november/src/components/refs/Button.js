import {forwardRef} from 'react'


const Button = forwardRef((props,ref)=>(
    <button ref={ref} onClick={props.onclick}>
        {props.children}
    </button>
)
)
export default Button