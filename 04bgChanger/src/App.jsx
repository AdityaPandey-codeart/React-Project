import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("white")

  return (
    <body 
      className="w-full h-screen duration-200 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl">
          
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setcolor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

        </div>
      </div>
    </body>
  )
}

export default App