describe("7. About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
      { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
      { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
      { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
      { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
      { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
      if (products[i].containsNuts === false) {
        hasMushrooms = false;
        for (j = 0; j < products[i].ingredients.length; j+=1) {
          if (products[i].ingredients[j] === "mushrooms") {
            hasMushrooms = true;
          }
        }
        if (!hasMushrooms) productsICanEat.push(products[i]);
      }
    }

    expect(productsICanEat.length).toBe(FILL_ME_IN);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

    var productsICanEat = [];

    /* solve using filter() & some() / every() */

    expect(productsICanEat.length).toBe(FILL_ME_IN);
  });
  /*********************************************************************************/

  // EXTRA CHALLENGES
  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    var isPalidrome = function(item) {
      // a palindrome is a string that is the same forwards and backwards
      return FILL_ME_IN;
    };

    var largestPalidrome = function() {
      var listOfAllThreeDigitNumbers = [FILL_ME_IN];
      return FILL_ME_IN;
    }();

    expect(largestPalidrome()).toBe(906609);
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {

  });

  it("should find the 10001st prime", function () {

  });
});
