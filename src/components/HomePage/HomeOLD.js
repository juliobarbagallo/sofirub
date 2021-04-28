import {
  Box,
  Container,
  Image,
  Badge,
  SimpleGrid

} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'

import './Home.css';

function Home () {

    
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  return (
    <>
    <head>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
 </head>
    <div id="mainContainer">
        <div id="instagram">
          <p>instagram</p>
        </div>
        <div id="sections">  
          <div className="boxes column">
            <div>
              <figure><img src="https://picsum.photos/300/200?image=244" /></figure>
              <span>Hover</span>
            </div>
          </div>
          <div className="boxes column"></div>
          <div className="boxes column"></div>
          <div className="boxes column"></div>
        </div>
    </div>
    </>
  );
}

export default Home;