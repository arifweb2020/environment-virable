function App() {
  console.log({ REACT_APP_API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT });
  return <div>
    <h1>install live server : npm i -g serve</h1>
   <h1>run build app : npx serve -s build</h1> 
    Home
    </div>;
}

export default App;
