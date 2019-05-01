const fetch = require('node-fetch');

// - hits > recipe > label, image, source, url, shareAs, yield, ingredientLines, calories
// - hits > recipe > digest > Fat, Carbs, Protein

const searchController = (req, res, next) => {
  const searchQuery = req.body.search;
  const appId = 'fbb346fc';//'f8182a87';
  const appKey = 'cca5447692c13f5353e4d07602c1b26d';//'5f5f6bf45e7dd3b097216f12c9208fbb';
  const apiUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${appKey}&from=0&to=16`;


  fetch(apiUrl)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      const recipeObjs = [];
      for (let i = 0; i < myJson.hits.length; i++) {
        const curr = myJson.hits[i].recipe;
        const returnObj = {
          label: curr.label,
          image: curr.image,
          source: curr.source,
          url: curr.url,
          shareAs: curr.shareAs,
          yield: curr.yield,
          ingredientLines: curr.ingredientLines,
          calories: Math.floor(curr.calories),
          fats: Math.floor(curr.digest[0].total),
          carbs: Math.floor(curr.digest[1].total),
          protein: Math.floor(curr.digest[2].total)
        }
        recipeObjs.push(returnObj);
      }

      res.locals.apiData = recipeObjs
      return next()
    }).catch(err => res.locals.err = err)
}

module.exports = searchController;
