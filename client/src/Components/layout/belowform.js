import React from 'react';
import four from '../../img/4.svg'
import five from '../../img/5.svg'
import six from '../../img/6.svg'
import seven from '../../img/7.svg'
import eight from '../../img/8.png'
import ninth from '../../img/9.svg'
import tenth from '../../img/10.svg'



const ImageGrid = () => {
    return (
        <div className="container mt-3">
            <div className="row mb-3">


                <div className="col-md-6 col-sm-12 mb-3">
                    <img src={seven} alt="Image 4" className="img-fluid" />
                </div>
                <div className="col-md-6 col-sm-12 mb-3">
                    <img src={eight} alt="Image 5" className="img-fluid" />
                </div>
                <div className="col-md-6 col-sm-12 mb-3">
                    <img src={ninth} alt="Image 6" className="img-fluid" />
                </div>
                <div className="col-md-6 col-sm-12 mb-3">
                    <img src={tenth} alt="Image 6" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default ImageGrid;
