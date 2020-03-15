let Argument = process.argv;
for (let index = 0; index < Argument.length - 2; index++) {
  console.log(`Argument[${index + 2}] = ${Argument[index + 2]}`);
}
