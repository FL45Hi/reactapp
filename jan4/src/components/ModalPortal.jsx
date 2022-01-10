import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//These two containers are siblings in the DOM 
const appRoot = document.getElementById('root');
const modalRoot = document.getElementById('modal-root');

// the portal API. 
class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }

    componentDidMount() {
        modalRoot.appendChild(this.el)
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }

    render() {
        // Use a portal to render the children into the element 
        return ReactDOM.createPortal(
            <div style={{
                padding: 20,
                background: '#fff',
                borderRadius: '2px',
                display: 'inline-block',
                minHeight: '100px',
                margin: '1rem',
                position: 'relative',
                minWidth: '200px',
                boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                justifySelf: 'center',
            }}>
                {this.props.children}
                <hr />
                <button onClick={this.props.onClose}>Close</button>

            </div>
            ,
            this.el);
    }
}
// The Modal component is a normal React component, so we can 
// render it wherever we like without needing to know that it's 
// implemented with portals. 



const ModalPortal = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleHide = () => setShowModal(false);



    return (
        <div
            style={{
                height: '100%',
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div style={{
                    maxWidth: 400,
                    position: 'relative',
                }}
            >

                <h4>This div has overflow: hidden.</h4>
                <button onClick={handleShow}>Show modal</button>

                { showModal ? (
                    <Modal onClose={handleHide}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odit!
                    </Modal>
                ) : null}

                {/* {modal}  */}
            </div>
        </div>
    )
}

export default ModalPortal;