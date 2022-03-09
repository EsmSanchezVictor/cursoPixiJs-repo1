
import { Application, Sprite, Loader } from 'pixi.js'


const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});
// una forma const myLoader = new Loader();
Loader.shared.add({ url: "./pngegg.png", name: "loki" });
Loader.shared.add({ url: "./clampy.png", name: "clampy" });

//con Sprite.from("./pngegg") , crea el sprite desvargandolo en el momento    

Loader.shared.onComplete.add(()=>{
	const imagePng: Sprite = Sprite.from("loki");

	console.log("¡Hola mundo!" + imagePng.width, imagePng.height);

	/* cambiamos a clampy, anvlaje y posicion 
	clampy.anchor.set(0.5);
	
	clampy.x = app.screen.width / 2;
	clampy.y = app.screen.height / 2;*/

	imagePng.anchor.set(0);

	imagePng.x = 0;
	imagePng.y = 0;

	app.stage.addChild(imagePng); // lo agrega en la pantalla

});

Loader.shared.load();
