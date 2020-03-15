let Args = process.argv;
let i = 0;
let star = "";

for (let index = 0; index < Args.length - 2; index++) {
  while (i < Args[2]) {
    star += "*";
    console.log(star);
    i++;
  }
}
