import { log } from "console";
import inquirer from "inquirer"
class Player{
    name:string
    fuel:number=100;
    constructor(name:string, fuel:number){
        this.name=name
    }
    fuelDecrease(){
        let fuel=this.fuel - 25
        this.fuel = fuel
    }

}


class Opponent
{
    name:string
    fuel:number=100;
    constructor(name:string, fuel:number){
        this.name=name
    }
    fuelDecrease(){
        let fuel=this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel =100
    }

}

let player=await inquirer.prompt([
    {
    name: "name",
    type:"input",
    message: "plx enter your name:"
}
])

let opponent =  await inquirer.prompt([
    {
        name:name,
        type: "input",
        message: "plz select your opponent",
        choices:["Skeleton", "Aliens","Zombie"]
    }
])

let p1= new player(player.name)

let o1= new Opponent(opponent.select)

do{
    //Skeleton
    if(opponent.select == "skeleton"){
        let ask= await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do",
                choices: ["Attack","Drink Portion","Run 4 your Life.."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor (Math.random() *2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`)
                console.log(`${o1.name} fuel is ${o1.fuel}`)
                if(p1.fuel > 0){
                    console.log("OOOOH Sad,You Loose,Better Luck Next Time")
                    process.exit()
                }


            }
            if(num <=0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`)
                console.log(`${o1.name} fuel is ${o1.fuel}`)
                if(o1.fuel > 0){
                    console.log(" You Win Game")
                    process.exit()
                }

            }

        }
        if(ask.opt == "Drink Portion"){
            o1.fuelIncrease()
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`)

        }
        if(ask.opt == "Run 4 your Life..")
        {
            console.log("You Loose Better Luck Next Time")
            process.exit()

        }
    }

    //Alien
    if(opponent.select == "Aliens"){
        let ask= await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do",
                choices: ["Attack","Drink Portion","Run 4 your Life.."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor (Math.random() *2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`)
                console.log(`${o1.name} fuel is ${o1.fuel}`)
                if(p1.fuel > 0){
                    console.log("OOOOH Sad,You Loose,Better Luck Next Time")
                    process.exit()
                }


            }
            if(num <=0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`)
                console.log(`${o1.name} fuel is ${o1.fuel}`)
                if(o1.fuel > 0){
                    console.log(" You Win Game")
                    process.exit()
                }

            }

        }
        if(ask.opt == "Drink Portion"){
            o1.fuelIncrease()
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`)

        }
        if(ask.opt == "Run 4 your Life..")
        {
            console.log("You Loose Better Luck Next Time")
            process.exit()

        }
    }

    //Zombie

    if(opponent.select == "Zombie"){
        let ask= await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do",
                choices: ["Attack","Drink Portion","Run 4 your Life.."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor (Math.random() *2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`)
                console.log(`${o1.name} fuel is ${o1.fuel}`)
                if(p1.fuel > 0){
                    console.log("OOOOH Sad,You Loose,Better Luck Next Time")
                    process.exit()
                }


            }
            if(num <=0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`)
                console.log(`${o1.name} fuel is ${o1.fuel}`)
                if(o1.fuel > 0){
                    console.log(" You Win Game")
                    process.exit()
                }

            }

        }
        if(ask.opt == "Drink Portion"){
            o1.fuelIncrease()
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`)

        }
        if(ask.opt == "Run 4 your Life..")
        {
            console.log("You Loose Better Luck Next Time")
            process.exit()

        }
    }
}
while(true)