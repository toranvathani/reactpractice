import React from "react";
import ReactDOM from "react-dom";
// Component to be extracted
function MenuItems(props) {
	const item = props.item;
	return <li>{item}</li>;
}

// Component that will return an
// unordered list
function Navmenu(props) {
	const list = props.menuitems;
	const updatedList = list.map((listItems) => {
		return <MenuItems key={listItems.toString()} item={listItems} />;
	});

	return <ul>{updatedList}</ul>;
}

const menuItems1 = [1, 2, 3, 4, 5];
const menuItems2 = [1, 2, 3, 4, 5, 6];

ReactDOM.render(
	<div>
		<Navmenu menuitems={menuItems1} />
		<Navmenu menuitems={menuItems2} />
	</div>,
	document.getElementById("root")
);
