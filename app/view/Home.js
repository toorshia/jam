Ext.define("JAM.view.Home", {
    extend : 'Ext.Panel',

    config : {
        id : 'home',
        layout : 'fit',
        cls : 'x-JAM-jar',
        scrollable : null
    },

    initialize : function() {
        var glare = {
            xtype : 'container',
            cls : 'x-JAM-glare',
            items : [{
                xtype : 'container',
                cls : 'x-JAM-glare-inside',
            }]
        };
        var content = {
            xtype : 'container',
            cls : 'x-JAM-band',
            html : '<img src="resources/images/sticker.png" alt="JAM" />'
        };
        this.setItems([glare, content]);
        glare, content = null;
    }
});
