import React, { Component } from 'react';
import { useEffect,useState } from 'react';
import {searchVideos} from './Vimeo';
import cors from 'cors';
import { Meal } from './meal';





 class Video extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
    }
    async  componentDidMount(){
        const url="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({data:data.meals[0]})
        console.log(data.meals[0]);
    }
    render() {
        return (
         
            <div>
                <div>vimeo video app</div>
                <div><button  >searchVideos</button></div>
          
                
               <div className="app"> 
                </div>
                <div>
               {this.state.data.idMeal}
               </div>
               <div>
               {this.state.data.strCategory}
               </div>
               <div ><img src={this.state.data.strMealThumb}/></div>
               <div>
               {this.state.data.strMeal}
               </div>
            </div>
        )
    }
}



//  async  function getDb(){    
//      const data =  await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then(response=>{return response.json()});
//     //  const data =await response.json();

//         // if(data.meals){
//         //     return data.meals;
//         // }else{
//         //     console.log(console.error());
//         // }
//       console.log(data);
//     //   setdata({data:data.drinks[0]});
    
    
 
// };

// function datasett (){
//     let data =getDb();
//     setdata({data:data.drinks[0]});
// }



 
 //const obj = JSON.parse(data);
 
 


//Authorization	basic base64_encode(x:y) where x is the client ID and y is the client secret
    //function getAccessToken(){
//         fetch("https://api.vimeo.com/oauth/authorize/client", {
//             "method": "POST",
//             "headers": {

// "Authorization":"basic base64_encode(ceac67599d8b06eca3a89905504dcc35a767f2f6:LSA7sjw62dhUz77thA5UYUmjhM6ZsGYoYMUw7IBwkk8lxVmmRxge6OQK0NcoaaPZfGlAemFEWXz) ",
//                 "content-type": "application/json",
//                "Accept": "application/vnd.vimeo.*+json;version=3.4"
//             },
//             "body": {
//                 "grant_type": "client_credentials",
//                 "scope": "public"
//             }
//         })
//         .then(response => {
//             console.log(response);

//         })
//         .catch(err => {
//             console.error(err);
//         });
        
// let response =()=> {fetch("http://vimeo.com/search", {
// 	"method": "POST",
// 	"headers": {
// 		"content-type": "application/x-www-form-urlencoded",
// 		"Access-Control-Allow-Origin": "https://vimeo.com"
// 	},
// 	"body": {
// 		"accessToken": "a9d9783e082f768762814486f81f33c7"
// 	}
// },()=>(cors({
//     "headers": {
// 		"content-type": "application/x-www-form-urlencoded",
// 		"Access-Control-Allow-Origin": "https://vimeo.com"
// 	}
// })))
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
// };

  //const response =searchVideos();
//   {data.meals.map((item)=>{
//     return <div>{item.strMeal}</div>
// })}
// {data.map((item)=>{
//     return <div>{item.strMeal}</div>
// })}


export default Video;
