function findMissingNumber(arr) {
  // Mencari bilangan cacah terkecil yang tidak ada dalam array
  let smallestNumber = Math.min(...arr); // Mencari bilangan terkecil dalam array
  let largestNumber = Math.max(...arr); // Mencari bilangan terbesar dalam array

  for (let i = smallestNumber; i <= largestNumber; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }

  // Jika tidak ditemukan bilangan yang hilang, maka bilangan selanjutnya setelah terbesar adalah bilangan yang hilang
  return largestNumber + 1;
}

// Contoh penggunaan fungsi
const input1 = [5, 2, 8, 4, 3, 10];
const output1 = findMissingNumber(input1);
console.log(output1); // Output: 6

const input2 = [2, 3, 4, 6];
const output2 = findMissingNumber(input2);
console.log(output2); // Output: 5

const input3 = [8, 6, 7, 12];
const output3 = findMissingNumber(input3);
console.log(output3); // Output: 9
