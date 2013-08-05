describe("Table To Treemap", function () {

  beforeEach(function () {
    table = d3.select("body").append("table").append("tbody");
    table.append("tr").attr("data-title", "service1").attr("data-volume", "100");
    table.append("tr").attr("data-title", "service2").attr("data-volume", "200");
    table.append("tr").attr("data-title", "service3").attr("data-volume", "300");
  });

  afterEach(function () {
  });

  it("should convert html table to d3 treemap representation", function () {
    var treeMap = extractD3TreeMap(d3.selectAll("tbody tr"));
    
    expect(treeMap.name).toBe("Service Explorer");
    expect(treeMap.children[0].name).toBe("service1");
    expect(treeMap.children[0].size).toBe(100);
    expect(treeMap.children[1].name).toBe("service2");
    expect(treeMap.children[1].size).toBe(200);
    expect(treeMap.children[2].name).toBe("service3");
    expect(treeMap.children[2].size).toBe(300);
  });

});
