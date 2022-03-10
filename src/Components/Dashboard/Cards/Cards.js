import React from 'react';
import './Cards.css'

const Cards = () => {
    // Card Content
    const cards = [
        {
            title: "Market Cap (USD)",
            data: "$589,501,773"
        },
        {
            title: "REM Price (USD)",
            data: "$62.72"
        },
        {
            title: "gREM Price (USD)",
            data: "$4,652.57"
        },
        {
            title: "Circulating Supply (total)",
            data: "9398825 / 10312398"
        },
        {
            title: "Backing per REM (USD)",
            data: "$56.40"
        },
        {
            title: "Current Index",
            data: "74.17 sREM"
        },
    ]
    return (
        <>
            <div className="cards_con container-fluid mb-4 px-4 py-2 p-md-0" >
                <div className="row gy-2">
                    {cards.map((curElem, index) => {
                        const { title, data } = curElem
                        return (
                            <div className="col-md-4 mb-3" key={index} id={`card-${index + 1}`}>
                                <div className="cards p-4">
                                    <p className='title text-start'>{title}</p>
                                    <div className="d-flex align-items-center mt-3">
                                        <i class="fa-solid fa-tag"></i>
                                        <div className="text-start">
                                            <p className='fw-600  data'>{data}</p>
                                            <p className='data-info'>compared to ($5,000.00 last year)</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
};

export default Cards;
