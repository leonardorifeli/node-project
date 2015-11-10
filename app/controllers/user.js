module.exports = function(){
    var controller = {};

    var user = [
        {_id: 1, name: "Leonardo Rifeli", email: "leonardorifeli@gmail.com"},
        {_id: 2, name: "Wab", email: "leonardo@wab.com.br"}
    ];

    controller.list = function(req, res){
        res.json(user);
    };

    return controller;
}
