var halp = require("./")
var assert = require("assert")

describe("halp", function () {
  it("should math", function () {
    assert.equal(
      halp.weeks(1),

      halp.days(4) +
      halp.hours(24) +
      halp.minutes(60) * 24 +
      halp.seconds(60) * 60 * 24
    )
  })
})