import React from 'react';
import healthBanner from '../static/images/nzCloudHike_opt.jpg';
import SinglePost from './SinglePost.jsx';
import healthData from '../healthData.js';

export default function Health() {

    const singlePosts = () =>
        healthData.map(aPost => {
            console.log(aPost.title);
			return (<SinglePost key={aPost.id} id={aPost.id} title={aPost.title} date={aPost.date} imgName={aPost.imgName} photoUrls={aPost.photoUrls} textFile={aPost.textFile} summaryText={aPost.summaryText} expenseImage={aPost.expenseImage} videoId={aPost.videoId} enableComments={aPost.enableComments} />);
        });

    return (
        <div id="expense-page" className="sub-page">
            <div id="banner">
                <img className='img-banner' src={healthBanner} alt='health banner' />
            </div>
            <div className="card-section">
                <h2 className="cards-header">Browse All Posts</h2>
                <div className="card-list">
                    {singlePosts()}
                </div>
            </div>
        </div>
    );
}

