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
// var LogLevel;
// (function (LogLevel) {
//     LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
//     LogLevel[LogLevel["WARN"] = 1] = "WARN";
//     LogLevel[LogLevel["INFO"] = 2] = "INFO";
//     LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
// })(LogLevel || (LogLevel = {}));
// function printImportant(key, message) {
//     var num = LogLevel[key];
//     if (num <= LogLevel.WARN) {
//         console.log("Log level key is:", key);
//         console.log("Log level value is:", num);
//         console.log("Log level message is:", message);
//     }
// }
// printImportant("ERROR", "This is a message");
