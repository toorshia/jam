Ext.define("JAM.view.Get", {
    extend : 'Ext.Panel',

    config : {
        id : 'get',
        layout : 'fit',
        cls : 'x-JAM-jar',
        scrollable : true
    },

    initialize : function() {
        var content = {
            xtype : 'container',
            cls : 'x-JAM-band',
            html : '<img src="resources/images/simple.png" alt="Ingredients" />'
        };
        this.setItems([content]);
        content = null;
    }
});
