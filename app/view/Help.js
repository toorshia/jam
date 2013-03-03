Ext.define("JAM.view.Help", {
    extend : 'Ext.Panel',

    config : {
        id : 'help',
        layout : 'fit',
        cls : 'x-JAM-jar',
        scrollable : true
    },

    initialize : function() {
        var content = {
            xtype : 'container',
            cls : 'x-JAM-band',
            html : '<img src="resources/images/help.png" alt="need a hand?" />'
        };
        this.setItems([content]);
        content = null;
    }
});
