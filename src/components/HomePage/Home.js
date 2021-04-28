import { Link } from 'react-router-dom';
import './Home.css';
import advertisingCover from '../../img/covers/advertising.jpg' 
import editorialCover from '../../img/covers/editorial.jpg' 
import beautyCover from '../../img/covers/beauty.jpg' 
import groomingCover from '../../img/covers/grooming.png' 
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";

function Home () {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false, 
    });
    AOS.refresh();
  });
  return (
    <>
    <head>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>
    <div id="mainContainer">
        <div id="instagram" data-aos="fade-in">
        <Link to= "/instagram">
          <p>instagram</p>
          </Link>
        </div>
        <div id="sections">  
        
          <div id="editorial" className="boxes" data-aos="fade-down">
            {/* <img src="http://sofirub.com/wp-content/uploads/2020/11/verasi.001.jpeg" alt="Avatar" class="image" /> */}
            <img  src={editorialCover} alt="cover" className="image" />
            <div className="image"></div>
              <Link to= "/editorial">
                <div class="overlay">
                  <div class="text">Editorial</div>
                </div>
              </Link>
            </div>

          <div id="beauty" className="boxes" data-aos="fade-left">
            {/* <img src="http://sofirub.com/wp-content/uploads/2020/05/EDIT-NANCY-2.jpg" alt="Avatar" class="image"/> */}
            <img  src={beautyCover} alt="cover" className="image" />
            <Link to= "/beauty">
              <div class="overlay">
                <div class="text">Beauty</div>
              </div>
            </Link>
          </div>
          <div id="grooming" className="boxes" data-aos="fade-up">
            {/* <img src="http://sofirub.com/wp-content/uploads/2020/03/FW20-07.png" alt="Avatar" class="image"/> */}
            <img  src={groomingCover} alt="cover" className="image" />
            <div class="overlay">
              <div class="text">Grooming</div>
            </div>
          </div>
          <div id="advertising" className="boxes" data-aos="fade-left">
          {/* <img src="http://sofirub.com/wp-content/uploads/2019/05/23-1100x734.jpg" alt="Avatar" class="image"/> */}
          <img  src={advertisingCover} alt="cover" className="image" />
            <div class="overlay">
              <div class="text">Advertising</div>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Home;