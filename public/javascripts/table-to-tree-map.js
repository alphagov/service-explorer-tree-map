function extractD3TreeMap(selection) {
  var values = selection[0].map(function (row) {
    return { 
      name: row.getAttribute("data-title"),
      size: parseInt(row.getAttribute("data-volume"))
    };
  });
  var largest = values.reduce(function (memo, v) {
    return (memo > v) ? memo : v;
  });
  var threshold = largest / 200;
  var splitValues = values.reduce(function (memo, v) {
    if (v.size > threshold) {
      memo.keep.push(v)
    } else {
      memo.condense.push(v);
    }
  }, { keep: [], condense: [] });
  var otherValue = splitValues.condense.reduce(function (memo, v) {
    return memo + v;
  });
  var children = splitValues.keep;
  children.push(otherValue);


  return { 
    name: "Service Explorer", 
    children: children
  };
}
