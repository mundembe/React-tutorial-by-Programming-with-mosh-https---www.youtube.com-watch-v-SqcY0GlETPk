
import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"


function App() {

  const [isvisible, setVisibility] = useState(false)


  return <>

    {isvisible && <Alert onClose={() => setVisibility(false)} >user clicked the button</Alert>}

    <Button onClick={() => setVisibility(true)} >
      Click
    </Button>

  </>
}

export default App
