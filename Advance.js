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

// Task 3. Arrays

// function groupBy(arr, key) {
//   let result = {};

//   for (let item of arr) {
//     let groupKey = item[key];  

//     if (!result[groupKey]) {
//       result[groupKey] = [];  
//     }
//     result[groupKey].push(item);
//   }
//   return result;
// }

// console.log(groupBy([
//   { name: 'Ali', city: 'HYD' },
//   { name: 'Sara', city: 'MUM' },
//   { name: 'Raj', city: 'HYD' },
// ], 'city'));





// Subarray sum to K:

// function subarraySum(arr, k) {
//   let result = [];
//   let prefixMap = { 0: [-1] }; 
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     if (prefixMap[sum - k] !== undefined) {
//       for (let start of prefixMap[sum - k]) {
//         result.push(arr.slice(start + 1, i + 1));
//       }
//     }

//     if (!prefixMap[sum]) prefixMap[sum] = [];
//     prefixMap[sum].push(i);
//   }
//   return result;
// }

// console.log(subarraySum([1, 2, 3, 0, 3], 3));




// myReduce


// Array.prototype.myReduce = function(fn, init) {
//   let arr = this;


//   if (arr.length === 0 && init === undefined) {
//     throw new TypeError('Empty array with no initial value');
//   }

//   let acc = init !== undefined ? init : arr[0];
//   let start = init !== undefined ? 0 : 1;

//   for (let i = start; i < arr.length; i++) {
//     if (i in arr) {  
//       acc = fn(acc, arr[i], i, arr);
//     }
//   }
//   return acc;
// };

// console.log([1,2,3].myReduce((acc, x) => acc + x));
// console.log([1,2,3].myReduce((acc, x) => acc + x, 10)); 


//  Task4. Objects

// function deepClone(obj, visited = new WeakMap()) {

//   if (obj === null || typeof obj !== 'object') return obj;

//   if (visited.has(obj)) return visited.get(obj);

//   if (obj instanceof Date) return new Date(obj);

//   if (obj instanceof Set) {
//     let newSet = new Set();
//     visited.set(obj, newSet);
//     obj.forEach(val => newSet.add(deepClone(val, visited)));
//     return newSet;
//   }

//   if (obj instanceof Map) {
//     let newMap = new Map();
//     visited.set(obj, newMap);
//     obj.forEach((val, key) => newMap.set(key, deepClone(val, visited)));
//     return newMap;
//   }

//   if (Array.isArray(obj)) {
//     let newArr = [];
//     visited.set(obj, newArr);
//     for (let item of obj) newArr.push(deepClone(item, visited));
//     return newArr;
//   }

//   let newObj = {};
//   visited.set(obj, newObj);
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = deepClone(obj[key], visited);
//     }
//   }
//   return newObj;
// }


// const obj = {
//   a: 1,
//   b: { c: new Date(), d: new Set([1, 2]) },
//   circular: null
// };
// obj.circular = obj; 

// const clone = deepClone(obj);

// console.log(clone.a);                  
// console.log(clone.b.d);              
// console.log(clone === obj);            
// console.log(clone.b === obj.b);        
// console.log(clone.circular === clone); 






// Deep Diff:

// function deepDiff(a, b) {
//   let result = {};

//   for (let key in b) {
//     if (!(key in a)) {
//       result[key] = { added: b[key] };  
//     } else if (typeof a[key] === 'object' && typeof b[key] === 'object') {
//       let nested = deepDiff(a[key], b[key]);
//       if (Object.keys(nested).length > 0) result[key] = nested;
//     } else if (a[key] !== b[key]) {
//       result[key] = { from: a[key], to: b[key] }; 
//     }
//   }


//   for (let key in a) {
//     if (!(key in b)) {
//       result[key] = { removed: a[key] };
//     }
//   }
//   return result;
// }

// console.log(deepDiff(
//   { x: 1, y: { z: 2 } },
//   { x: 1, y: { z: 3 }, w: 4 }
// ));




// Flatten and Unflatten


// function flatten(obj, prefix = '', result = {}) {
//   for (let key in obj) {
//     let newKey = prefix ? `${prefix}.${key}` : key;

//     if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
//       flatten(obj[key], newKey, result);
//     } else {
//       result[newKey] = obj[key];
//     }
//   }
//   return result;
// }

// function unflatten(obj) {
//   let result = {};
//   for (let key in obj) {
//     let parts = key.split('.');
//     let current = result;

//     for (let i = 0; i < parts.length - 1; i++) {
//       if (!current[parts[i]]) current[parts[i]] = {};
//       current = current[parts[i]];
//     }
//     current[parts[parts.length - 1]] = obj[key];
//   }
//   return result;
// }

// console.log(flatten({ a: { b: { c: 1 } } })); 
// console.log(unflatten({ 'a.b.c': 1 })); 




// Task5. Fetch
// Fetch with retry


// async function fetchWithRetry(url, { retries = 3 }) {
//   let delay = 500;

//   for (let i = 0; i < retries; i++) {
//     try {
//       let response = await fetch(url);
//       if (!response.ok) throw new Error('Request failed');
//       return response;
//     } catch (err) {
//       if (i === retries - 1) throw new Error('All retries failed');
//       await new Promise(resolve => setTimeout(resolve, delay));
//       delay *= 2;  // 500 → 1000 → 2000
//     }
//   }
// }


// fetchWithRetry('https://jsonplaceholder.typicode.com/users/1', { retries: 3 })
//   .then(res => res.json())
//   .then(data => console.log('Success:', data.name))
//   .catch(err => console.log('Error:', err.message));


// fetchWithRetry('https://invalid-url-test.com', { retries: 3 })
//   .then(res => console.log('Success'))
//   .catch(err => console.log('Error after retries:', err.message));



// Fetch with timeout:

// function fetchWithTimeout(url, ms) {
//   let fetchPromise = fetch(url);

//   let timeoutPromise = new Promise((_, reject) =>
//     setTimeout(() => reject(new Error('Request timed out')), ms)
//   );

//   return Promise.race([fetchPromise, timeoutPromise]);
// }

// fetchWithTimeout('https://jsonplaceholder.typicode.com/users/1', 3000)
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message));






// Fetch all pages:

// async function fetchAllPages() {
//   let page = 1;
//   let allUsers = [];

//   while (true) {
//     const response = await fetch(
//       `https://reqres.in/api/users?page=${page}`
//     );

//     const result = await response.json();

//     allUsers = [...allUsers, ...result.data];

//     if (page >= result.total_pages) {
//       break;
//     }

//     page++;
//   }

//   return allUsers;
// }

// fetchAllPages()
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.error(error);
//   });



// Task6 localStorage with TTL

// const storage = {
//   setItem(key, value, ttl) {
//     const data = {
//       value: value,
//       expiry: Date.now() + ttl,
//     };

//     localStorage.setItem(key, JSON.stringify(data));
//   },

//   getItem(key) {
//     const item = localStorage.getItem(key);

//     if (!item) return null;

//     const data = JSON.parse(item);

//     if (Date.now() > data.expiry) {
//       localStorage.removeItem(key);
//       return null;
//     }

//     return data.value;
//   },
// };


// storage.setItem("token", "abc123", 60000);

// console.log(storage.getItem("token"));








// Cross-tab State Sync via localStorage


// const countElement = document.getElementById("count");


// countElement.textContent =
//   localStorage.getItem("counter") || 0;


// function incrementCounter() {
//   let count =
//     Number(localStorage.getItem("counter")) || 0;

//   count++;

//   localStorage.setItem("counter", count);

//   countElement.textContent = count;
// }


// window.addEventListener("storage", (e) => {
//   if (e.key === "counter") {
//     countElement.textContent = e.newValue;
//   }
// });





// sessionStorage Shopping Cart


// const cart = {
//   getAll() {
//     return JSON.parse(sessionStorage.getItem("cart")) || [];
//   },

//   save(items) {
//     sessionStorage.setItem("cart", JSON.stringify(items));
//   },

//   add(product) {
//     let items = this.getAll();

//     const existing = items.find(
//       (item) => item.id === product.id
//     );

//     if (existing) {
//       existing.qty++;
//     } else {
//       items.push({
//         ...product,
//         qty: 1,
//       });
//     }

//     this.save(items);
//   },

//   remove(id) {
//     let items = this.getAll();

//     items = items.filter(
//       (item) => item.id !== id
//     );

//     this.save(items);
//   },

//   total() {
//     const items = this.getAll();

//     return items.reduce(
//       (sum, item) =>
//         sum + item.price * item.qty,
//       0
//     );
//   },
// };

// cart.add({
//   id: 1,
//   name: "Shirt",
//   price: 499,
// });

// cart.add({
//   id: 1,
//   name: "Shirt",
//   price: 499,
// });

// console.log(cart.getAll());
// console.log(cart.total());









// Task7.1 Longest Palindromic Substring



// function expandFromCenter(str, left, right) {
//   while (
//     left >= 0 &&
//     right < str.length &&
//     str[left] === str[right]
//   ) {
//     left--;
//     right++;
//   }

//   return str.slice(left + 1, right);
// }

// function longestPalindrome(str) {
//   let longest = "";

//   for (let i = 0; i < str.length; i++) {
//     let odd = expandFromCenter(str, i, i);

//     let even = expandFromCenter(str, i, i + 1);

//     if (odd.length > longest.length) {
//       longest = odd;
//     }

//     if (even.length > longest.length) {
//       longest = even;
//     }
//   }

//   return longest;
// }

// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("racecar"));
// console.log(longestPalindrome("abacaba"));


// 7.2 Template Literal Engine


// function render(template, data) {
//   return template.replace(
//     /{{(.*?)}}/g,
//     (match, key) => {
//       key = key.trim();

//       return key in data
//         ? data[key]
//         : `[missing:${key}]`;
//     }
//   );
// }

// console.log(
//   render(
//     "Hello {{name}}, {{count}} msgs",
//     {
//       name: "Arjun",
//       count: 5,
//     }
//   )
// );

// console.log(
//   render(
//     "Hi {{name}}, age {{age}}",
//     {
//       name: "Ali",
//     }
//   )
// );





// 7.3 Group Anagrams


// function groupAnagrams(words) {
//   const map = {};

//   for (let word of words) {
//     const key = word
//       .split("")
//       .sort()
//       .join("");

//     if (!map[key]) {
//       map[key] = [];
//     }

//     map[key].push(word);
//   }

//   return Object.values(map);
// }

// console.log(
//   groupAnagrams([
//     "eat",
//     "tea",
//     "tan",
//     "ate",
//     "nat",
//     "bat",
//   ])
// );