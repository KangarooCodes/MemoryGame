const add  = function (a, b) {
     return a + b
}

describe("addition", function() {
     it("expects 2 plus 2 to be 4", function() {
          expect(add(2,2) === 4, true)
     })
})