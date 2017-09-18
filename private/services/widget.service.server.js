module.exports = function(app, models) {
    var widgetModel = models.widgetModel;

    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);

    function createWidget(req, res){
        var pageId = req.params.pageId;
        var newWidget = req.body;
        widgetModel
            .createWidget(pageId,newWidget)
            .then(
                function(widget) {
                    res.json(widget);
                },
                function(error) {
                    res.status(400).send("Username " + newUser.username + " is already in use");
                }
            );
    }
    function findAllWidgetsForPage(req, res){
        var pageId = req.params.pageId;
        widgetModel
            .findAllWidgetsForPage(pageId)
            .then(
                function (widgets) {
                    res.json(widgets);
                },
                function (error) {
                    res.status(404).send(error);
                }
            );
    }
    function findWidgetById(req, res){
        var id = req.params.widgets;
        for(var i in widgets) {
            if(widgets[i]._id === id) {
                res.send(widgets[i]);
                return;
            }
        }
        res.send({});
    }
    function updateWidget(req, res){

    }
    function deleteWidget(req, res){
        var id = req.params.widgets;
        for(var i in widgets) {
            if (widgets[i]._id === id) {
                widgets.splice(i, 1);
                res.send(200);
                return;
            }
        }
        res.send(400);
    }

};