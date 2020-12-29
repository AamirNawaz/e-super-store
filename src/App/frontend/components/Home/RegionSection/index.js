import React from 'react'

import chinaFlag from '../../../../assets/images/icons/flags/CN.png';
import germanyFlag from '../../../../assets/images/icons/flags/DE.png';
import austrilliaFlag from '../../../../assets/images/icons/flags/AU.png';
import russiaFlag from '../../../../assets/images/icons/flags/RU.png';
import indiaFlag from '../../../../assets/images/icons/flags/IN.png';
import gbFlag from '../../../../assets/images/icons/flags/GB.png';
import turkeyFlag from '../../../../assets/images/icons/flags/TR.png';
import uzFlag from '../../../../assets/images/icons/flags/UZ.png';


export default function index() {
    return (
        <React.Fragment>

            <section className="padding-bottom">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Choose region</h4>
                </header>
                <ul className="row mt-4">
                    <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={chinaFlag} alt="chinaFlag" /> <span>China</span> </a></li>
                    <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={germanyFlag} alt="chinaFlag" /> <span>Germany</span> </a></li>
                    <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={austrilliaFlag} alt="chinaFlag" /> <span>Australia</span> </a></li>
                    <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={russiaFlag} alt="chinaFlag" /> <span>Russia</span> </a></li>
                    <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={indiaFlag} alt="chinaFlag" /> <span>India</span> </a></li>
                    <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={gbFlag} alt="chinaFlag" /> <span>England</span> </a></li>
                    <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={turkeyFlag} alt="chinaFlag" /> <span>Turkey</span> </a></li>
                    <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={uzFlag} alt="chinaFlag" /> <span>Uzbekistan</span> </a></li>
                    <li className="col-md col-6"><a href="/" className="icontext"> <i className="mr-3 fa fa-ellipsis-h" /> <span>More regions</span> </a></li>
                </ul>
            </section>
        </React.Fragment>
    )
}
