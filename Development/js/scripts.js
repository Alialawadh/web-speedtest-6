// قم بإنشاء الدوال التالية

/*
 * greet(name) اسم الدالة
 * - name قد تستقبل وقد لا تستقبل
 * - name إن لم تستقبل اسم أو "Hello" تطبع
 * - name إن استقبلت اسم أو "Hello <name>" تطبع
 */

let anything = "hello";

function greet(name) {
  if (name) {
    anything += name;
    console.log(anything);
  } else {
    console.log("hello ");
  }
}

greet();
greet(ali);
/*
 * isOdd(n) اسم الدالة
 * - n تستقبل رقم
 * - عدا ذلك false إن كان الرقم فردياً وترجع true ترجع القيمة
 */

let n = parseInt(prompt("اختر عدد"));

function isOdd(n) {
  if (n % 2 == 1) {
    console.log("true");
  } else {
    console.log("false");
  }
}

isOdd();
