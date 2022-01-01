import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      
     <Operate />
       <Manufacture />
    </div>
  );
}
function Operate(){

return   (<div>  <h1>Mobile Operating System</h1>
                 <ul>
                   <li>Android</li>
                   <li>Blackberry</li>
                   <li>iPhone</li>
                   <li>WindowsPhone</li>
                 </ul>
          
</div>)
}
function Manufacture(){
  
return (
  <div className='center'>
    <h1>Mobile Manufactures</h1>
    <ul>
      <li>Samsung</li>
      <li>HTC</li>
      <li>Micromax</li>
      <li>Apple</li>
    </ul>
  </div>
)
}

export default App;
