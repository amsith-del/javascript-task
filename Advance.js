const nested = [1, [2, [3, [4, [5]]]]];

function flattenDeep(arr) {
  let stack = [...arr];
  let result = [];

  while (stack.length > 0) {
    let current = stack.pop();

    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        stack.push(current[i]);
      }
    } else {
      result.push(current);
    }
  }

  return result.reverse();
}

console.log(flattenDeep(nested));

