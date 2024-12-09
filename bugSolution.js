```javascript
function balanceOf(account) {
  const balance = this.balances[account];
  // Check if balance is undefined and return 0 if so
  return balance === undefined ? 0 : balance;
}
```