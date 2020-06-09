import React from 'react';
import SinglePost from './SinglePost.jsx';
import tripData from '../tripData.js';

export default function Posts () {

	const singlePosts = () =>
		tripData.slice(0).reverse().map(aPost => {
			return (<SinglePost key={aPost.id} id={aPost.id} title={aPost.title} date={aPost.date} imgName={aPost.imgName} photoUrls={aPost.photoUrls} textFile={aPost.textFile} summaryText={aPost.summaryText} expenseImage={aPost.expenseImage} videoId={aPost.videoId} enableComments={aPost.enableComments} />);
		});

	return (
		<div className="card-section">
			<h2 className="cards-header">Browse All Posts</h2>
			<div className="card-list">
				{singlePosts()}
			</div>
		</div>
	);
}
