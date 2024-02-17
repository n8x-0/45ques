function describe_city(name: string, country: string = 'pakistan'){
    console.log(`${name} is in ${country}`);
};

describe_city('karachi');
describe_city('lahore');
describe_city('washington', 'london')