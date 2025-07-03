import React from 'react'
import FoodList from './components/FoodList'
import Data from './assets/Resources/data'
function App() {
  return (
    <>
     <div class="all-container">
     <header class="title">
        <h1>Evangadi Resturant Menu</h1>
        <div></div>
      </header>
      <div class="foods-container">
{Data.map((menu)=>(

  <FoodList
  // Food={menu}
img={menu.img}
FoodType={menu.title}
price={menu.price}
desc={menu.desc}
link={menu.link}

/>
))}
</div>
</div>
    </>
  )
}

export default App
