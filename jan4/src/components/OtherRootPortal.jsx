import React from 'react'
import ReactDOM from 'react-dom'

function OtherRootPortal() {

    return ( ReactDOM.createPortal(
        <h2>Other root</h2>,
        document.getElementById('portal-root')
    ))
}

export default OtherRootPortal
