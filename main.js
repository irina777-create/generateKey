//Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
const characters  = 'abcdefshiiklmnonarstuwwxyz0123456789';
const key = genereteKey(length:16, characters);
function generatekey (legth, characters) {
    let key = '';
    const charactersLength = characters.length;
    for (let i: number = 0; 1 < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);

        key += characters.charAt(randomIndex);
    }
    return key;
}
console.log(key);
