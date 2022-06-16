
import React from 'react';
import { useState,useEffect } from 'react';


function Videofunction() {
    const [data, setData] = useState([{}]);
    
    async    function loadComponent(){
        const url="https://www.theaudiodb.com/api/v1/json/1/artist.php?i=112024";
          //  const url ="https://www.themealdb.com/api/json/v1/1/search.php?f=a";
        const response =await fetch(url);
        const data = await response.json();
        setData(data.artists);
        console.log(data.artists);
        };
        // async    function loadComponent(){
        //     const url ="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";
        // const response =await fetch(url);
        // const data = await response.json();
        // setData(data.meals[0]);
        // console.log(data.meals[0]);
        // };
    //    useEffect(() => {
    //     const url ="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";
    //        fetch(url).then(response=>{return response.json()}).then(data=>setData(data));
    //        return () => {
               
    //        }
    //    }, [])
    return (
        <div>
            HIIIIIIIIIIIIIII
            <button onClick={loadComponent}>state</button>
            {/* { <div>{data.strArtist}</div>
            <div>
               {data.intFormedYear}
               </div>
               <div ><img src={data.strArtistBanner}/></div>
               <div>
               {data.strArtistLogo}
               </div>  */}

              { data.map(item=>{return <div>
                   <div>{item.strArtist}</div>
               <div>
                  {item.intFormedYear}
                  </div>
                  <div ><img src={item.strArtistBanner}/></div>
                  <div>
                  {item.strBiographyDE}
                  </div>
                  </div>})
               }
             
        </div>
    )
}

export default Videofunction;
