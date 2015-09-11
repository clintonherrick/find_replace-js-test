describe('findReplace', function() {
  it('should search string for inputted word and replace it with a different word', function() {
    expect(findReplace("there is the great Chachapoyan Fertility Idol", "Chachapoyan Fertility Idol", "sandbag")).to.eq("There is the great sandbag");
  });
});
