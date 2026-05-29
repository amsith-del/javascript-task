// const nested = [1, [2, [3, [4, [5]]]]];

// function flattenDeep(arr) {
//   let stack = [...arr];
//   let result = [];

//   while (stack.length > 0) {
//     let current = stack.pop();

//     if (Array.isArray(current)) {
//       for (let i = 0; i < current.length; i++) {
//         stack.push(current[i]);
//       }
//     } else {
//       result.push(current);
//     }
//   }

//   return result.reverse();
// }

// console.log(flattenDeep(nested));



// Task1.2
// function spiralMatrix(n) {
//   let matrix = Array.from({ length: n }, () => Array(n).fill(0));

//   let top = 0;
//   let bottom = n - 1;
//   let left = 0;
//   let right = n - 1;

//   let num = 1;

//   while (top <= bottom && left <= right) {

   
//     for (let i = left; i <= right; i++) {
//       matrix[top][i] = num++;
//     }
//     top++;

    
//     for (let i = top; i <= bottom; i++) {
//       matrix[i][right] = num++;
//     }
//     right--;

    
//     for (let i = right; i >= left; i--) {
//       matrix[bottom][i] = num++;
//     }
//     bottom--;

  
//     for (let i = bottom; i >= top; i--) {
//       matrix[i][left] = num++;
//     }
//     left++;
//   }

//   return matrix;
// }

// console.log(spiralMatrix(3));


// Task1.3

// Sequential async loop (no Promise.all)

// const ids = [1, 2, 3, 4, 5];

// async function getUsers() {

//   for (const id of ids) {

//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${id}`
//     );

//     const data = await response.json();

//     console.log(data);
//   }

// }

// getUsers();