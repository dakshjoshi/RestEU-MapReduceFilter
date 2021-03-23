var data = fetch(`https://restcountries.eu/rest/v2/all`);

data
  .then((a) => {
    return a.json();
  })
  .then((a) => {
    // Countries with region Asia
    var asia = a.filter((c) => c.region == `Asia`);
    console.log(asia);
    return a;
  })
  .then((a) => {
    //Countries with population less than 2,00,000
    var pop = a.filter((p) => p.population < 200000);
    console.log(pop);
    return a;
  })
  .then((a) => {
    //Countries with their  name, capital and flag
    // var arr = [];
    a.forEach((m) => console.log(m.name, m.capital, m.flag));
    return a;
  })
  .then((a) => {
    //Summation of all country population
    var sum = a
      .map((x) => x.population)
      .reduce((a, b) => {
        return a + b;
      }, 0);

    console.log(sum);
    return a;
  })
  .then((a) => {
    //Countries with currency as US Dollar
    var currency = a.filter(
      (c) => c.currencies[0].name == `United States dollar`
    );
    console.log(currency);
  })
  .catch((err) => {
    return err;
  });
