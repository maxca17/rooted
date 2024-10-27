"use client";

import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const QuoteCarousel: React.FC = () => {
  return (
    <MDBCarousel showControls showIndicators dark>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
      >
        {/* First Slide Content */}
        <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
          <div className="text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle mb-4 shadow-2"
              alt="woman avatar"
              width="90"
              height="90"
            />
            <p className="font-italic">
              <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <h5 className="mb-0">Miranda Smith</h5>
            <p className="text-muted mb-0">The Guardian</p>
          </div>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
      >
        {/* Second Slide Content */}
        <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
          <div className="text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="rounded-circle mb-4 shadow-2"
              alt="woman avatar"
              width="90"
              height="90"
            />
            <p className="font-italic">
              <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
            <h5 className="mb-0">Annie Hall</h5>
            <p className="text-muted mb-0">New York Times</p>
          </div>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
      >
        {/* Third Slide Content */}
        <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
          <div className="text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              className="rounded-circle mb-4 shadow-2"
              alt="woman avatar"
              width="90"
              height="90"
            />
            <p className="font-italic">
              <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
              At vero eos et accusamus et iusto odio dignissimos qui.
            </p>
            <h5 className="mb-0">Jason More</h5>
            <p className="text-muted mb-0">Smash Magazine</p>
          </div>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  );
};

//export default QuoteCarousel;
