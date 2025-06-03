const recursionDescending = (n) => {
  if (n === 0) return;
  console.log(n);
  recursionDescending(n - 1);
};

const recursionAscending = (n) => {
  if (n === 0) return;
  recursionAscending(n - 1);
  console.log(n);
};

const n = 5;

recursionDescending(n);
recursionAscending(n);
