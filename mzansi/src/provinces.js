import React, { useEffect, useState } from "react";

import axios from 'axios';

function Provinces() {
    const [provinces, setProvinces] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        setDataLoading(true);

        let url = `provinces.json`;

        axios.get(url)
            .then((response) => {
                setProvinces(response.data);
                setDataLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setDataLoading(false);
            });
    }

    const rowStyle = (index) => {
        var reverseRow = index % 2 === 0 ? "flex-md-row-reverse" : "";
        return "row row-30 " + reverseRow;
    }

    return (
        <div className="bg-akuu" >
            <section className="breadcrumbs-custom bg-image context-dark" >
                <div className="breadcrumbs-custom-inner">
                    <div className="container breadcrumbs-custom-container">
                        <div className="breadcrumbs-custom-main">
                            <h6 className="breadcrumbs-custom-subtitle title-decorated">Provinces</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-md">
                <div className="container">
                    <div class="row">
                        <div class="col-lg-11 col-xl-11">
                            <blockquote class="quote-light">
                                <svg class="quote-light-mark" x="0px" y="0px" width="35px" height="25px" viewBox="0 0 35 25">
                                    <path d="M27.461,10.206h7.5v15h-15v-15L25,0.127h7.5L27.461,10.206z M7.539,10.206h7.5v15h-15v-15L4.961,0.127h7.5L7.539,10.206z"></path>
                                </svg>
                                <div class="quote-light-text">
                                    <p>Since the election of 27 April 1994, South Africa has been divided into nine provinces. </p>
                                </div>
                            </blockquote>

                            <br /><br />
                            {
                                dataLoading ? <p><em>Loading...</em></p> :
                                    provinces != null ? provinces.map((province, index) =>
                                    (
                                        <> <br /> <h6> {index + 1} . {province.name} </h6>
                                            <div class={rowStyle(index)} style={{ padding: "15px" }}>

                                                <div class="col-md-2"><img src={province.image} alt="" width="300" height="300" />
                                                </div>
                                                <div class="col-md-10">
                                                    <p> {province.description}</p>
                                                </div>
                                            </div><hr /></>) 
                                    ) : ""
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Provinces;
