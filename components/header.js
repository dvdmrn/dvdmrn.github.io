class Hamburger extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div id="hamburger-menu-space">
            <button id="hamburger-menu-icon">://<span id="hamburger-url"/></button>
            <div id="hamburger-dropdown" class="hamburger-dropdown-closed">
                <button class="hamburger-item rm-text-affordances" onclick="location.href='/';">Home</button>
                <button class="hamburger-item rm-text-affordances" onclick="location.href='/about';">About</button>
                <button class="hamburger-item rm-text-affordances" onclick="location.href='/research';">Research</button>
                <button class="hamburger-item rm-text-affordances" onclick="location.href='/projects';">Projects</button>
                <button class="hamburger-item rm-text-affordances" onclick="location.href='https://scholar.google.com/citations?user=dLgup7MAAAAJ&hl=en';" target="_blank">Publications</button>
                <button class="hamburger-item rm-text-affordances" onclick="location.href='/visual';">Visual</button>
                <button class="hamburger-item rm-text-affordances" onclick="location.href='/contact';">Contact</button>
            </div>
        </div>
        `
    }
}

customElements.define('hamburger-component', Hamburger);