import React from 'react';
import {
  Grid,
  Carousel,
  Button
} from 'react-bootstrap';

const HeaderCarousel = () =>
<Grid>
  <Carousel indicators={false}>
  <Carousel.Item>
    <img alt="Sobmbr Studio - Perfect Wave" src="/images/carousel/header-bracelet.jpg" />
    <Carousel.Caption>
      <h1 className="display-1">More than a piece of Jewelry</h1>
      <Button bsSize="large" bsStyle="warning">Learn More</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img alt="Sobmbr Studio - Pendants" src="/images/carousel/atomic-daisy-bracelet.jpg" />
    <Carousel.Caption>
      <h1 className="display-1">Atomic Flower</h1>
      <p>a flower for any occasion</p>
      <Button bsSize="large" bsStyle="warning">Learn More</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img alt="Sobmbr Studio - Bracelets" src="/images/carousel/two-paths.jpg" />
    <Carousel.Caption>
      <h1 className="display-1">Two Paths</h1>
      <p>on the path of life choices made determine the roads taken</p>
      <Button bsSize="large" bsStyle="warning">Learn More</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img alt="Sobmbr Studio - Bracelets" src="/images/carousel/four-directions.jpg" />
    <Carousel.Caption>
      <h1 className="display-1">Four Directions</h1>
      <p>where will the road take you?</p>
      <Button bsSize="large" bsStyle="warning">Learn More</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img alt="Air Cooled Original" src="/images/carousel/air-cooled-original.jpg" />
    <Carousel.Caption>
      <h1 className="display-1">Air Cooled Original</h1>
      <p>state of mind</p>
      <Button bsSize="large" bsStyle="warning">Learn More</Button>
    </Carousel.Caption>
  </Carousel.Item>

 </Carousel>
</Grid>

export default HeaderCarousel;