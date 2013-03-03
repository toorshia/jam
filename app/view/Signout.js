Ext.define("JAM.view.Signout", {
    extend : 'Ext.Panel',

    config : {
        id : 'signout',
        layout : 'fit',
        cls : 'x-JAM-jar',
        scrollable : true
    },

    initialize : function() {
        var content = {
            xtype : 'container',
            cls : 'x-JAM-band',
            html : '<img src="resources/images/signout.png" alt="leaving already?" />'
        };
        this.setItems([content]);
        content = null;
    }
});
