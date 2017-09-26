import React, { Component } from 'react';
import bgEarthHorizon from '../assets/bg_earth_orbit_loop.mp4';
// to do: Create background assets for the parallax

class LandingPage extends Component {


    render() {
        return (
            <div>

                {/* BACKGROUND IMAGE */}
                <section>
                    <div id="parallax-1" className="parallax">
                        <div className="title" className="first">{ <video autoPlay={true} loop id="bgvid" width="100%" height="100%">
            <source src={ bgEarthHorizon } type="video/mp4">  
            </source>
          </video> }</div>
                    </div>
                </section>
        
                {/* SCROLLING CONTENT SECTION */}
                <section className="scrolling-content">
                    <div className="content
                    col-sm-4 col-sm-offset-1
                    col-md-4 col-md-offset-1
                    col-lg-4 col-lg-offset-1">
                    

                        
                        <div className="row content nowrap">	
                            

                        </div>

                    </div>

                </section>
        
        
                {/* BACKGROUND IMAGE */}
                <section>
                    <div id="parallax-2" className="parallax">
                        <div className="title">{ <img id='bg-image' height='100%'  width='100%' src={bgEarthHorizon}/> }</div>
                    </div>
                </section>
        
                {/* SCROLLING CONTENT SECTION*/}
                <section className="scrolling-content"></section>
        
                {/* BACKGROUND IMAGE*/}
                <section id="parallax-3" className="parallax">
                    <div className="title"></div>
                </section>
    
            </div>
        );
    }
}

export default LandingPage