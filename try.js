const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];

let sum = 0;
for (let i = valid1.length - 2; i >= 0; i -= 2) {
    let doubled = valid1[i] * 2;
    if (doubled > 9) {
        doubled -= 9;
    }
    console.log(`Location: ${i}: ${doubled}`);
    sum += doubled;
}

for (let i = valid1.length - 1; i >= 0; i -= 2) {
    console.log(`Location (no changes): ${i}: ${valid1[i]}`);
    sum += valid1[i];
}

console.log(sum);

const isValid = sum % 10 === 0;

console.log(isValid ? "這是有效的信用卡號碼。" : "這是無效的信用卡號碼。");
