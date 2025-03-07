import React from 'react'
import './styleCom.css'

export const HeaderCom = () => {
    return (

        <div className='header-obsh'>
            <div className='header'>
                <h1 className='header-title'>C:\Users\Web{'>'} color a</h1>
                <h1 className='header-title'>C:\Users\Web{'>'} Greetings! I'm Asad, a front-end developer...</h1>
                <h1 className='header-title'>And there is your IP adress if you didn't know :3... <br /> IP: 61.85.883.098</h1>
            </div>

            <div className='header'>
                <h2 className='header-title'>Here are my mini projects... of course this is not all of them... Hope you like it!</h2>
                <div className="cards">
                    <div className='card'>
                        <img src="https://about-asad.netlify.app/static/media/Screenshot%202024-06-06%20155702.10403a103c36785edcb7.webp" alt="" className="card-img" />
                        <p className='card-title'>Water Pump Project</p>
                    </div>
                    <div className='card'>
                        <img src="https://about-asad.netlify.app/static/media/Screenshot%202024-06-06%20155652.f83af5d1dbaae789a0ed.webp" alt="" className="card-img" />
                        <p className='card-title'>Calculator Project</p>
                    </div>
                    <div className='card'>
                        <img src="https://about-asad.netlify.app/static/media/Screenshot%202024-06-06%20155751.3875ffb5595d2cddd43f.webp" alt="" className="card-img" />
                        <p className='card-title'>Game Store Project</p>
                    </div>
                    <div className='card'>
                        <img src="https://about-asad.netlify.app/static/media/Screenshot%202024-06-06%20155715.bb143c3fff105fd11ce2.webp" alt="" className="card-img" />
                        <p className='card-title'>Fake Store Project</p>
                    </div>
                    <div className='card'>
                        <img src="https://about-asad.netlify.app/static/media/Screenshot%202024-06-06%20155808.1fb46cc479059ed80688.webp" alt="" className="card-img" />
                        <p className='card-title'>Carting Project</p>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default HeaderCom