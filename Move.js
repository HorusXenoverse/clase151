AFRAME.registerComponent("movement",
{schema: {
    move : {type : "number", default : 1}
},
tick : function(){
    this.data.move = this.data.move + 0.1
    var initialPosition = this.el.getAttribute("position")
    initialPosition.x = this.data.move
    initialPosition.y = this.data.move
    this.el.setAttribute("position", {x : initialPosition.x, y : initialPosition.y, z : initialPosition.z })
}
}

)