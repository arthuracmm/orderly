import React from 'react';
import './admin.css'
import NewPostsADM from '../../Components/newPostsADM/newPostsADM';
import MainHeaderADM from '../../Components/mainHeaderADM/mainHeaderADM';



function Admin() {

  return (
    <div>
      <MainHeaderADM/>
      <main>
          <NewPostsADM/>
      </main>
    </div>
  );
}

export default Admin;
