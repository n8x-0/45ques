function make_shirt(text: string, size: string = 'small'){
    if(size == 'large' || size == 'medium'){
        console.log(`size: ${size}`, `\nprintText: this is default text`);   
    }else{
        console.log(`size: ${size}`, `\nprintText: ${text}`);
    }
}

make_shirt('best boy here', 'small');
make_shirt('default size up there');
make_shirt('', 'large');
make_shirt('', 'medium');
make_shirt('safd', 'any');