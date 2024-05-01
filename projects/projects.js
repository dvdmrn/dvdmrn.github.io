import projects, {Tag} from "./projects-data.js";

/**
 * @typedef {import("./projects-data.js").Project} Project
 */


class ProjectCard extends HTMLElement{
    /**
     * 
     * @param {Project} project 
     */
    constructor(project){
        super();
        this.title = project.title;
        this.heroImg = project.heroImg;
        this.slug = project.slug;
        this.tags = project.tags;
        this.stem = project.stem;

        this.tagsHtmlString = ""
        project.tags.forEach(tag=>{
            this.tagsHtmlString += `<button class="tag ${filters.has(tag) && 'tag-selected'}" tagid="${tag}">${tag}</button> `
        })
    }

    async createProjectWindow(){
        window.history.pushState({ path: `?proj=${this.stem}` }, '', `?proj=${this.stem}`);
        routeProjectFromStem(this.stem);
   }


    connectedCallback(){
        /**
         * @type {HTMLTemplateElement}
         */

        this.innerHTML = `
        <div class="project-card anim-pop-in" id=${this.stem}>
        <img class="project-thumb" src="${this.heroImg}">
        <div class="project-textarea">
            <div class="project-title">${this.title}</div>
            <div class="project-slug">${this.slug}</div>
            <br>
            ${this.tagsHtmlString}
        </div>
        </div>
        `
        
        this.querySelector(".project-card")?.addEventListener("click", this.createProjectWindow.bind(this))

        
    }
}

class ProjectHighlight extends HTMLElement{
    /**
     * 
     * @param {string} bodyHtml 
     */
    constructor(bodyHtml){
        super()
        this.bodyHtml = bodyHtml;
    }

    destroySelf(){
        // history.replaceState({}, "", "/projects");
        const currentUrl = window.location.href;
        var newUrl = currentUrl.split('?')[0];
        // update the URL without navigating away
        window.history.replaceState({}, document.title, newUrl);
        this.remove()
    }

    connectedCallback(){
        document.body.style.overflow = "hidden";

        this.innerHTML = `
        <div id="project-bg"></div>
        <div id="project-highlight">
            <div id="proj-controls">
                <div class="proj-controls-button-generic" id="back">↩</div>
            </div>
                ${this.bodyHtml}
        </div>
        `
        this.querySelector("#project-bg")?.addEventListener("click", this.destroySelf.bind(this))
        this.querySelector("#back")?.addEventListener("click", this.destroySelf.bind(this))
        this.querySelector("#copy")?.addEventListener("click", ()=>{
            navigator.clipboard.writeText(window.location.href);
            alert('copied to clipboard')
        })
    }

    disconnectedCallback(){
        document.body.style.overflow = "scroll";
    }
}

customElements.define("project-card", ProjectCard);
customElements.define("project-highlight", ProjectHighlight);


// ====================================================================================



const filters = new Set()


async function routeProjectFromStem(stem){
    let res = await fetch(`./p/${stem}/${stem}.html`);
    if(res.status == 404){
        res = await fetch(`./p/404/404.html`);
    }
    const htmlString = await res.text()
    const projHighlight = new ProjectHighlight(htmlString);
    document.body.appendChild(projHighlight);
}


async function parseUrlParams(){
    if(window.location.search.length === 0) return;
    const params = new URLSearchParams(window.location.search);
    const projStem = params.get("proj");
    routeProjectFromStem(projStem)
}

/**
 * 
 * @param {HTMLButtonElement} sourceButton
 * @param {string} tagName 
 */
function filterProjects(sourceButton, tagName){
    sourceButton.classList.toggle("tag-selected")
    filters.has(tagName) ? filters.delete(tagName) : filters.add(tagName); 
    if(filters.size == 0){
        projects.forEach(proj=>proj.visible = true)
        renderProjects();
        return;
    }

    for (let i = 0; i < projects.length; i++) {
        projects[i].visible = false;
        for (let j = 0; j < projects[i].tags.length; j++) {
            if(filters.has(projects[i].tags[j])){
                projects[i].visible = true;
                break;
            }
        }
    }
    renderProjects();
}



function renderProjects(){
    const projectArea = document.getElementById("project-area");
    if(!projectArea){
        console.error("Ah heck! No project area found!")
        return;
    }
    projectArea.innerHTML = "";
    projects.forEach(proj => {
        if(proj.visible){
            const projElement = new ProjectCard(proj);
            projectArea?.appendChild(projElement);
        }
    })
}

// create tags menu
const tagArea = document.getElementById("tags-array");
Object.entries(Tag).forEach(tag=>{
    const tagButton = document.createElement('button');
    tagButton.innerText = tag[1]
    tagButton.setAttribute("tagid", tag[1])
    tagButton.classList.add("tag")
    tagButton.classList.add("tag-selectable")
    tagButton.onclick = () => filterProjects(tagButton, tag[1])
    tagArea?.appendChild(tagButton);
    tagButton.ontouchstart = ()=>tagButton.classList.remove('tag-selectable')
})


renderProjects();
parseUrlParams();