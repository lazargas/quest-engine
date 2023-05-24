import axios from 'axios';
import { headers } from 'next.config';

const url = 'http://localhost:3001';

export const addUser = async (data) => {
    try{
        let response = await axios.post(`${url}/referrals`, data);
        return response.data;

    }catch(error){
        console.log('akarsh');
    }
}

export const getUser = async () =>{
   try{
       let res = await axios.get(`https://api.twitter.com/2/users/by/username/akarshs97171806`, {headers:{
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'application/x-www-form-urlencoded',
        Authorization:`Bearer AAAAAAAAAAAAAAAAAAAAAIhWlQEAAAAApyBfg3njnHpB2fKr31h%2BOOuSe9U%3DBFvNxG1lMfMdi7rRboaY0fwyqnNUQGFfKZHduKmty3WUWFKB03`
       }})
       return res.data;
   }catch(error){
    console.log(error.message);
   }
}

export const getLeaderboard = async () => {
  try{
      let res = await axios.get(`${url}/referrals`);
      return res.data;
  }catch(error){

  }
}



// export const getLink = async (data) => {
//     try{
//         let response = await axios.post(`${url}/referrals`, data);
//         console.log(response.data);
//         return response.data;
//     }catch(error){
//         console.log(error.message);
//     }
// }