let Argument = process.argv;
let result = 0;
for (let index = 0; index < Argument.length - 2; index++) {
  result += Number(Argument[index + 2]);
}
console.log(result);
