'use strict';
let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = [];

for (let i = 0; i < employers.length; i++) {
	if (employers[i].length > 0 && employers[i].length != '') {
		employersNames.push(employers[i]);
	}
}
for (let i = 0; i < employersNames.length; i++) {
	employersNames[i] = employersNames[i].toLowerCase().trim();
}

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own = 0, ...args) {
    let total = own;
    for (let i = 0; i < args.length; i++) {
        total += +args[i];
    }
    return total;
}

const {cash, eu, eu:[a], rus} = sponsors;
let money = calcCash(null, cash);

function makeBusiness(owner, director = 'Victor', cash, emp) {
    let sumSponsors = eu.concat(rus, 'unexpected sponsor');
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with ${a}. It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam',, money, employersNames]);