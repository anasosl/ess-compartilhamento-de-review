import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from './App';
import Restaurants from './routes/restaurants/Restaurants'
import RestaurantProfile from './routes/restaurants/RestaurantProfile'
import RestaurantCreate from './routes/restaurants/RestaurantCreate'
import RestaurantUpdate from './routes/restaurants/RestaurantUpdate'
import ErrorPage from './routes/ErrorPage'

import LandingPage from './routes/landingpage/LandingPage'
import Login from './routes/login/login'
import Signup from './routes/signup/Signup'
import UserProfile from './routes/UserProfile';
import UserEdit from './routes/UserEdit';

import UserPage from './routes/UserPage'
import Followers from './routes/Followers'
import Following from './routes/Following' 

import Feed from './routes/feed/Feed'
import SearchResult from './routes/search/SearchResult'

import MyLists from './routes/lists/MyLists';
import ListCreate from './routes/lists/ListCreate';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/restaurants/create",
        element: <RestaurantCreate />
      },
      {
        path: "/restaurants/update/:id",
        element: <RestaurantUpdate />
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantProfile />
      },
      {
        path: "/landingpage",
        element: <LandingPage />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/users/:id",
        element: <UserPage />
      },
      {
        path: "/users/followers/:id",
        element: <Followers />
      },
      {
        path: "/users/following/:id",
        element: <Following />
      },
    ]
  },

  {
    path:"/",
    children: [
      {
        path: "/feed",
        element: <Feed />
      },
      {
        path: "/search/result",
        element: <SearchResult />
      }
    ]
  },
  {
    path:"/",
    children: [
      {
        path: "/users/:id",
        element: <UserProfile />,
      }
    ]
  },
  {
    path:"/",
    children: [
      {
        path: "/users/edit/:id",
        element: <UserEdit />
      }
    ]
  },
  {
    path:"/",
    children:[
      {
        path: "/lists/create",
        element: <ListCreate />,
      },
      {
        path: "/lists",
        element: <MyLists/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
