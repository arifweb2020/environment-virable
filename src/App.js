function App() {
  console.log({ REACT_APP_API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT });
  return <div>
    <h1>npm run build-prod  check it from packge.json file</h1>
  <h1>npm run build-qa  check it from packge.json file</h1>
  <h1>run build app : npx serve -s build           ---- run in local browser</h1> 
    <h1>install live server : npm i -g serve</h1>
   
    Home
    </div>;
}

export default App;
