import React from 'react';
import './SidebarOptions.css';

function SidebarOptions({active, Icon, text}) {
	return (
		<div className={`sidebarOption ${active ? 'sidebarOption-active' : null}`}>
            <Icon className="icon"/>
            <p>{text}</p>
		</div>
	);
}

export default SidebarOptions;
