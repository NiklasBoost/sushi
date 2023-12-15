import { useEffect, useState } from "react";

const UserInput = ({seats, setSeats}) => {
  const [groupName, setGroupName] = useState('');
  const [groupSize, setGroupSize] = useState(0);
  const [groupNameByUser, setGroupNameByUser] = useState(false);

  useEffect(() => {
    if(!(groupName.includes('Person') || groupName.includes('Personen-Gruppe'))) {
      setGroupNameByUser(true)
    }
  }, [groupName])


  useEffect(() => {
    if(!groupNameByUser || !groupName) {
      if(groupSize == 1) {
        setGroupName('1 Person')
        setGroupNameByUser(false);
      } else if(groupSize > 1) {
        setGroupName(groupSize + " Personen-Gruppe")
        setGroupNameByUser(false);
      } else {
        setGroupName("")
        setGroupNameByUser(false);
      }
    }
  }, [groupSize])


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
    if(groupName) {
      setSeats((prevSeats) => {
        return prevSeats.map((seat, index) => {
          if(positionIndexes.includes(index)) {
            return groupName;
          } else {
            return seat;
          }
        })
      })
      if(groupNameByUser) {
        setGroupName("")
      }
      setGroupNameByUser(false);
    } else {
      alert('Gruppenname darf nicht leer sein');
    }
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