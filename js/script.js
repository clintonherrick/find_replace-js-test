var findReplace = function(string, searchvalue, newvalue) {
  return string.replace(searchvalue, newvalue);
};

$(function() {
  $("form#replace-form").submit(function(event) {
    var sentence = $('input#sentence').val();
    var changeWord = $('input#change-word').val();
    var newWord = $('input#new-word').val();
    var results = findReplace(sentence, changeWord, newWord);

    $("#new-sentence").text(results);

    $("#result").show();

    event.preventDefault();
  });
});
