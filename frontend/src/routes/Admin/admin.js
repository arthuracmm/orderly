import React from 'react';
import './admin.css'
import MainHeader from "../../Components/mainHeader/mainHeader";
import NewPosts from "../../Components/newPosts/newPosts";
import Banner from '../../Components/banner/banner';



function Admin() {

  return (
    <div>
      <MainHeader />

      <main>
          <NewPosts/>
      </main>
    </div>
  );
}

export default Admin;
