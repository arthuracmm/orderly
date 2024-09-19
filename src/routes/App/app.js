import React from 'react';
import './app.css'
import MainHeader from "../../Components/mainHeader/mainHeader";
import NewPosts from "../../Components/newPosts/newPosts";



function App() {

  return (
    <div>
      <MainHeader />

      <main>
          <NewPosts/>
      </main>
    </div>
  );
}

export default App;
