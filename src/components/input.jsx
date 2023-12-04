import { useState } from "react";

const UserInput = ({seats, setSeats}) => {
  const [groupName, setGroupName] = useState('');
  const [groupSize, setGroupSize] = useState(0);

  
  function scannSeats() {
    let counter = 0;
    seats.forEach((seat, index) => {
      if(seat === 'leer') {
        counter++;
      } else (
        counter = 0
      )
      if(counter === groupSize) {
        addNewGroup(index);
      }
    })
  }

  function addNewGroup(groupPosition) {
    seats.forEach((seat, index) => {
      if(index <= groupPosition && index > groupPosition - groupSize) { 
        setSeats((prevSeats) => {
          const newSeats = [...prevSeats];
          newSeats[index] = groupName;
          return newSeats;
        })
      } 
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