```javascript
function balanceOf(account) {
  const balance = this.balances[account];
  // Missing check for undefined balance
  return balance;
}
```