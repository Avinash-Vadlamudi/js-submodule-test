// interface BackPack<Type> {
//   add: (obj: number) => void;
//   get: () => Type;
// }
// declare const backpack: BackPack<string>;
// const obj = backpack.get();
// backpack.add(23423434);
// function getSomeValue(): number {
//   return 5;
// }
// enum E {
//   A = getSomeValue(),
//   B = 10,
// }
// enum LogLevel {
//   ERROR,
//   WARN,
//   INFO,
//   DEBUG,
// }
// /**
//  * This is equivalent to:
//  * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
//  */
// type LogLevelStrings = keyof typeof LogLevel;
// function printImportant(key: LogLevelStrings, message: string) {
//   const num = LogLevel[key];
//   if (num <= LogLevel.WARN) {
//     console.log("Log level key is:", key);
//     console.log("Log level value is:", num);
//     console.log("Log level message is:", message);
//   }
// }
// printImportant("ERROR", "This is a message");
// function liveDangerously(x?: number | null) {
//   // No error
//   console.log(x!.toFixed());
// }
// const sym = Symbol();
// let obj = {
//   [sym]: "value",
// };
// console.log(obj[sym]); // "value"
function padLeft2(padding, input) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
