# W-12150716
## The customer claims to have an issue with inserting values (numbers) in an LWC component

## Repro
- Clone repository and deploy to scratch org
- Open the scratch org
- Create a new Account
- On the Account Detail page, Details tab, scroll down to the datatable
- In the 3rd column (heading = END), inline edit the first cell
- Change the value to 1 or 2 (anything really, just change it)
- Without saving, click the inline edit pencil for a cell below it, in the same column
- See that the inline edit element retains the value entered above
- Now remove focus from the cell
- See that the value of the cell is set to the value previously entered
