<!-- ISSUE REVIEW -->
- Location: line 8
- Issue : items isnt exported
- Explanation : tests wont be able to reach this
- Suggested fix : export const ITEMS = []
- Status: fixed

- Location: line 12
- Issue : The extra coma creates an empty array element
- Explanation : Js doesnt allow a standalone comma b/w elements, this breaks the array structure
- Suggested fix : remove the extra coma
- Status: fixed

- Location: line 17
- Issue : it uses = instead of :
- Explanation: object properties must use key: value syntax
- Suggested fix : const newItem = { name, price };
- Status: fixed

- Location : line 21
- Issue: has quotation marks making it seach for the literal string "name"
- Explanation: indexOf should be searching for primitive values, not object properties
- Suggested fix: const idx = ITEMS.findIndex(item => item.name === name);
- Status: fixed

- Location: line 23
- Issue: will remove the last item not the idx
- Explanation: pop removed last element
- Suggested fix: if (idx !== -1) {
  ITEMS.splice(idx, 1);
}
- Status: fixed

- Location: 27
- Issue: naming confusion
- Explanation: its called total but total should be calculated with tax 
- Suggested fix: rename to Subtotal and create seperate funtion that adds tax
- Status: fixed

- Location: line 28
- Issue: incorrectly loops, total isnt declared
- Explanation:  iterate over the array instead
- Suggested fix: use Items in for loop to iterate through itm have a subtotal value 
- Status: fixed

- Location: 34
- Issue : calculates tax wrong
- Explanation: should be multiplying not adding
- Suggested fix subtotal() * taxRate
- Status: fixed

- Location line 43 to 50
- Issue: incorrect use of ' should use `
- Explanation: ` is used for the formating also ITEMS[i][name] uses an undefined variable name.
- Suggested fix replace it with `
- Status: fixed

- Root cause: using = instead of :
- Error:  const newItem = {"name" = name}
- Defect: deleteItem()
- Failure: deleteItem() would end up deleting the last object in the list not the wanted object

<!-- THINGS I KINDA MISSED -->
  20:28  error  'name' is defined but never used          @typescript-eslint/no-unused-vars
  21:9   error  'idx' is assigned a value but never used  @typescript-eslint/no-unused-vars