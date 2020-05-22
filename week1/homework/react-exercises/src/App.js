import React from 'react';
import './App.css';
import HobbyList from './EX1/HobbyList';
import Guarantee from './EX2/Guarantee';
import Counter from './EX3/Counter';

const images =[
  {
      img:'/assets/f-delivery.png',
      title:'Free shipping',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit earum modi optio. Nemo temporibus, qui magnam maiores corporis dolor, quisquam ut perferendis consequuntur doloremque autem hic, accusantium quis velit! Modi?'
  },
  {
      img:'/assets/coin.png',
      title:'100% Money back',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit earum modi optio. Nemo temporibus, qui magnam maiores corporis dolor, quisquam ut perferendis consequuntur doloremque autem hic, accusantium quis velit! Modi?'
  },
  {
      img:'/assets/chat.png',
      title:'Online support 24/7',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit earum modi optio. Nemo temporibus, qui magnam maiores corporis dolor, quisquam ut perferendis consequuntur doloremque autem hic, accusantium quis velit! Modi?'
  }
]


function App() {
  return (
    <>
    <div>
      <HobbyList />
    </div>
    <div>
      {images.map(section =>(
        <Guarantee key={section.title} img={section.img} title={section.title} description={section.description}/>
      )
      )}
    </div>
    <div>
      <Counter/>
    </div>
    </>
  );
}

export default App;
