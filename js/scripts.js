$(document).ready(function() {
  $("#formOne").submit(function() {
    const favoriteThings = [];
    favoriteThings.push($("input#favorite-food").val());
    favoriteThings.push($("input#favorite-band").val());
    favoriteThings.push($("input#favorite-animal").val());
    
    
    const newFav = [];
    newFav.push(favoriteThings[2]);
    newFav.push(favoriteThings[0]);
    newFav.push(favoriteThings[1]);
    console.log(newFav);

    event.preventDefault();
  });
});
const favFood = $("insput#favorite-food").val());
const favoriteThings = [favfood, favBand, favAnimal]