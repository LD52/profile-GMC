import Photo from './photo.jpeg';
import './App.css';
import { Component } from 'react';
import Icon from  './chevron.png';
import Phone from './telephone.png';
import build from './building.png';
class App extends Component {

  state = {
  }
  open = false;
  Display = () =>{
    if (open === false ){
      this.setState{
        
      }
    } 
  }
  render() {
     return (
    <div className="App">
      <div className='toproot'>
        <div className='left'> 
        <img src ={Photo}  className='img' alt ='img'/>
        </div>
        <button onClick={this.Display}>
          <div className='right'> 
       <div >Luca-David</div>
      <div><img src={Icon} className='pic' alt ='img'/></div> 
        </div>
        </button>
        
        </div>
        <div className='topbottom'>
          <div className='warzel'>
      <div className='first'>
       <div><h2>Luca-David Konan</h2></div>
       <div>konancurry@gmail.com</div>
      </div>
      <div className='second' >
        <div>+225 07 79 08 8006</div>
        <div><img src={Phone} className='phone' alt='img'/></div>
      </div>
      <div className='third'>
        <div>Abidjan Hackerspace</div>
        <div><img src={build} className='buildin' alt='img'/></div>
      </div>
      <div className='fourth' > Account Settings</div>
      <div className='fiveth'>Log out</div>
    </div>

        </div>
    </div>
    )}
    open = true;
  }


export default App;
