function extractD3TreeMap(selection, thresholdRatio) {
  var values = selection[0].map(function (row) {
    return { 
      name: row.getAttribute("data-title"),
      size: parseInt(row.getAttribute("data-volume"))
    };
  });
  var largest = values.reduce(function (memo, v) {
    return (memo.size > v.size) ? memo : v;
  });
  var threshold = largest.size / thresholdRatio;
  var splitValues = values.reduce(function (memo, v) {
    if (v.size > threshold) {
      memo.keep.push(v)
    } else {
      memo.condense.push(v);
    }
    return memo;
  }, { keep: [], condense: [] });
  var otherValue = splitValues.condense.reduce(function (memo, v) {
    memo.size += v.size;
    return memo;
  });
  var children = splitValues.keep;
  children.push({
    name: "Others",
    size: otherValue.size
  });


  return { 
    name: "Service Explorer", 
    children: children
  };
}
