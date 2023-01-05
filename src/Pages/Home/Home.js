import React from 'react'
import './Home.css'
import imgHomeShop from './home-bg.png'

export default function Home() {
    return (
        <div className="global-container">
            <h1 className="home-title">
                Bienvenue au <span>Shop</span>
            </h1>
            <p>Bienvenue sur notre boutique en ligne ! Nous proposons une large gamme d'objets personnalisés aux couleurs de vos collections NFT préférées. <br></br><br></br>Que vous soyez 'holder' ou simplement à la recherche de cadeaux originaux, vous trouverez forcément quelque chose qui vous plaira parmi notre sélection de produits uniques et de qualité.<br></br><br></br>Parce que le monde des NFTs n'est pas que digital !</p>
            <img src={imgHomeShop} alt="accueil shop" />
        </div>
    )
}
