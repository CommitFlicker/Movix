import React, { useState } from 'react'

import "./Reviews.scss";
import { useSelector } from "react-redux";

import { IoPersonCircleOutline } from "react-icons/io5";

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import OverviewRev from '../../../components/overviewrev/OverviewRev';

function Reviews({ data, loading, title }) {
    const [user, setUser] = useState(undefined);
    const { url } = useSelector((state) => state.home);
    const dataa = data?.results;
    const length = dataa ? Object.keys(dataa).length : 0;

    return (
        <div className="ReviewsSection">
            <ContentWrapper >
                <h1>Reviews Posted for '{title}' </h1>
                <h4>Total Reviews : {length}</h4>
                <div className="reviews-container">
                    <div className="review-item">
                        {dataa?.map((item) => {
                            const details = item?.author_details;
                            const posterurl = url.profile + details.avatar_path;

                            return (
                                <div className="review-Area" key={item.id}>
                                    <div className="reviewtArea-avatar">
                                        <div className="reviewArea-avatar-wrapper">
                                            {details.avatar_path ? (
                                                <img
                                                    src={posterurl}
                                                    alt=""
                                                />
                                            ) : (
                                                <IoPersonCircleOutline />
                                            )}

                                        </div>
                                    </div>
                                    <div className="reviewArea-body">
                                        <p><b>Name:</b> {item.author}</p>
                                        <p><b className='parabold34576'>Posted on:</b> {item.created_at}</p>
                                        <p className='pmaincon4565'>
                                            <b className='parabold34576'>Review : </b><OverviewRev overview={item.content} />
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </ContentWrapper>
        </div>
    )
}

export default Reviews