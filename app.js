// Q1
function reverseNumber(num) {
  let reversed = num.toString().split("").reverse().join("");
  return parseInt(reversed);
}
console.log(reverseNumber(532443));
// نحول الرقم إلى سلسلة (toString()).
// نقسم السلسلة إلى مصفوفة باستخدام (split('')).
// نعكس ترتيب المصفوفة باستخدام (reverse()).
// نعيد العناصر معًا كسلسلة باستخدام (join('')).
// نحول الناتج النهائي إلى رقم باستخدام (parseInt()).
// Q1

// Q2
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
// نستخدم حلقة for تبدأ من 0 وتنتهي عند 15.
// لكل عدد:
// نتحقق إذا كان العدد يقبل القسمة على 2 بدون باقي (i % 2 === 0).
// إذا كان صحيحًا، فهو زوجي.
// إذا كان غير ذلك، فهو فردي.
// نطبع النتيجة باستخدام console.log().
// Q2


// Q3
function sortLetters(str) {
  return str.toLowerCase().split("").sort().join("");
}
console.log(sortLetters("Orange"));
// نحول النص إلى حروف صغيرة باستخدام (toLowerCase()).
// نقسم النص إلى مصفوفة باستخدام (split('')).
// نرتب العناصر أبجديًا باستخدام (sort()).
// نعيد دمج العناصر إلى نص باستخدام (join('')).
// Q3


// Q4
function insertDashes(num) {
    let digits = num.toString().split('');
    let result = [];
     for (let i = 0; i < digits.length; i++) {
        result.push(digits[i]);
        if (digits[i] % 2 === 0 && digits[i + 1] % 2 === 0) {
            result.push('-');
        }
    }
    return result.join('');
}
console.log(insertDashes(025468));
// نحول الرقم إلى سلسلة ثم إلى مصفوفة باستخدام (split('')).
// نستخدم حلقة for للمرور على كل رقم:
// نضيف الرقم إلى النتيجة.
// إذا كان الرقم الحالي والرقم التالي زوجيين، نضيف شرطة.
// نعيد دمج العناصر إلى نص باستخدام (join('')).
// Q4


// Q5
function ageChecker(age) {
    return age >= 18 ? "The user is Adult" : "The user is Minor";
}
console.log(ageChecker(20)); 
console.log(ageChecker(15)); 
// نستخدم المشغل الثلاثي (Ternary Operator) لفحص العمر:
// إذا كان العمر أكبر أو يساوي 18، النتيجة "The user is Adult".
// إذا كان أقل، النتيجة "The user is Minor".
// نطبع النتيجة باستخدام console.log().
// Q5


