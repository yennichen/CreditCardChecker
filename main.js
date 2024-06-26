// All valid credit card numbers...
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// To return true when an array contains digits of a valid credit card number and false when it is invalid. Use the Luhn algorithm.
const validateCard = arr => {
    const len = arr.length;
    //console.log(arr.length);..
    let resultNum = [];
    let count=1; //odd-even index pointer

    for (let i=len-2; i>=0; i--) {
        //console.log(`Location: ${i}, Value: ${arr[i]}`);
        if (count == 1) {
            if (arr[i] * 2 > 9) {
                resultNum.push(arr[i] * 2 - 9);
            } else {
                resultNum.push(arr[i] * 2);
            }
            count = 0;
        } else {
            resultNum.push(arr[i]);
            count = 1;
        }
        //console.log(resultNum);
          
    }

    //Sum up
    let sum = arr[len-1]; //checked number
    resultNum.forEach(num => {
        sum += num;
    });
    //console.log(sum);
    //console.log((10 - (sum % 10)) % 10);
    //console.log(sum % 10);
    //console.log( sum % 10 === 0 ? "true":"false");
    return sum % 10 ? true:false;
}

//To identify credit card companies
const idInvalidCardCompanies = arr => {
    const companies = [
        {digit:3, company:'Amex (American Express)'},
        {digit:4, company:'Visa'},
        {digit:5, company:'Mastercard'},
        {digit:6, company:'Discover'},
    ];
    
    const invalidCompanies = [];

    arr.forEach(card => {
        const firstDigit = card[0];
        console.log(`firstDigit: ${card[0]}`);
        const foundCompany = companies.find(com => com.digit === firstDigit);
        //const foundCompany = companies.find(company => company.digits === firstDigit);
        console.log(`foundCompany: ${foundCompany}`);

        if (foundCompany) {
            invalidCompanies.push(foundCompany.company);
        }
    })

    //Remove repeated companies
    console.log(Array.from(new Set(invalidCompanies)));
    return Array.from(new Set(invalidCompanies));
}

//To find invalid card numbers
const findInvalidCards = arr => {
    let invalidCards = [];
    arr.forEach(card => {
        if (!validateCard(card)) {
            invalidCards.push(card);
        };
    } );
    console.log(invalidCards);
    //idInvalidCardCompanies(invalidCards);
    return invalidCards;
}

idInvalidCardCompanies([mystery1,mystery2,mystery3,mystery4,mystery5]);






