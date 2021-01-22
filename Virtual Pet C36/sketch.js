var Dog
var D1
var food_count=12
var database
var countraf
var readfrom
var form
var FOOD_img
var FOOD,FOOD2,FOOD3
var FOODval=5
var Wallet=1000
var Feed_time=0
var FeadAt=0,AmPm="⠀"
var subamount=1

function preload(){
  D1 = loadImage('dog3.png')  
  FOOD_img = loadImage('FOOD_photo.png')
}

function setup() {
  database=firebase.database()
  createCanvas(880, 620);
  Dog1=createSprite(440,400,20,20)
  Dog1.addImage(D1)
  
  FOOD=createSprite(50,590)
  FOOD.addImage(FOOD_img)
  FOOD.scale=0.2

  FOOD2=createSprite(90,585)
  FOOD2.addImage(FOOD_img)
  FOOD2.scale=0.2
  FOOD2.depth=0

  FOOD3=createSprite(130,580)
  FOOD3.addImage(FOOD_img)
  FOOD3.scale=0.2
  FOOD3.depth=-1

  

}


function draw() {  
  background('#323233')
  if(food_count<=10){
    text("I AM NOT A FEEDING MACHINE AND CANNOT EAT MORE THAN 2 PLATES ",240,500)
  }
  if(food_count==0){
    fill("red")
    text("YOU ARE OUT OF FOOD AND STOP FEEDING ME TOO I AM DONE FOR LIKE 3 YEARS",210,520)
  }
  if(food_count<=-1){
    food_count=0
  }
  if(food_count==2){
    FOOD3.visible=false
  }
  if(food_count==1){
    FOOD2.visible=false
  }
  if(food_count==0){
    FOOD.visible=false
  }
  if(frameCount%200==0){
    Feed_time=Feed_time+1
    Wallet=Wallet+10
  }
  if(Feed_time>=24){
    Feed_time=0
  }
  
  form=new UI()
  form.display()
  fill("white")
  textSize(14)
  text("HEY I AM DOG",400,100)
  text("YOU LIKE DOGS? .... II'L TAKE THAT AS YES",320,120)
  text("GHRRRRR.... WELL THAT WAS MY STOMACH, I AM HUNGRY CAN CAN YOU FEED ME",200,140) 
  text("YOU CAN FEED ME BY PRESSING THE BUTTON ABOVE ME, BUT I ONLY HAVE LIMITED FOOD CHECK IT ⭲"+  food_count,110,200)
  textSize(50)
  text("⟽"+food_count,200,600)
  textSize(15)
  text("1 for $"+FOODval,585,610)
  text("Money left $"+Wallet,20,20)
  text("You last feed your dog at "+FeadAt + AmPm,650,20)
  drawSprites();
}