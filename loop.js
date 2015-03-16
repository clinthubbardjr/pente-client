var use = document.createElement('use')
$(document).ready(function () {
  for (var i = 0; i <= 360; i++) {
    //var $use = $('<use x="'+i+'" y="'+i+'" xlink:href="#marker" />');
    // var $use = $('<circle  cx="10" cy="10" r="1" style="stroke:none; fill:black;" />')

    //console.log($use);
    // $('svg#grid').append($use);
    var doc = document.getElementById('grid');

    var use = document.createElement('use')
    use.setAttribute("x", i)
    use.setAttribute("y", i)
    doc.appendChild(use)
    use.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href','#marker')
  };


});
