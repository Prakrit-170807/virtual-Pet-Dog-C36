class UI{
    constructor(){

    }
    display(){
        var feed=createButton("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀FEED⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
        feed.position(350,300)
        feed.mousePressed(function(){
            food_count=food_count-1
            FeadAt=Feed_time
            if(Feed_time>=0){
                AmPm='am'
            }
            if(Feed_time>=12){
                AmPm="pm"
            }
        })
        var BUY=createButton("⠀⠀⠀⠀⠀BUY⠀⠀⠀⠀⠀")
        BUY.position(900,620)
        BUY.mousePressed(function(){
            if(Wallet>=0){
                subamount=1
            }
            if(Wallet<=0){
                subamount=0
            }
            else{
            food_count=food_count+subamount
            FOODval=FOODval+2
            Wallet=Wallet-FOODval
            }
        })
    }
}