// practice.js
const numbers = [23, 45, 32, 55, 34, 72];



let sum = 0;


for(let i=0; i<numbers.length; i++){
  sum+= numbers[i];
}


console.log('합계: '+ sum);
sum=0;

for(let i=0; i<numbers.length; i++){
  if(numbers[i] % 2 == 0)
  sum+= numbers[i];
}
console.log('합계: '+ sum);
sum=0;
for(let number of numbers){
  if(number % 2 == 0){
    sum += number;
  }
}
console.log('합계: '+ sum);
sum=0;

numbers.forEach((param, idx) => {
  console.log(param, idx);
  if(param % 2 == 0){
    sum+=param;
  }
});

//함수표현식으로...
let evenSum = (param) => {
  if(param % 2 == 0){
    sum += param;

  }
};
let oddSum = (param) =>{
  if(param % 2 == 1){
    sum+=param;
  }
};
sum=0;
numbers.forEach(oddSum);
console.log('합계: '+ sum);
sum=0;
numbers.forEach(evenSum);
console.log('합계: ' + sum);