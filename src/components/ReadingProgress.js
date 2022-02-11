import React, {useContext} from 'react'
import { Context } from '../context/BookContext'
import { ProgressBar,Button } from 'react-bootstrap'

import GoalModal from './GoalModal'

export default function ReadingProgress() {
   
    const {bookRead, setBookRead, setNumberOfBooks, numberOfBooks,savedGoal, setSavedGoal, goalSet, setGoalSet} = useContext(Context)

   
    const bookRatio = (bookRead/savedGoal) * 100

    // resets the reading goal

    const resetGoal = ()=>{
        setSavedGoal(0)
        setBookRead(0)
        setGoalSet(false)
        window.location.reload()
    }
    const checkIfComplete = () =>{
       if(goalSet !== true){
       
           return <p> No goal set</p>
       } else if (goalSet && bookRead == savedGoal){
           return <p>Good job you completed your goal!!🎉</p>
       }else if (goalSet && bookRead !== savedGoal){
           return <p>Reading progress:</p>
       }
    }

    return (
        <div className="progress-container">
            {checkIfComplete()}
            
            <ProgressBar variant ="info"className="progress"now={ bookRatio} />
            <p>{bookRead}/{savedGoal}</p>
            <GoalModal setNumber ={setNumberOfBooks} number={numberOfBooks} saved={savedGoal} setSaved={setSavedGoal} setGoalSet ={setGoalSet}/>
           
            {savedGoal > 0 ?    
                 <Button className="reset"variant="danger" onClick={resetGoal}>Reset</Button>: ""
                 }

        </div>
    )
}
