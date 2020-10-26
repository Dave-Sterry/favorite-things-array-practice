$(document).ready(function() {
  $("#formOne").submit(function() {
    const favoriteThings = [];
    const favFood = $("input#favorite-food").val();
    const favBand = $("input#favorite-band").val();
    const favAnimal = $("input#favorite-animal").val();

    favoriteThings.push(favFood);
    favoriteThings.push(favBand);
    favoriteThings.push(favAnimal);

    event.preventDefault();
  });
});