describe("Place", function() {
  it("returns the country of a place", function() {
    var rushmore = new Place("USA", "Keystone", "National monument about presidents", 2010, 7, 15, ["Andrew", "Patty", "Vern"]);
    expect(rushmore['country']).to.eql("USA");
  });
});
