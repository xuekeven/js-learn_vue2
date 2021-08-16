// export 用于导出模块，有多种方式。

let name = '小明';
let age = 18;
let flag = true;

function sum(num1,num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(20, 30));
}

// 导出方式一：使用标识符和 export 导出。可用于导出变量、函数、类、对象等。
export { name, age, flag, sum };

// 导出方式二：声明变量时使用 export 导出。可用于导出变量、函数、类、对象等。
export let height = 1.88;
export function mmll(number1,number2) {
  return number1 - number2
}
export class Person {
  run() {
    console.log('在奔跑');
  }
}

// 导出方式三：使用标识符和 export default 导出。常用于导出函数、类、对象。
// 一个模块文件只能有一个 export default。
export default function sums(num1,num2) {
  return num1 + num2
}