import React from 'react'

import './Body.css'

function Body() {
    return (
        <div>
        
        <h2 className="displayItems">All Oval Items. <span className="spanNotBold"> (6)</span></h2>
        <div className="outterCard">
        <div className="card">
        <div className="ellipseRed">
        </div>
        </div>

        <div className="card">
        <div className="ellipseBlue">
        </div>
        </div>

        <div className="card">
        <div className="ellipseGreen">
        </div>
        </div>

        <div className="card">
        <div className="ellipseYellow">
        </div>
        </div>

        <div className="card">
        <div className="ellipseLightBlue">
        </div>
        </div>

        <div className="card">
        <div className="ellipseGray">
        </div>
        </div>


        </div>
        </div>
    )
}

export default Body
