import React from 'react'
import './Home.css'
import gsap from 'gsap'
import imgHomeShop from './Images/home-bgbis.png'
import image1 from './Images/2713.png'
import image2 from './Images/1875.jpeg'
import image3 from './Images/retrogoon.png'
import image4 from './Images/jikan.png'
import image5 from './Images/5215.png';



function Home() {

  const items = document.querySelectorAll('.item')

  const expand = (item, i) => {
    items.forEach((it, ind) => {
      if (i === ind) return
      it.clicked = false
    })
    gsap.to(items, {
      width: item.clicked ? '15vw' : '8vw',
      duration: 2,
      ease: 'elastic(1, .6)'
    })
    
    item.clicked = !item.clicked
    gsap.to(item, {
      width: item.clicked ? '42vw' : '15vw',
      duration: 2.5,
      ease: 'elastic(1, .3)'
    })
  }

  items.forEach((item, i) => {
    item.clicked = false
    item.addEventListener('click', () => expand(item, i))
  })

  return (
    <div className="global-container">
      <div className="banner">
        <img src={imgHomeShop} alt="accueil shop" />
        <button>Start Now</button>
      </div>
      <div className="accordeon">
        <div class="group">
          <div className="item" style={{backgroundImage: `url(${image1})`}}></div>
          <div className="item" style={{backgroundImage: `url(${image2})`}}></div>
          <div className="item" style={{backgroundImage: `url(${image3})`}}></div>
          <div className="item" style={{backgroundImage: `url(${image4})`}}></div>
          <div className="item" style={{backgroundImage: `url(${image5})`}}></div>
        </div>
      </div>
      <div className="featured-collections">
        <h2>Featured Collection</h2>
        <div className="collection">
          <div class="wrapper">
            <div class="grid grid-col-4">
              <div class="card--mod-19">
                  <img class="card__cover" src="https://pbs.twimg.com/profile_images/1565798838446788612/L7rRq666_400x400.jpg" alt="" title=""/>
                  <h2 class="card__title">Degen Dummies</h2>
              </div>
              <div class="card--mod-19">
                  <img class="card__cover" src="https://pbs.twimg.com/profile_images/1433087419046367235/uFYaQEsU_400x400.jpg" alt="" title=""/>
                  <h2 class="card__title">Famous Fox Federation</h2>
              </div>
              <div class="card--mod-19">
                  <img class="card__cover" src="https://pbs.twimg.com/profile_images/1589726014640427014/a-iY-PZO_400x400.jpg" alt="" title=""/>
                  <h2 class="card__title">Ghost Kid DAO</h2>
              </div>
              <div class="card--mod-19">
                  <img class="card__cover" src="https://pbs.twimg.com/profile_images/1609189114473070593/r7AxQyT3_400x400.jpg" alt="" title=""/>
                  <h2 class="card__title">Retro Goons</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-products">
        <h2>Custom Products</h2>
        
      </div>
    </div>
  )
}

  
export default Home;