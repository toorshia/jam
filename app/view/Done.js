Ext.define("JAM.view.Done", {
    extend : 'Ext.Panel',

    config : {
        id : 'done',
        layout : 'fit',
        cls : 'x-JAM-jar',
        scrollable : true
    },

    initialize : function() {
        var content = {
            xtype : 'container',
            cls : 'x-JAM-band',
            html : '<img src="resources/images/free.png" alt="free as a bird" />'
        };
        this.setItems([content]);
        content = null;
    }
});
