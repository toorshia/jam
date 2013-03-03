Ext.define("JAM.view.Settings", {
    extend : 'Ext.Panel',

    config : {
        id : 'settings',
        layout : 'fit',
        cls : 'x-JAM-jar',
        scrollable : true
    },

    initialize : function() {
        var content = {
            xtype : 'container',
            cls : 'x-JAM-band',
            html : '<img src="resources/images/ingredients.png" alt="ingredients" />'
        };
        this.setItems([content]);
        content = null;
    }
});
