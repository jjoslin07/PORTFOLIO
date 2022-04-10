# PORTFOLIO

### Dark-Mode
#### Home Page
![screencapture-127-0-0-1-5500-2022-04-10-00_00_44](https://user-images.githubusercontent.com/73438491/162606589-79d4180e-cfdb-489c-9a1c-bda03ce02c31.png)
#### About Page
![screencapture-127-0-0-1-5500-2022-04-10-00_01_10](https://user-images.githubusercontent.com/73438491/162606608-770efa10-0b09-4cb7-8ddb-62bedf0b4d80.png)

### Light-Mode

#### Home Page
![screencapture-127-0-0-1-5500-2022-04-10-00_01_38](https://user-images.githubusercontent.com/73438491/162606618-fa4ef0f0-81c4-4c1b-9478-9d484fc9c7af.png)
#### About Page
![screencapture-127-0-0-1-5500-2022-04-10-00_06_41](https://user-images.githubusercontent.com/73438491/162606671-58f4984c-93e1-47b8-b749-4b43a1d6f2e9.png)

#### The JavaScript used for this website
```
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
```
