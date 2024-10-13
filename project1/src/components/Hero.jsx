 
const Hero = () =>
{
    return(
        <div className="Hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button>
                        Shop Now
                    </button>
                    <button className="secondary btn">
                        Category
                    </button>
                </div>
                <div className="shopping">
                    <p>Also Available on</p>
                    <div className="brand">
                        <img src="/images/flipkart.png" alt="flipkart" />
                        <img src="/images/amazon.png" alt="amazon" />
                    </div>
                </div>
            </div>

            <div className="hero-img">
                <img src="/images/shoe_image.png" alt="" />
            </div>
            
        </div>
    )
}

export default Hero;