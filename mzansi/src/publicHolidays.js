import React, { useEffect, useState } from "react";

import { format } from 'date-fns'
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';

function PublicHolidays() {
    const [holidays, setHolidays] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        setDataLoading(true);

        let currentYear = new Date().getFullYear();;
        let countryCode = "za";
        let url = `https://date.nager.at/api/v3/PublicHolidays/${currentYear}/${countryCode}`;

        axios.get(url)
            .then((response) => {
                console.log(response.data);
                setHolidays(response.data);
                setDataLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setDataLoading(false);
            });
    }

    let columns = [
        {
            dataField: 'date', text: 'Date',
            formatter: (cell) => {
                return format(new Date(cell), 'dd MMMM yyyy');
            }
        },
        { dataField: 'name', text: 'Name' },
        { dataField: 'launchYear', text: 'Launch Year' }
    ];

    return (
        <div className="bg-akuu" >
            <section className="breadcrumbs-custom bg-image context-dark" >
                <div className="breadcrumbs-custom-inner">
                    <div className="container breadcrumbs-custom-container">
                        <div className="breadcrumbs-custom-main">
                            <h6 className="breadcrumbs-custom-subtitle title-decorated">Public Holidays</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-md">
               
                <div className="container">
                    <em>South Africa has 12 public holidays as determined by the Public Holidays Act (Act No 36 of 1994).</em>
                    <span> Below are public holidays for {new Date().getFullYear()}</span> <br /> <br />

                    {
                        dataLoading ? <p><em>Loading...</em></p> :
                            <BootstrapTable keyField='date' data={holidays} columns={columns} />
                    }
                </div>
            </section>
        </div>
    );
}

export default PublicHolidays;
