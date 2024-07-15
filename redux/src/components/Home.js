import React from "react";
import { FaCartPlus } from "react-icons/fa";
function Home(){
    return(
        <div >
            <div className="home-firstdiv">
                <div className="text-home">Home Component</div>
                <div className="add-to-cart">{<FaCartPlus/>}</div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://uploads.tapatalk-cdn.com/20180121/30a10cb3f7febc8cf7f6a30a675fb3f9.jpg"/>
                </div>
                <div className="text-wrapper item">
                    Iphone Price: $1000.00
                </div>
                <div className="btn-wrapper item">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home