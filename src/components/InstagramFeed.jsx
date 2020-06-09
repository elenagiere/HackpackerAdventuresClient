import React from 'react';

class InstagramFeed extends React.Component {

    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "https://apps.elfsight.com/p/platform.js";
        script.async = true;
    
        document.body.appendChild(script);
    }

	render () {
		return (
            <div>
                <div class="elfsight-app-0954c67f-a021-4d28-8791-0defa0cf440a"></div>
                <div className="whiteout-instagram-ad"></div>
            </div>
		);
	}
}

export default InstagramFeed;
