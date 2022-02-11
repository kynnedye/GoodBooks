import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'


export default function GoalModal({setNumber, number,  setSaved, saved, setGoalSet}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const saveReadingGoal = (e) =>{
        e.preventDefault()
        setSaved(number)
        setGoalSet(true)
        setShow(false)

    }

    return (
        <div>
        <Button variant="info" className="progress-btn"onClick={handleShow}>
            {saved > 0 ? "Change goal" : "Set Goal"}
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reading Goal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Number of books</Form.Label>
                    <Form.Control name="books" 
                        value={number} 
                        onChange={(e)=>{setNumber(e.target.value)}}
                        type="number" 
                        min="0"></Form.Control>
                </Form.Group>
                
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={saveReadingGoal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
