import "./styles.css";

const arrayNums: number[] = new Array(10);

function ramdomNum(limite: number): number {
  return Math.round(Math.random() * limite);
}

for (let i = 0; i < 10; i++) {
  arrayNums[i] = ramdomNum(99);
}
console.log(arrayNums);
