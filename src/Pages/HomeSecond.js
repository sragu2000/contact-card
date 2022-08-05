import Header from "../Components/Header";
import ContactCard from "../Components/ContactCard";
function HomeSecond() {
    const userData=[
        {"name":"Raguraj", "email":"ragu@mail.com","phone":4568, "website":"ragu.lk"},
        {"name":"Mathesh", "email":"mathesh@mail.com","phone":1234, "website":"mathesh.lk"},
    ];
    return (
        <div>
            <Header></Header>
            {listUsers(userData[0])}
            {listUsers(userData[1])}
        </div>
    );
}

function listUsers(val){
    return(
        <ContactCard 
            name={val.name}
            email={val.email}
            phone={val.phone}
            website={val.website}
        >
        </ContactCard>
    );

}
export default HomeSecond