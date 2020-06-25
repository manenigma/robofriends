import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// if (true) { // Assume go to false state
	// 	throw new Error('NOOOOOOO!');
	// }
	return (
		<div>
		{
			robots.map((user, i) => {
				return (
					<Card
						key={user.id} 
						id={user.id} 
						name={user.name} 
						email={user.email} 
						username={user.username}
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;