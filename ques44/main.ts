function sandwichItems(...items: string[]){
    for(let i of items){
        console.log(''+ i);
    }
    console.log("sandwich ready :)\n");
}

sandwichItems('cheese', 'pepproni', 'avocado', 'lattice');
sandwichItems('ketchup', 'mayo', 'chilli');
sandwichItems('allu', 'kheera', 'gagga')