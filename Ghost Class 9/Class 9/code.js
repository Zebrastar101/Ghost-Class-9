var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["81459a3a-1c81-4699-bde5-45040d7810d5","3e1d9cc3-ac6f-41f0-8dfc-2b785c6373e9"],"propsByKey":{"81459a3a-1c81-4699-bde5-45040d7810d5":{"name":"wing_bot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png","frameSize":{"x":218,"y":128},"frameCount":8,"looping":true,"frameDelay":2,"version":"8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1744,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png"},"3e1d9cc3-ac6f-41f0-8dfc-2b785c6373e9":{"name":"ghost_1","sourceUrl":"assets/api/v1/animation-library/gamelab/nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc/category_fantasy/ghost.png","frameSize":{"x":51,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc/category_fantasy/ghost.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sam= createSprite(30,200,20,20);
sam.shapeColor="green";
sam.setAnimation("ghost_1");
sam.scale=0.6;
var b1=createSprite(200,3,400,5);
b1.shapeColor="cyan";
var b2=createSprite(200,397,400,5);
b2.shapeColor="cyan";
var car1=createSprite(100,20,15,15);
car1.shapeColor="violet";
var car2=createSprite(170,380,15,15);
car2.shapeColor="violet";
var car3=createSprite(240,20,15,15);
car3.shapeColor="violet";
var car4=createSprite(310,380,15,15);
car4.shapeColor="violet";

car1.velocityY=8;
car3.velocityY=8;
car2.velocityY=-8;
car4.velocityY=-8;

var life=0;

function draw() {
 background("black"); 
 
 textSize(15);
 fill("gold");
 text("Lives Lost: " +life,5,20 );
 
 car1.bounceOff(b1); 
 car2.bounceOff(b1); 
 car3.bounceOff(b1); 
 car4.bounceOff(b1); 
 car1.bounceOff(b2); 
 car2.bounceOff(b2);
 car3.bounceOff(b2);
 car4.bounceOff(b2);
 
 if(keyDown("right")){
   sam.x= sam.x+2;
 }
 if(keyDown("left")){
   sam.x=sam.x-2;
 }
 if(sam.isTouching(car1)|| sam.isTouching(car2)|| sam.isTouching(car3)
 ||sam.isTouching(car4) ){
   playSound("assets/category_explosion/8bit_explosion.mp3");
   sam.x=30;
   sam.y=200;
   life= life+1;
 }
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
