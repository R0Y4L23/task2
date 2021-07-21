var waypoint = new Waypoint({
    element: document.getElementById('way1'),
    handler: function() {
        document.querySelector("#products").classList.remove("op-z")
        document.querySelector("#right").classList.add("rotate-in-2-bck-ccw")
        document.querySelector("#left").classList.add("rotate-in-2-bck-cw")
    }
  })
  var waypoint2 = new Waypoint({
    element: document.getElementById('way2'),
    handler: function() {
        document.querySelector("#technology").classList.remove("op-z")
        document.querySelector("#right-f").classList.add("rotate-in-2-bck-ccw")
        document.querySelector("#mid-f").classList.add("scale-in-center")
        document.querySelector("#left-f").classList.add("rotate-in-2-bck-cw")
    }
  })
  var waypoint3 = new Waypoint({
    element: document.getElementById('way3'),
    handler: function() {
        document.querySelector("#foot").classList.remove("op-z")
        document.querySelector("#right-ff").classList.add("rotate-in-2-bck-ccw")
        document.querySelector("#mid-ff").classList.add("scale-in-center")
        document.querySelector("#left-ff").classList.add("rotate-in-2-bck-cw")
    }
  })