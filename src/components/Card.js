import React from 'react';


const Card = ({id, name, email, username}) => {
	return (
		// <h1>RoboFriends</h1>
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${username}?size=200x200`} alt="robots"/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;