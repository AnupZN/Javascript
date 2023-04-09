// $(document).ready(function() {
//    var heading= $(".main-div").find("p");
//    var tocContainer = $('<div class="toc-container"></div>');
//     heading.each(function (index) {
//         // element == this
//         var t1= $(this).text()
//         console.log(t1.split(" ").join("-"));
//         console.log($(this).prop('tagName'));
        
//     });
//   });
  









$(document).ready(function() {
  // Find all headings within the entry-content div
  var headings = $('.entry-content').find('h1, h2, h3, h4, h5, h6');
  
  // Create a container for the table of contents and add it to the page
  var tocContainer = $('<div class="toc-container"></div>');
  var tocList
  $('.entry-content').prepend(tocContainer);
  
  // Loop through each heading and create a table of contents item with a scroll link
  headings.each(function(index) {
    // Get the heading text and level
    var headingText = $(this).text();
    var headingLevel = $(this).prop('tagName').toLowerCase();
    
    // Create a unique ID for the heading to use in the scroll link
    var headingId = 'heading-' + index;
    $(this).attr('id', headingId);
    
    // Create the table of contents item with a link to the heading
    var tocItem = $('<a class="toc-link toc-' + headingLevel + '" href="#' + headingId + '">' + headingText + '</a>');
    
    // Add the table of contents item to the container
    tocContainer.append(tocItem);
    
  });
});




