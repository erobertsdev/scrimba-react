// Imperative example
// const root = document.getElementById('root');
// const newEl = document.createElement('h1');
// newEl.textContent = "This is some text content";
// newEl.className = 'header';
// root.appendChild(newEl);

// JSX can be stored in a variable. wtf

const page = (
	<div>
		<h1 className='header'>This is SPARTA</h1>
		<p>This is a paragraph</p>
	</div>
);

ReactDOM.render(page, document.getElementById('root'));
