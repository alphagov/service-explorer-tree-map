function extractD3TreeMap(selection) {
  return { 
    name: "Service Explorer", 
    children: selection[0].map(function (row) {
      return { 
        name: row.getAttribute("data-title"),
        size: parseInt(row.getAttribute("data-volume"))
      };
    })
  };
}
