const Seats = ({seats, setSeats}) => {

  function sendAway(index) {
    const groupName = String(seats[index]);

    if (groupName !== 'leer') {
      setSeats(prevSeats => {
        const newSeats = prevSeats.map((seat) => {
          if(String(seat) === groupName) {
            return seat = 'leer'; 
          } else {
            return seat;
          }
        });
        return newSeats;
      });
    } else {
      alert('Hier sitzt niemand');
    }
  }

  return (
    <>
      {seats.map((seat, i) => (
        <div 
          style={{
            display: 'flex', 
            margin: '10px'}} 
          key={i}
        >
          <div 
            style={{
              backgroundColor: seat === 'leer' ?  
              'lightgreen' 
                : 
              'lightcoral', 
              padding: '3px 8px'
            }}
          >
            Stuhl: {seat}
          </div>
          <button 
            style={{marginLeft: '5px'}}
            onClick={() => sendAway(i)}
          >
            wegschicken
          </button>
        </div>
      ))}
    </>
  )
}

export default Seats;