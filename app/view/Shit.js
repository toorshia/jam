Ext.define("JAM.view.Shit", {
    extend : 'Ext.Panel',

    config : {
        id : 'shit',
        layout : 'fit',
        cls : 'x-JAM-jar',
        scrollable : true
    },

    initialize : function() {
        var content = {
            xtype : 'container',
            cls : 'x-JAM-band',
            html : '<img src="resources/images/easy.png" alt="easy to use" />'
        };
        this.setItems([content]);
        content = null;
    }
});
