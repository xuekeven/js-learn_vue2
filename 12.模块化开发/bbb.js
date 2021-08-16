// import 用于加载模块，有多种方式。

// 导入方式一：对应导出方式一和导出方式二。
// 导入需要加 {}。
import { name, age, flag, sum } from "./aaa.js";
import { height, mmll, Person } from "./aaa.js";

if (flag) {
  console.log(name);
  console.log(age);
  console.log('小明是天才');
  console.log(sum(15, 100));
}

console.log(height);
console.log(mmll(15, 10));
let a = new Person();
a.run();

// 导入方式二：对应导出方式三，需要对导入的对象命名。
// 导入可以不加 {}。
import ad from './aaa.js';

console.log(ad);

// 导入方式三：导入文件中所有通过 export 导出的内容，需要对总的对象命名。
// 导入可以不加 {}。
import * as s from './aaa.js';
console.log(s.height);