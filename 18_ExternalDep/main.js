var React = require('react');
var ReactDOM = require('react-dom');

var ReactComponent = React.createClass({
	render: function() {
		return (
			<div>
				<h1>This is a React component.</h1>
			</div>
		);
	}
});

ReactDOM.render(<ReactComponent/>, document.getElementById('mycontainer'));
