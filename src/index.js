import numeral from 'numeral';

const numeralValue = numeral(1000).format('$0,0.00');

console.log(`I would pay ${numeralValue}!`);
