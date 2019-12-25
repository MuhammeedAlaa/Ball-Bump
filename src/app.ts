// Here, we import the things we need from other script files 
import Game from './common/game';
import Level1 from './scenes/Level1';
import Level2 from './scenes/Level2';
//import Level2 from './scenes/level2';

// First thing we need is to get the canvas on which we draw our scenes
const canvas: HTMLCanvasElement = document.querySelector("#app");
const score: HTMLCanvasElement = document.querySelector("#c2d");

// Then we create an instance of the game class and give it the canvas
const game = new Game(canvas, score);

// Here we list all our scenes and our initial scene
const scenes = {
    "Level1": Level1,
    "Level2": Level2    
};
const initialScene = "Level1";
 


// Then we add those scenes to the game object and ask it to start the initial scene
game.addScenes(scenes);
// Here we setup a selector element to switch scenes from the webpage
const selector: HTMLSelectElement = document.querySelector("#scenes");
const button: HTMLSelectElement = document.querySelector("#choose");
for(let name in scenes){
    let option = document.createElement("option");
    option.text = name;
    option.value = name;
    selector.add(option);
}
selector.value = initialScene;
button.addEventListener("click", ()=>{
        game.lastTick = performance.now();
        game.scoree = 0;
        game.startScene(selector.value);
});
