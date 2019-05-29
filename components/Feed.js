import React from 'react';
import Posts from './Posts.js';
import Users from './Users';

export default function feed() {
	return (
			<div className="container feed">
				<Posts />
				<Users />
			</div>
		)
}