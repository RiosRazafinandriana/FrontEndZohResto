import { useState } from 'react';

function App() {
  
  const [nb,setNb] = useState({
    val: 18
})

  return(
    <div>
      Heyyy, i'm {nb.val} !
    </div>
  )
}

export default App
