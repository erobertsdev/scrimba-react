// Imperative example
// const root = document.getElementById('root');
// const newEl = document.createElement('h1');
// newEl.textContent = "This is some text content";
// newEl.className = 'header';
// root.appendChild(newEl);

// JSX can be stored in a variable. wtf

const navbar = (
	<nav>
		<h1>Oliver Inc.</h1>
		<ul>
			<li>Pricing</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
);

ReactDOM.render(navbar, document.getElementById('root'));
