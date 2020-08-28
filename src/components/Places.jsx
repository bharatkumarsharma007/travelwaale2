import React from 'react';
import Card from './Card';
import Pdata from './Pdata';

const Places = () => {
    return(
        <>
        <div className="my-5 text-center">
            <h1>Most Beautiful Places</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            Pdata.map((val, ind) => {
                                return <Card key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    sdescription={val.sdescription}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Places;