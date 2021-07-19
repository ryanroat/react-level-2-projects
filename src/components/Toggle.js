import { useState } from 'react'

export const Toggle = () => {

  const [toggled, setToggled] = useState(false)

  return (
    <div>
      <button onClick={() => {setToggled(!toggled)}}>Show / Hide</button>
      {toggled && <h1>Hello World</h1>}
    </div>
  )
}
