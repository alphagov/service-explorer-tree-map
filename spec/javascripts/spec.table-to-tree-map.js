describe("Table To Treemap", function () {

  beforeEach(function () {
    table = d3.select("body").append("table").append("tbody");
    table.append("tr").attr("data-title", "service1").attr("data-volume", "1000");
    table.append("tr").attr("data-title", "service2").attr("data-volume", "2000");
    table.append("tr").attr("data-title", "service3").attr("data-volume", "3000");
    table.append("tr").attr("data-title", "service4").attr("data-volume", "1");
    table.append("tr").attr("data-title", "service5").attr("data-volume", "10");
    table.append("tr").attr("data-title", "service6").attr("data-volume", "19");
  });

  afterEach(function () {;
    d3.selectAll("table").data([]).exit().remove();
  });

  it("should convert html table to d3 treemap representation", function () {
    var treeMap = TreeMap.extractD3TreeMap(d3.selectAll("tbody tr"), 20);
    
    expect(treeMap.name).toBe("Service Explorer");
    expect(treeMap.children[0].name).toBe("service1");
    expect(treeMap.children[0].size).toBe(1000);
    expect(treeMap.children[1].name).toBe("service2");
    expect(treeMap.children[1].size).toBe(2000);
    expect(treeMap.children[2].name).toBe("service3");
    expect(treeMap.children[2].size).toBe(3000);
  });

  it("should group values lower than a threshold", function () {
    var treeMap = TreeMap.extractD3TreeMap(d3.selectAll("tbody tr"), 20);

    console.log(treeMap);
    expect(treeMap.children[3].name).toBe("Others");
    expect(treeMap.children[3].size).toBe(30);
  });

});
