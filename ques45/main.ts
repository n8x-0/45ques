function cars(manufacturer: string, model: string, color?: string, opt?: string): { manufacturer: string, model: string, color?: string, opt?: string } {
    let carsObj: { manufacturer: string, model: string, color?: string, opt?: string } = {
        manufacturer: manufacturer,
        model: model,
        color: color,
        opt: opt
    }
    return carsObj
}

console.log(
    
    cars('toyota', '2024', 'black', 'its not too fast'),
    cars('nissan', '2007', undefined ,'its sucks'),
    cars('toyota', '2024')

);