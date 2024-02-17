let magician = ['chloe', 'rio', 'jett']

//i messed up by not using magic = magic.map, i was using direct magic.map, take help from gpt for the purpose...

let magician2: string[];

function make_great(){
    magician2 = magician.map(grt => `Great ${grt}`) 
}

make_great()

function showMagician(){
    
    for(let i of magician){
        console.log(i);
    }

    for(let i of magician2){
        console.log(i);
    }
};

showMagician()