import React from 'react';
import './app.css'
import MainHeader from "../../Components/mainHeader/mainHeader";
import NewPosts from "../../Components/newPosts/newPosts";
import Banner from '../../Components/banner/banner';



function App() {

  return (
    <div>
      <MainHeader />

      <main>
          <Banner/>
          <NewPosts/>
      </main>
    </div>
  );
}

export default App;
