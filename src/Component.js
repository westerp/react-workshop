import React from 'react';

export const Component = ({text}) => {
	return <div>{text || "I'm a component"} - text</div>
};
export default Component;