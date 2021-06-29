import React from 'react'
import Header from '../header/Header'
import '../body/Body.css'

function Filters() {
    return (
        <div>
        <Header/>
        <h3 className="filterMain">Filters</h3>
        <span className= "shapesMain">Shapes</span>
        <div className="rowShapes">
        <button className="buttonMain">All</button>
        <button className="buttonMain">Oval</button>
        <button className="buttonMain">Round</button>
        <button className="buttonMain">Triangle</button>
        <button className="buttonMain">Square</button>
        <button className="buttonMain">Rectangle</button>
        </div>

        <span className="colorMain">Colors</span>
        <div className="circle">
        <div className="circleMain"> All</div>
        <div className="circleRed"></div>
        <div className="circleBlue"></div>
        <div className="circleGreen"></div>
        <div className="circleYellow"></div>
        <div className="circleLightBlue"></div>
        <div className="circleGray"></div>
        </div>
        </div>
    )
}

export default Filters
