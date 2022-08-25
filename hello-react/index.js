// Imperative example
// const root = document.getElementById('root');
// const newEl = document.createElement('h1');
// newEl.textContent = "This is some text content";
// newEl.className = 'header';
// root.appendChild(newEl);

// JSX can be stored in a variable. wtf


const Navbar = () => {
	return (
		<nav>
			<h1>Oliver Inc.</h1>
			<ul>
				<li>Pricing</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
}

// ReactDOM.render(navbar, document.getElementById('root'));
// React 18 version
ReactDOM.createRoot(document.getElementById('root')).render(<Navbar />);

// React 18 common version
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Navbar />);
