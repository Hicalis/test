import React from 'react';
import './App.css';
import first from './img/btQikJ-7eE4fJXYyBYtTQPC1XTooVqz9iHdFlUCcjNRtNGgS2HQhZct_-1n558QE3XqLPkbrakkYeYlKgJ3e8g-g5qSOHt0qvvGy8nUbErRBYd0-WZOMTPnCBXEAGTkxLSf-sI_jJwcISAkLTpNRcQ0q7-qCvywqvDytfWQqHaWfpkDjOikpfAvXhTGXKVAHMjQtXGoh7R8fUHUAdqqu1.webp'
import second from './img/btQikJ-7eE4fJXYyBYtTQPC1XTooVqz9iHdgkED5mdGocU133ZQBdb7vrixZZ8R07Xr7HiauKllYGaxPkJ0b0j_w5qSOPq16bpFy8nUbErRBYd0-WZOMTPnCBXEAGTkxLSf-sI_jJwcISAkLTpNRcQ0q7-qCvywqvDytfWQqHaWfpkDjOikpfAvXhTGXKVAHMjQtXGoh7R8fUHUAdqqu1.webp' 
import third from './img/i (1).webp'
import fourth from './img/i (2).webp'
import fifth from './img/i (3).webp'
import six from './img/i.webp'
import Modal from './Modal';

function App() {
  const images = [first, second, third,fourth,fifth,six]
  const [currentImage, setCurrentImage] = React.useState(0)
  const [modalActive, setModalActive] = React.useState(0)


  function hideImage(){
    setModalActive((prev)=>!prev)
  }

  function prevImage(){
    if(currentImage!==0){
      setCurrentImage((prev)=>prev-1)
    }
  }

  function nextImage(){
    if(currentImage!==images.length-1){
      setCurrentImage((prev)=>prev+1)
    }
  }
  
  return (
    
    <div className="App" >
      {modalActive? <Modal link={images[currentImage]} change={hideImage}/>: null}
      <div style={{display:'flex', marginBottom:'10px'}} >
        <div onClick={prevImage} style={{width:'100%', height:'300px',marginTop:'10%'}}/>
        <img src={images[currentImage]} alt='cat' onClick={hideImage} style={{marginTop:'10%', height:'320px'}}/>
        <div onClick={nextImage} style={{width:'100%', height:'300px',marginTop:'10%'}}/>
      </div>
      <div className='gallery' style={{display:'flex', justifyContent: 'center'}}>
        <button onClick={prevImage}  style={{marginRight:'5px'}}>prev</button>
        <div>
          {images.map((el,index)=>{
            return (<img key={el} src={el} alt='cat' width={`50px`} onClick={()=>{setCurrentImage(index)}} style={{marginRight:'5px'}}/>)
          })}
        </div>
        <button onClick={nextImage}>next</button>
      </div>
      
     
    </div>
  );
}

export default App;
