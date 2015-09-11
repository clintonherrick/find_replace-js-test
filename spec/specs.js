describe('findReplace', function() {
  it('should search string for inputted word and replace it with a different word', function() {
    expect(findReplace("the dog is green", "dog", "monter")).to.eq("the monster is green");
  });
});
  
