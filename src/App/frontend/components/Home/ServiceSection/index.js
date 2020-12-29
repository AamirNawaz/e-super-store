import React from 'react'
import PostItem from './PostItem'

import postImg1 from '../../../../assets/images/posts/1.jpg';
import postImg2 from '../../../../assets/images/posts/2.jpg';
import postImg3 from '../../../../assets/images/posts/3.jpg';
import postImg4 from '../../../../assets/images/posts/4.jpg';

const items = [postImg1, postImg2, postImg3, postImg4]

export default function index() {
    return (
        <React.Fragment>
            <section className="padding-bottom">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Trade services</h4>
                </header>
                <div className="row">

                    <PostItem postImg={items} />

                </div>
            </section>

        </React.Fragment>
    )
}
