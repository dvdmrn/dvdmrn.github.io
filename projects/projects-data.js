
/**
 * @type {object}
 * @readonly
 * @enum {string}
 */
export const Tag = {
    hri: "🤖 human-robot-interaction",
    telepresence: "👋 telepresence",
    games: "🎮 games",
    speech: "💬 multimodal speech",
    affect: "🩷 affective computing",
    ux: "🔬 ux research",
    haii: "✨ human-AI-interaction"
}

/**
 * @typedef Project
 * @type {object}
 * @property {string} title
 * @property {string} slug
 * @property {string} heroImg
 * @property {Array<Tag>} tags
 * @property {string} pathToContent
 * @property {string} stem
 * @property {boolean} visible
 */


/**
 * @type {Array<Project>}
 */
const projects = [
    {
        title:"Apocalypse Made Easy!",
        slug:"Location based mobile survival game",
        heroImg: "https://www.dvdmrn.xyz/hci/static/media/ameicon.1038a5ec.png",
        tags:[Tag.games, Tag.ux],
        pathToContent:"./p/ame/ame.html",
        stem: "ame",
        visible:true
    },
    {
        title:"Haptic Speech Enhancement",
        slug:"Feeling speech for enhanced intelligibility",
        heroImg: "https://www.dvdmrn.xyz/hci/static/media/vocalenhancement.9a3ed830.png",
        tags:[Tag.speech],
        pathToContent:"./p/ame/ame.html",
        stem: "hapspeech",
        visible:true
    },

    {
        title:"Co-Here",
        slug:"An expressive animation system to implicitly convey emotion",
        heroImg: "https://www.dvdmrn.xyz/hci/static/media/teleaffecticon.81178a72.png",
        tags:[Tag.affect, Tag.telepresence, Tag.haii],
        pathToContent:"./p/ame/ame.html",
        stem:"teleaffect",
        visible:true
    },
    {
        title:"Ambient Context",
        slug:"Conveying environmental context while videoconferencing",
        heroImg: "./p/audioctx/gui-screenshot.png",
        tags:[Tag.affect, Tag.telepresence, Tag.haii],
        pathToContent:"./p/audioctx/audioctx.html",
        stem:"audioctx",
        visible:true
    },
    {
        title:"WhatsHap",
        slug:"Haptic Phoneme Encoder",
        heroImg: "https://www.dvdmrn.xyz/hci/static/media/whatshapicon.aed3486a.jpg",
        tags:[Tag.telepresence, Tag.speech],
        pathToContent:"./p/whatshap/whatshap.html",
        stem:"whatshap",
        visible:true
    },
    {
        title:"Voodle",
        slug:"Vocal doodling to sketch affective robot motion",
        heroImg: "./p/voodle/voodle-bark.png",
        tags:[Tag.hri, Tag.haii],
        pathToContent:"./p/voodle/voodle.html",
        stem:"voodle",
        visible:true
    },
    {
        title:"CuddleBits",
        slug:"A robot design system for huggable furballs",
        heroImg: "https://www.dvdmrn.xyz/hci/static/media/cuddlebiticon.ee4709b6.jpg",
        tags:[Tag.hri, Tag.haii],
        pathToContent:"./p/cuddlebits/cuddlebits.html",
        stem:"cuddlebits",
        visible:true
    },
    {
        title:"Hen the Human Pet",
        slug:"Virtual pet simulator game",
        heroImg: "https://www.dvdmrn.xyz/hci/static/media/henicon.df6b25b3.png",
        tags:[Tag.games],
        pathToContent:"./p/hen/hen.html",
        stem:"hen",
        visible:true
    },
]

/**
 * @type {Array<Project>}
 */
export default projects;