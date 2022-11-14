import React, { useEffect, useState } from "react";

import { format } from 'date-fns'
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';

function About() {
    const [southAfrica, setData] = useState(null);
    const [dataLoading, setDataLoading] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        setDataLoading(true);

        let url = `https://restcountries.com/v3.1/name/south%20africa`;

        axios.get(url)
            .then((response) => {
                console.log();

                var languages = [];

                for (const key in response.data[0].languages) {
                    if (response.data[0].languages.hasOwnProperty(key)) {
                        languages.push(response.data[0].languages[key]);
                    }
                }

                response.data[0].languages = languages;

                setData(response.data[0]);
                setDataLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setDataLoading(false);
            });
    }


    return (
        <div className="bg-akuu" >
            <section className="breadcrumbs-custom bg-image context-dark" >
                <div className="breadcrumbs-custom-inner">
                    <div className="container breadcrumbs-custom-container">
                        <div className="breadcrumbs-custom-main">
                            <h6 className="breadcrumbs-custom-subtitle title-decorated">About- South Africa</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-md">
                <div className="container">
                    {
                        dataLoading && southAfrica != null ? <p>< em > Loading...</em></p> :
                            <article className="profile-modern">
                                <div className="profile-modern-figure" style={{ border: '1px solid rgba(0, 0, 0, 0.5)', padding:"15px" }}>
                                    <img className="profile-modern-image" src={southAfrica != null ? southAfrica.flags.png : "images/team-1-336x336.jpg"} alt="" width="336" height="336" />
                                    <br /> <hr />
                                    <p>The flag of <strong>South Africa</strong> was designed in March 1994 and adopted on 27 April 1994, at the beginning of South Africa's 1994 general election,
                                        to replace the flag that had been used since 1928.
                                    </p>
                                    <p>
                                        Individually the six colors of the <strong>South Africa</strong> flag have no meaning, but black, yellow and green stand for the
                                        <strong>African National Congress</strong>, whereas red,
                                        white and blue represent colonial European flags and those of historical Boer republics.
                                    </p>
                                </div>
                                <div className="profile-modern-main">
                                    <div className="row row-30">
                                        <div className="col-lg-12">
                                            <p>
                                                <strong>South Africa</strong>, officially the Republic of South Africa (RSA), is the southernmost country in Africa.
                                                <strong> Borders:</strong> {
                                                    southAfrica != null ? southAfrica.borders.map(d => (<>{d},</>)) : ""
                                                }
                                            </p>
                                        </div>
                                        <div className="col-lg-10">
                                            <h3>Languages </h3>
                                            <p>
                                                <strong>South Africa</strong> is one of the most diverse in the world.The population of South Africa is composed of people from different backgrounds, speaking different languages.
                                            </p>
                                            <hr />
                                            {
                                                southAfrica != null ? southAfrica.languages.map(d => (<p >{d}</p>)) : ""
                                            }
                                        </div>

                                        <div className="col-lg-10">
                                            <h3>Capital </h3>
                                            <p>
                                                Legally, <strong>South Africa</strong> does not have one specific national capital. The government is divided into three branches, namely the legislative, executive, and judicial.
                                                Each branch is administered from a different city.
                                            </p>

                                            <hr />
                                            {
                                                southAfrica != null ? southAfrica.capital.map(d => (<p >{d}</p>)) : ""
                                            }
                                        </div>
                                    </div>
                                </div>
                            </article>
                    }
                </div>
            </section>
        </div>
    );
}

export default About;
