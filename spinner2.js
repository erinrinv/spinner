//process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
let increase = 100;

for(const  r of spinner){
  setTimeout(() => {
    process.stdout.write(r);
  }, increase)
  increase += 200;
}
