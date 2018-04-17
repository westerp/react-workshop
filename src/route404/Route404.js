import React from 'react';
import {Link} from 'react-router-dom';

export const Route404 = () => (
	<div>
		<h1>Route not found</h1>
		<Link to="/">Home</Link>
	</div>
);
export default Route404;