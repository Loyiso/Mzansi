import React from "react";
import './App.css';

function Home() {
    return (
        <section className="section section-overlap bg-decorate">
            <div className="section-overlap-image" style={{ backgroundImage: 'url(images/screens-1-1046x720.jpg)' }}></div>
            <div className="section-overlap-content">
                <div className="container">
                    <div className="row">

                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <h1 className="wow-outer"><span className="font-weight-bold wow-outer"><span className="wow slideInUp">South Africa</span></span>
                                <span className="font-weight-exlight wow-outer"><span className="wow slideInUp" data-wow-delay=".1s">mzansi</span></span></h1>
                        </div>
                        <div className="col-md-7 col-lg-6 col-xl-5 col-offset-1">
                            <div className="wow-outer">
                                <h4 className="font-weight-light wow slideInUp" data-wow-delay=".2s">
                                    There are three capital cities in South Africa, namely the Executive Capital of <strong>Pretoria</strong>,
                                    the Judicial Capital of <strong>Bloemfontein</strong>, and the Legislative Capital of <strong>Cape Town</strong>.</h4>
                            </div>
                            <div className="wow-outer button-outer"><a className="button button-lg button-primary button-winona wow slideInUp" href="/about" data-wow-delay=".3s">
                                Read More</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
