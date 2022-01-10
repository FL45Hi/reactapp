
// 'ref 'in React  is basically used to access HTML nodes
/*  React.forwardRef() to forward the reference from the child component to the input element inside the component.
Thus we were directly able to access the focus() method of <input> tag directly in our Parent Component 
via this.inputRef.current.focus(). if we would'nt have forwarded the ref  we could'nt have accessed it directly via  the current object.
*/

import React from 'react'

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})

export default FRInput
