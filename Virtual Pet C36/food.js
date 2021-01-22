class Food{
    constructor(){

    }
    Getfood_info(){
        var foodcount=database.ref("food")
        foodcount.on("value",function(data){
            food=data.val()
        })
    }

    Updatefood_info(food_count){
        database.ref("food").update({
            food:food_count
        })
    }
}