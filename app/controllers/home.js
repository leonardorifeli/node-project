module.exports = function(){
    var controller = {};
    controller.index = function(req, res){
        res.render("index", {name: "Leonardo Rifeli"})
    };
    return controller;
}
