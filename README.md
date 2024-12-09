# Unhandled undefined balance in balanceOf function

This repository demonstrates a common error in Dapps: failing to handle undefined balances when accessing account balances.  The `balanceOf` function doesn't check if `this.balances[account]` exists before returning it, which can cause errors if an account doesn't have a balance.  The solution involves adding a check for `undefined` and returning 0 or handling the error appropriately.
