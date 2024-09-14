import React from 'react';
import './app.css'
import MainHeader from "../../Components/mainHeader/mainHeader";
import NewPosts from "../../Components/newPosts/newPosts";
import AddPosts from "../../Components/AddPosts/AddPosts"



function App() {

  return (
    <div>
      <MainHeader />

      <main>
          <NewPosts/>
          <AddPosts/>
 
      </main>
    </div>
  );
}

export default App;
