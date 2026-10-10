let colors = ["pink", "green", "red", "black", "orange"];

function printName() {
  console.log("AJIT");
}
function App() {
  return (
    <>
      <div>Hello</div>
      <div>Hii</div>
      <p>{5 + 6}</p>
      <p>5 + 6</p>
      <ul>
        {
          colors.map((c) => {
            return <li>{c}</li>
          })
        }
      </ul>
      <button onClick={printName}>Click on me</button>
      <img src="" alt=""></img>

      <br/>
      
    </>
  )
}

export default App
