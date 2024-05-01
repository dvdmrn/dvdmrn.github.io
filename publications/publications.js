
class PublicationCard extends HTMLElement{
    /**
     * 
     * @param {Publication} pub 
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
            this.tagsHtmlString += `<button class="tag">${tag}</button> `
        })
    }

    async createProjectWindow(){
        // const queryString = window.location.search;
        window.history.pushState({ path: `?proj=${this.stem}` }, '', `?proj=${this.stem}`);
        routeProjectFromStem(this.stem);
        
        // const mainContent = projHighlight.querySelector("#project-highlight");
        // mainContent?.appendChild

        // const parser = new DOMParser();
        // const htmlDoc = parser.parseFromString(htmlString, 'text/html');
        // console.log(htmlDoc)
        // const projHighlight = document.getElementById("project-highlight");
        // projHighlight?.appendChild(htmlDoc.body);        
    }


    connectedCallback(){
        /**
         * @type {HTMLTemplateElement}
         */

        this.innerHTML = `
        <div class="project-card anim-pop-in">
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
{/* <div style="text-align: left;">
         Bucci P, Cang XL, Valair A, <b>Marino D</b>, Tseng L, Jung M, Rantala J, Schneider OS, MacLean KE. <a style="font-weight: bold;" href="https://www.cs.ubc.ca/labs/spin/sites/default/files/local_pdfs/2017_SketchingCuddleBits.pdf" target="_blank">Sketching cuddlebits: coupled prototyping of body and behaviour for an affective robot pet</a>
         In Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems 2017 May 2 (pp. 3681-3692).
        <div style="margin-top: 1em;">
            <button class="tag">testy</button>
        </div>
        </div>  */}
