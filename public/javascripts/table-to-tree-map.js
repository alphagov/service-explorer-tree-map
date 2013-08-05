var TreeMap = (function () {

  var valuesFrom = function(selection) {
    return selection[0].map(function (row) {
      return { 
        name: row.getAttribute("data-title"),
        size: parseInt(row.getAttribute("data-volume"))
      };
    });
  };

  var max = function (memo, v) {
    return (memo.size > v.size) ? memo : v;
  };

  var sum = function (memo, v) {
    memo.size += v.size;
    return memo;
  };

  var partition = function(col, partitionFunction) {
    return col.reduce(function (memo, v) {
      if (partitionFunction(v)) {
        memo.left.push(v)
      } else {
        memo.right.push(v);
      }
      return memo;
    }, { left: [], right: [] });
  };

  var condenseValuesUnderThreshold = function(values, thresholdRatio) {
    var threshold = values.reduce(max).size / thresholdRatio;
    var splitValues = partition(values, function (v) { return v.size > threshold; });
    var children = splitValues.left;
    var otherValue = splitValues.right.reduce(sum);
    children.push({
      name: "Others",
      size: otherValue.size
    });
    return children; 
  };
  
  return {
    extractD3TreeMap: function(selection, thresholdRatio) {
      var values = valuesFrom(selection);

      return { 
        name: "Service Explorer", 
        children: condenseValuesUnderThreshold(values, thresholdRatio)
      };
    }
  }

}());
