import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Modal } from 'react-bootstrap';

const Edit = (props) => {
    const [name, editName] = useState();
    const [surname, editSurname] = useState();
    const [number, editNumber] = useState();
    // const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault()
        let info = {
            name,
            surname,
            number,
            id: Date.now()
        }
        props.addTask(info)
        editName('')
        editSurname('')
        editNumber('')
    }
    return (

        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Edit;