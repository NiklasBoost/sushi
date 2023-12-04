import { useState } from "react"
import Seats from "./components/seats";
import UserInput from "./components/input";

function App() {
  const [seats, setSeats] = useState(new Array(20).fill('leer'));

  return (
    <>
      <UserInput 
        seats={seats}
        setSeats={setSeats}
      />
      <Seats 
        seats={seats}
        setSeats={setSeats}
      />
    </>
  )
}

export default App
