# Service Explorer Tree Map

## What is it

[D3 Treemap](https://github.com/mbostock/d3/wiki/Treemap-Layout) visualisation to be used on the [Service Explorer](https://github.com/alphagov/service-explorer) project.

## How to use it

Given an HTML table annotated with `data-title` and `data-volume` attributes:

    <table>
      <tbody>
        <tr data-title="Service 1" data-volume="100">...</tr>
        <tr data-title="Service 2" data-volume="100">...</tr>
        <tr data-title="Service 3" data-volume="100">...</tr>        
      </tbody>
    </table>

The following script will convert the table into a tree and apply the tree map layout. 

    <script src="javascripts/d3.js"></script>
    <script src="javascripts/table-to-tree-map.js"></script>
    <script>
      var tree = Tree.fromHtmlTable(d3.selectAll("tbody tr"), 200);
      TreeMapLayout.display("services-treemap", tree);
    </script>
