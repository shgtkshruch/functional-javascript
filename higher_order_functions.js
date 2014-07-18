module.exports = repeat

function repeat (operation, num) {
  if (num === 0) return
  operation()
  repeat(operation, --num)
}
