const readline = require("node:readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("Enter number of Disk:", (disk) => {
  TowerOfHanoi(disk, "A", "B", "C");
  r1.close;
});

//no of disk, source, auxillary, destination

function TowerOfHanoi(n, A, B, C) {
  if (n > 0) {
    TowerOfHanoi(n - 1, A, C, B);
    console.log(`Move from ${A} to ${C}`); //Bigger Disk
    TowerOfHanoi(n - 1, B, A, C);
  }
}
