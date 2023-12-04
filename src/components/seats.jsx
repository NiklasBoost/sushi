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
        <div key={i}>
          <div >Stuhl: {seat}</div>
          <button 
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