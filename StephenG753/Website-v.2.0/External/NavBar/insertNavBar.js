function insertNavBar(domElement) {
	console.log(domElement);
	domElement.innerHTML =
		`
        <a href="../Home/Home" class="nav-item">
            <img src="../External/NavBar/NavBarIcons/home.png" title="Home" />
        </a>
        <a href="../Projects/Projects" class="nav-item">
            <img src="../External/NavBar/NavBarIcons/code.png" title="Coding Projects"/>
        </a>
		<a href="../Resume/Resume" class="nav-item">
            <img src="../External/NavBar/NavBarIcons/resume.png" title="Resume"/>
        </a>
		<a href="../Bio/Bio" class="nav-item">
            <img src="../External/NavBar/NavBarIcons/bio.png" title="Get To Know Me" />
        </a>
        <a href="https://www.CrossRoadsTutoring.com" class="nav-item">
            <img src="../External/NavBar/NavBarIcons/crossroads-icon-only.svg" title="CrossRoads Tutoring"/>
        </a>
		<a href="../Contact/Contact" class="nav-item">
            <img src="../External/NavBar/NavBarIcons/contact.png" title="Contact"/>
        </a>
        ` + domElement.innerHTML;
}

function insertNavBarDev(domElement) {
	console.log(domElement);
	domElement.innerHTML =
		`
        <a href="../Home/Home.html" class="nav-item">
            <img src="../External/NavBar/NavBarIcons/home.png" title="Home" />
        </a>
        <a href="../Projects/Projects.html" class="nav-item">
            <img src="../External/NavBar/NavBarIcons/code.png" title="Coding Projects"/>
        </a>
		<a href="../Resume/Resume.html" class="nav-item">
            <img src="../External/NavBar/NavBarIcons/resume.png" title="Resume"/>
        </a>
		<a href="../Bio/Bio.html" class="nav-item">
            <img src="../External/NavBar/NavBarIcons/bio.png" title="Get To Know Me" />
        </a>
        <a href="../../../CrossRoadsTutoring/CrossRoads.html" class="nav-item">
            <img src="../External/NavBar/NavBarIcons/crossroads-icon-only.svg" title="CrossRoads Tutoring"/>
        </a>
		<a href="../Contact/Contact.html" class="nav-item">
            <img src="../External/NavBar/NavBarIcons/contact.png" title="Contact"/>
        </a>
        ` + domElement.innerHTML;
}

insertNavBar(document.getElementById('nav-bar'));
// insertNavBarDev(document.getElementById('nav-bar'));
