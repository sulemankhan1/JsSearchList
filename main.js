// getting input element
let filterInput = document.getElementById("filterInput")


// Adding Event Listener
filterInput.addEventListener('keyup',filterNames)


function filterNames() {
  // Getting value of input
  let filterVal = document.getElementById("filterInput").value.toUpperCase()

  // getting (ul) list
  let ul = document.getElementById("names")

  // getting li's from ul
  let li = ul.querySelectorAll('li.collection-item')

  // loop through each List item (li)
  li.forEach(function(elem, index){

    // get the anchor tag (a) from li , elem is = li
    let a = elem.getElementsByTagName('a')[0]

    // match
    if(a.innerHTML.toUpperCase().indexOf(filterVal) > -1) { // "indexOf" returns index if found(which is>0) & if not found returns -1
      // match found
      elem.style.display = ''
    } else {
      // match Not found
      elem.style.display = 'none'
    }
  })


}
