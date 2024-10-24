import React from 'react';
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './routes/App/app';
import EditPosts from './routes/EditPosts/EditPosts'
import AddPosts from './routes/AddPosts/AddPosts';
import SobrePage from './routes/SobrePage/SobrePage';
import Cart from './routes/Cart/Cart';
import MyProfile from './routes/MyProfile/MyProfile';
import ProductDetails from './routes/ProductDetails/ProductDetails'


const router = createBrowserRouter([
    {
        path : '/',
        element : <App />
    },
    {
        path : '/edit/:id',
        element : <EditPosts />
    },
    {
        path : '/addpost',
        element : <AddPosts />
    },
    {
        path : '/sobre',
        element : <SobrePage/>
    },
    {
        path : '/cart',
        element : <Cart/>
    },
    {
        path : '/myprofile',
        element : <MyProfile/>
    },
    {
        path : '/produtos/:id',
        element : <ProductDetails/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <RouterProvider router={router}/>
   </React.StrictMode>,
);