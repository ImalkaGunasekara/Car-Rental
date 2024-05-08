import React from "react";
//Navbar.js not used

function App() {
  return (
    <div>
    {/* <!-- Header --> */}
    <header>
        <a href="#" className="logo"><img src="img/logo.png" alt="" /></a>

        <div className="bx bx-menu" id="menu-icon"></div>

        <ul className="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#ride">Ride</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#reviews">Reviews</a></li>
        </ul>
        <div className="header-btn">
            
            <a href="#" className="sign-in">Sign In</a>
        </div>
    </header>
    {/* <!-- Home --> */}
    <section className="home" id="home">
        <div className="text">
            <h1><span>Looking</span> to <br/>rent a car</h1>
            <p>Lorem ipsum dolor sit amet consectetur adi <br/> pisicing elit. Fuga, ut qui.</p>
            <div className="app-stores">
                <img src="img/ios.png" alt=""/>
                <img src="img/512x512.png" alt=""/>
            </div>
        </div>

        <div className="form-container">
            <form action="">
                <div className="input-box">
                    <span>Location</span>
                    <input type="search" name="" id="" placeholder="Search Places"/>
                </div>
                <div className="input-box">
                    <span>Pick-Up Date</span>
                    <input type="date" name="" id=""/>
                </div>
                <div className="input-box">
                    <span>Return Date</span>
                    <input type="date" name="" id=""/>
                </div>
                <input type="submit" name="" id="" className="btn"/>
            </form>
        </div>
    </section>
    {/* <!-- Ride --> */}
    <section className="ride" id="ride">
        <div className="heading">
            <span>How Its Work</span>
            <h1>Rent With 3 Easy Steps</h1>
        </div>
        <div className="ride-container">
            <div className="box">
                <i className='bx bxs-map'></i>
                <h2>Choose A Location</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quis, quia exercitationem dolores assumenda doloribus?</p>
            </div>

            <div className="box">
                <i className='bx bxs-calendar-check' ></i>
                <h2>Pick-Up Date</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quis, quia exercitationem dolores assumenda doloribus?</p>
            </div>

            <div className="box">
                <i className='bx bxs-calendar-star'></i>
                <h2>Book A Car</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quis, quia exercitationem dolores assumenda doloribus?</p>
            </div>
        </div>
    </section>
    {/* <!-- Services --> */}
    <section className="services" id="services">
        <div className="heading">
            <span>Best Services</span>
            <h1>Explore Out Top Deals <br/> From Top Rated Dealers</h1>
        </div>
        <div className="services-container">
            <div className="box">
                <div className="box-img">
                    <img src="img/car1.jpg" alt=""/>
                </div>
                <p>2017</p>
                <h3>2018 Honda Civic</h3>
                <h2>$58500 | $358 <span>/month</span></h2>
                <a href="#" className="btn">Rent Now</a>
            </div>

            <div className="box">
                <div className="box-img">
                    <img src="img/car2.jpg" alt=""/>
                </div>
                <p>2017</p>
                <h3>2018 Honda Civic</h3>
                <h2>$58500 | $358 <span>/month</span></h2>
                <a href="#" className="btn">Rent Now</a>
            </div>

            <div className="box">
                <div className="box-img">
                    <img src="img/car3.jpg" alt=""/>
                </div>
                <p>2017</p>
                <h3>2018 Honda Civic</h3>
                <h2>$58500 | $358 <span>/month</span></h2>
                <a href="#" className="btn">Rent Now</a>
            </div>

            <div className="box">
                <div className="box-img">
                    <img src="img/car4.jpg" alt=""/>
                </div>
                <p>2017</p>
                <h3>2018 Honda Civic</h3>
                <h2>$58500 | $358 <span>/month</span></h2>
                <a href="#" className="btn">Rent Now</a>
            </div>

            <div className="box">
                <div className="box-img">
                    <img src="img/car5.jpg" alt=""/>
                </div>
                <p>2017</p>
                <h3>2018 Honda Civic</h3>
                <h2>$58500 | $358 <span>/month</span></h2>
                <a href="#" className="btn">Rent Now</a>
            </div>

            <div className="box">
                <div className="box-img">
                    <img src="img/car6.jpg" alt=""/>
                </div>
                <p>2017</p>
                <h3>2018 Honda Civic</h3>
                <h2>$58500 | $358 <span>/month</span></h2>
                <a href="#" className="btn">Rent Now</a>
            </div>
        </div>
    </section>
    {/* <!-- About --> */}
    <section className="about" id="about">
        <div className="heading">
            <span>About Us</span>
            <h1>Best Customer Experience</h1>
        </div>
        <div className="about-container">
            <div className="about-img">
                <img src="img/about.png" alt=""/>
            </div>
            <div className="about-text">
                <span>About Us</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit optio consectetur voluptate repellat. Nulla harum ipsa nihil voluptate iste omnis distinctio maiores iure voluptatem consequatur rerum quidem asperiores eaque at animi, optio hic?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore aliquam dicta quam est totam porro repellat iste.</p>
                <a href="#" className="btn">Learn More</a>
            </div>
        </div>
    </section>
    {/* <!-- Reviews --> */}
    <section className="reviews" id="reviews">
        <div className="heading">
            <span>Reviews</span>
            <h1>Whats Our Customer Say</h1>
        </div>
        <div className="reviews-container">
            <div className="box">
                <div className="rev-img">
                    <img src="img/rev1.jpg" alt=""/>
                </div>
                <h2>Someone Name</h2>
                <div className="stars">
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star-half' ></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis amet quibusdam similique doloremque consequatur cupiditate repudiandae voluptatum nam!</p>
            </div>

            <div className="box">
                <div className="rev-img">
                    <img src="img/rev2.jpg" alt=""/>
                </div>
                <h2>Someone Name</h2>
                <div className="stars">
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star-half' ></i>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem minima at fugiat totam labore voluptatum ipsum veritatis sunt!</p>
            </div>

            <div className="box">
                <div className="rev-img">
                    <img src="img/rev3.jpg" alt=""/>
                </div>
                <h2>Someone Name</h2>
                <div className="stars">
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star-half' ></i>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo voluptate beatae sed earum officiis pariatur perferendis adipisci iusto.</p>
            </div>
        </div>
    </section>
    {/* <!-- Nwsletter --> */}
    
    <div className="copyright">
        <p>&#169; EIE Group</p>
        <div className="social">
            <a href="#"><i className='bx bxl-facebook' ></i></a>
            <a href="#"><i className='bx bxl-twitter' ></i></a>
            <a href="#"><i className='bx bxl-instagram' ></i></a>
        </div>
    </div>


</div>
  );
}

export default App;
