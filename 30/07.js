console.log(Date.parse('Jan 2, 1970 00:00:00 UTC') === 86_400_000);
console.log(Date.parse('Jan 2, 1970 09:00:00') === 86_400_000);
console.log(Date.parse('1970/01/02/09:00:00') === 86_400_000);
