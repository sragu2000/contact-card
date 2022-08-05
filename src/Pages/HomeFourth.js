import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import ContactCard from "../Components/ContactCard";
function HomeFourth() {
  const [data, setValue] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((jsonData) => {setValue(jsonData);})
      .catch((error) => { console.error(error) })
  },[]);
  return (
    <div>
      <Header></Header>
      {
        data.map((val)=>{
          return(<ContactCard key={val.phone} name={val.name} email={val.email} phone={val.phone} website={val.website}></ContactCard>);
      })
      }
    </div>
  );
}

export default HomeFourth