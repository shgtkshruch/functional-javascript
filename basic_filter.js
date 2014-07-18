module.exports = getShortMessages

function getShortMessages (messages) {
  return messages.filter(function (item) {
    if (item.message.length < 50) return item
  }).map(function (item) {
    return item.message
  })
}
