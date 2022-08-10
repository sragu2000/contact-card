import Header from "../Components/Header";
import ContactCard from "../Components/ContactCard";
import React from "react";
function HomeThird() {
    const userData=[
        {"name":"Raguraj", "email":"ragu@mail.com","phone":4568, "website":"ragu.lk"},
        {"name":"Mathesh", "email":"mathesh@mail.com","phone":1234, "website":"mathesh.lk"},
    ];
    console.log(userData);
    return (
        <div>
            <Header></Header>
            {
                userData.map((val)=>{
                    return(<ContactCard key={val.phone} name={val.name} email={val.email} phone={val.phone} website={val.website}></ContactCard>);
                })
            }
        </div>
    );
}

// function listUsers(data){
//     var a=data.map((val)=>{
//         return(<ContactCard key={val.phone} name={val.name} email={val.email} phone={val.phone} website={val.website}></ContactCard>);
//     });
//     return a;
// }

export default HomeThird