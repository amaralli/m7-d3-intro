// Main JavaScript File

// Data objects to work with
var people = [
  {name:'Edgar', favColor:'Green'},
  {name:'Rashmi', favColor:'Blue'},
  {name:'Amelia', favColor:'#000000'},
];

var people2 = [
  {name:'Edgar', favColor:'Green'},
  {name:'Amelia', favColor:'#000000'},
];

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
  // Create a varaible myDiv by selecting the element with id my-div (this is already created for you).
  var myDiv = d3.select("#my-div");
  console.log(myDiv)


  var gatherData = function(data) {
   var dataSet = myDiv.selectAll("p")
      .data(data, function(d) {
        return d.name
      });

   dataSet.enter()
    .append('p')
    .text(function(d) {
      console.log(d.name)
      return d.name
    })
    .style('color', function(d) {
      console.log(d.favColor)
      return d.favColor
    });

    dataSet.exit().remove();
}
  

  gatherData(people);

  setTimeout(function() {
    gatherData(people2);
  }, 3000);

  





  // Create a variable `paragraphs` by selecting all  `p` elements in  `myDiv`, and binding you data  `people` to it.
  // Make sure to specify the `name` attribute as an identifying characteristic in your data-join.



  // Add a paragraph to the div for each person in your dataset following instructions in the index.html file


  // Use `setTimeout` function to wait 3 seconds, then do the following

    // Re-define your variable `paragraphs` by selecting all `p` elements in `myDiv`, and binding the data `people2` to it.
    // Make sure to specify the `name` attribute as an identifying characteristic in your data-join.


    // Determine which people are no longer represented in the data (`exit`), and transition their opacity to 0 and remove them.

});


