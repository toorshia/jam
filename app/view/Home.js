Ext.define("JAM.view.Home", {
    extend : 'Ext.Panel',

    config : {
        id : 'home',
        layout : 'fit',
        cls : 'x-JAM-jar',
        scrollable : false
    },

    initialize : function() {
        var header = Ext.create('JAM.view.Header');
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
        this.setItems([header, glare, content]);
        header, glare, content = null;
    }
});
