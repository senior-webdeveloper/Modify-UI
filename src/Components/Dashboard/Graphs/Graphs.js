import React, { useState } from 'react';
import './Graphs.css';
///Import Charts
import Chart01 from './Charts/Chart01';
import Chart02 from './Charts/Chart02';
import Line01 from './Charts/Line01';


const Graphs = () => {
    const [chart, setChart] = useState(false);

    const handelClick = (type) => {
        setChart(type)
    }
    const getChart = () => {
        if (chart == "Chart01") {
            return <Chart01 />
        } else if (chart == "Chart02") {
            return <Chart02 />
        } else if (chart == "Line01") {
            return <Line01 />
        }else{
            return <Chart01 />
        }
    }
    return (
        <>
            <div className="company-graph cards mb-5 p-4 ">
                <div className="text-start w-100 d-flex align-items-center mb-3 ">
                    <i className="fa-solid fa-receipt" style={{ color: "#ffffff" }}></i>
                    <div>
                        <h5 className='fw-600'>lorem ipsum</h5>
                        <p>lorem</p>
                    </div>
                </div>
                <div className="container-fluid p-0 m-0 ">
                    <div className="row p-0 m-0">
                        <div className="col-lg-2 d-flex flex-column align-items-lg-center justify-content-between" >
                            <div className="company-card my-4" id='company-1' onClick={() => handelClick('Chart01')}>
                                <p>Market Cap</p>
                            </div>
                            <div className="company-card my-4" id='company-2' onClick={() => handelClick('Chart02')}>
                                <p>REM Price</p>
                            </div>
                            <div className="company-card my-4" id='company-3' onClick={() => handelClick('Line01')}>
                                <p>gREM Price</p>
                            </div>
                        </div>
                        <div className="col-lg-8 d-flex align-items-lg-center justify-content-center" >
                            {getChart()}
                        </div>
                        <div className="col-lg-2 d-flex flex-column align-items-lg-center justify-content-between" >
                            <div className="company-card  my-4" id='company-1' onClick={() => handelClick('Chart01')}>
                                <p>Total Supply </p>
                            </div>
                            <div className="company-card  my-4" id='company-2' onClick={() => handelClick('Chart02')}>
                                <p>Backing per REM </p>
                            </div>
                            <div className="company-card  my-4" id='company-3' onClick={() => handelClick('Line01')}>
                                <p>Current Index</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Graphs;
