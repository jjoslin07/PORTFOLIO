const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.controls');
const sectionButton = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
	// Button click to select active class
	for (let i = 0; i < sectionButton.length; i++) {
		sectionButton[i].addEventListener('click', function () {
			let currentButton = document.querySelectorAll('.active-btn');
			currentButton[0].className = currentButton[0].className.replace(
				'active-btn',
				''
			);
			this.className += ' active-btn';
		});
	}
	// Sections Active Class
	allSections.addEventListener('click', (e) => {
		const id = e.target.dataset.id;
		if (id) {
			// remove selected from the other buttons
			sectionButtons.forEach((btn) => {
				btn.classList.remove('active');
			});
			e.target.classList.add('active');

			// hide other sections
			sections.forEach((section) => {
				section.classList.remove('active');
			});

			const element = document.getElementById(id);
			element.classList.add('active');
		}
	});

	// Toggle theme

	const themeButton = document.querySelector('.theme-button');
	themeButton.addEventListener('click', () => {
		let element = document.body;
		element.classList.toggle('light-mode');
	});
}

PageTransitions();
