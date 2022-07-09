import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import './App.css';
import Card from './Components/Card'
import data from './Components/data'
console.log(data)
export default function App() {

   
   
   
const cards = data.map(item => {
return (

   
   <Card 
       img={item.coverImg}
       rating={item.stats.rating}
       reviewCount={item.stats.reviewCount}
       location={item.location}
       title={item.title}
       price={item.price}
   />
)
})        

return (
<div>
   
 <Navbar/>
 <Hero/>
   {cards}
</div>
)

}