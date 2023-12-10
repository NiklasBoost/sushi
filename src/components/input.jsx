import { useState } from "react";

const UserInput = ({seats, setSeats}) => {
  const [groupName, setGroupName] = useState('');
  const [groupSize, setGroupSize] = useState(0);

  
  function scannSeats() {
    let newGroupI = [];
    let foundSeats = false;
    
    seats.forEach((seat, i) => {
      if(!foundSeats) {
        if(seat === 'leer') {
          newGroupI.push(i)
        } else {
          newGroupI = [];
        }
        if(groupSize === newGroupI.length) {
          foundSeats = true;
          addNewGroup(newGroupI);
        } 
      }
    })

    if(!foundSeats && seats[0] === 'leer' && seats[seats.length - 1] === 'leer') {
      let i = 0;
      while(seats[i] === 'leer' && groupSize > newGroupI.length) {
        newGroupI.push(i)
        i++;
      }

      i = seats.length;
      while(seats[i] === 'leer' && groupSize > newGroupI.length) {
        newGroupI.push(i)
        i--;
      }

      if(groupSize === newGroupI.length) {
        foundSeats = true;
        addNewGroup(newGroupI);
      } 
    }
  }

  function addNewGroup(positionIndexes) {
    setSeats((prevSeats) => {
      return prevSeats.map((seat, index) => {
        if(positionIndexes.includes(index)) {
          return groupName;
        } else {
          return seat;
        }
      })
    })
  }


  return (
    <>
      <input 
        type="text" 
        placeholder="Gruppenname"
        value={groupName} 
        onChange={(e) => setGroupName(e.target.value)}
      />
      <input 
        type="number" 
        placeholder="Gruppengröße" 
        value={groupSize}
        onChange={(e) => setGroupSize(Number(e.target.value))}  
      />
      <button 
        onClick={scannSeats}
      >
        Neue Gruppe hinzufügen
      </button>
    </>
  )
}

export default UserInput;