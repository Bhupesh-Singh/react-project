import { forwardRef } from "react" 

const Toast = forwardRef(({message}, ref) => {
    return (
        <div className="toast-container" ref={ref}>
            <div className="toast-message">{message}</div>
        </div>
    )
});

export default Toast;