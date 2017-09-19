import React, { Component } from 'react';
import bgEarthHorizon from '../assets/bg_earth_horizon.png';
// to do: Create background assets for the parallax

class LandingPage extends Component {


    render() {
        return (
            <div>

                {/* BACKGROUND IMAGE */}
                <section>
                    <div id="parallax-1" class="parallax">
                        <div class="title" class="first">{ <img id='bg-image' height='100%'  width='100%' src={bgEarthHorizon}/> }</div>
                    </div>
                </section>
        
                {/* SCROLLING CONTENT SECTION */}
                <section class="scrolling-content">
                    <div class="content
                    col-sm-4 col-sm-offset-1
                    col-md-4 col-md-offset-1
                    col-lg-4 col-lg-offset-1">

                        
                        <div class="row content nowrap">	
                            

                        </div>

                    </div>

                </section>
        
        
                {/* BACKGROUND IMAGE */}
                <section>
                    <div id="parallax-2" class="parallax">
                        <div class="title">{ <img id='bg-image' height='100%'  width='100%' src={bgEarthHorizon}/> }</div>
                    </div>
                </section>
        
                {/* SCROLLING CONTENT SECTION*/}
                <section class="scrolling-content"></section>
        
                {/* BACKGROUND IMAGE*/}
                <section id="parallax-3" class="parallax">
                    <div class="title"></div>
                </section>
    
            </div>
        );
    }
}

export default LandingPage