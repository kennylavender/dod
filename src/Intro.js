import preloadImage from './preload'
import bglight from './image/background_1000_light.jpg'
import bgdark from './image/background_1000_dark.jpg' 
import bglightmedium from './image/background_1920_light.jpg'
import bgdarkmedium from './image/background_1920_dark.jpg'
import './Intro.css'


let winWidth = window.innerWidth;
let images;
	
if (winWidth <= 992){
	images = [
		{id:"light", src:bglight},
		{id: "dark", src:bgdark}
    ];
}
if (winWidth > 992 ){
	images = [
		{id:"light", src:bglightmedium},
		{id: "dark", src:bgdarkmedium}
    ];
}

let animation = document.getElementById('animation')
let lightImage = document.getElementById('light-background')
let darkImage = document.getElementById('dark-background')

Promise.all([
	preloadImage(images[0]),
	preloadImage(images[1])
]).then((images)=> {
	let byId = images.reduce((obj, image)=>{
		obj[image.id] = image.src
		return obj
	}, {})

	// lightImage.style = 'background-image: url('+byId['light']+');'
	// darkImage.style = 'background-image: url('+byId['dark']+');'
	lightImage.setAttribute("style", "background-image:url("+byId['light']+");")
	darkImage.setAttribute("style", "background-image:url("+byId['dark']+");")

	setTimeout(()=>{
		animation.classList.add('intro-preloaded')
	},300)
	
}).catch((message)=>{
	console.log(message)
})