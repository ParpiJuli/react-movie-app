import React from "react";

interface App {
  message? : string;
}

const App = ({message}) => {
  return (
    <div>
      <p>Hey! {message}</p>
    </div>
  )
}

export default App;