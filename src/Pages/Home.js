import Header from "../Components/Header";
import ContactCard from "../Components/ContactCard";
function Home() {
  return (
    <div>
        <Header></Header>
        <ContactCard 
            name="Raguraj" 
            email="s.s.raguraj@gmail.com" 
            phone="1111111111" 
            website="ragu.lk">
        </ContactCard>
        <ContactCard 
            name="Mathesh" 
            email="mathesh@gmail.com" 
            phone="0000000000" 
            website="mathesh.lk">
        </ContactCard>
    </div>
  );
}
export default Home