import React, { useEffect, useState } from 'react';

function Dictionary() {
  const [meanings, setMeanings] = useState();

  useEffect(() => {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
      .then(resp => resp.json())
      .then(data => {
        console.log("API response", data);
        setMeanings(data[0].meanings);
      })
  }, [])

  return (
    <>
    {meanings?.map((meaning, id) => {
      return (
        <h4 key={id}>{meaning.definitions[0].definition}</h4>
      )
    })}
    </>
  );
}

export default Dictionary;

