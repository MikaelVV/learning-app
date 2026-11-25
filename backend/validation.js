
function isValidConfidence(value) {
  return Number.isInteger(value) && value >= 1 && value <= 5;
}

function isValidTopic(value) {
  return typeof value === "string" && value.trim().length > 0;
}

module.exports = {
  isValidConfidence,
  isValidTopic
};
