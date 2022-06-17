
import React, { useEffect, useState } from 'react'
import { Show } from './Show';
// import '../css/Search.css';
import logo from '../../src/wiki-logo.png'
import "../App.css";
export default function Search() {
const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";
const [query, setQuery] = React.useState('wiki');
const [articles, setArticles] = React.useState([{title:"",snippet:"",pageid:0}]);
const [error, setError] = useState(false);
const handleSubmit =(e)=> {
 e.preventDefault();
  setQuery(e.target.value); 
 fetchResults(query);
 
}
useEffect(()=> {
 fetchResults(query);
},[])
const fetchResults = async (searchInput) => {
  try{
   const response = await fetch(`${url}${searchInput}`);
        const data = await response.json();
        console.log(data);
        const result = data.query.search;
        console.log(result);
        if(result.length < 1) {
          setError(true)
          return;
        }
        setArticles(result); 
  } catch(error){
    setError(true);
  }
}

  return (
    <>
      <div className='search'>
        <div className='wikipedia'>
          <img src={logo} alt="name" />
          
          <form className='form'>
            <label htmlFor='search'>search</label>
            <input
              type='text'
              name='search'
              id='search'
              className='input'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button className='input-submit' onClick={handleSubmit}>
              Search Wiki
            </button>
          </form>
        </div>

        <div className='result'>
          {articles.map((article) => {
            return <Show key={article.pageid} article={article} />;
          })}
          {error && <div>Error </div>}
        </div>
      </div>
    </>
  );
}
