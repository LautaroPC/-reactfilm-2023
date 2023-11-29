import React from 'react'
import { useAuth } from '../../../core/auth/hooks/use_auth';



const HomeView = () => {
  const { logout } = useAuth();

return (
    <div>
      <h1>ReactFilm</h1>
      <button onClick={logout}>cerrar sesion</button>
      
    </div>
  );
}

export default HomeView;



/*
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../core/auth/hooks/use_auth';
import axios from 'axios';

const HomeView = () => {
  
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const response = await jsonPlaceHolderApi.get("/users");

    setData(response.data);
  } 

  return (
    <>
      <
      <div>USERS</div>
      <button onClick={()=>{getUsers();}}>Get users</button>
      {
        data?.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))
      } 
      
    </>
  );
}

export default HomeView;

const jsonPlaceHolderApi = axios.create({
  baseURL:"https://jsonplaceholder.typicode.com",
  timeout: 3000,
})

axios.interceptors.request.use(
  async (config) => {
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
); */
