import React from 'react'

export default class dashboardAuth extends React.Component {
constructor(){


   const userID = document.cookie.split(';')[0].split('=')[1];
   if (userID !== 1){
    alert('You are not allowed to view this page!');
    window.location.href = '/login';
   }else{
    window.location.href = '/dashboard'

   }
    
   }
}  

