Ext.application({

    controllers : ['Menu', 'MainContainer', 'Header'],

    name : 'JAM',

    views : ['MainContainer', 'Menu', 'Header', 'Home'],

    icon : {
        57 : 'resources/icons/Icon.png',
        72 : 'resources/icons/Icon~ipad.png',
        114 : 'resources/icons/Icon@2x.png',
        144 : 'resources/icons/Icon~ipad@2x.png'
    },
    glossOnIcon : false,

    phoneStartupScreen : 'resources/loading/Homescreen.jpg',
    tabletStartupScreen : 'resources/loading/Homescreen~ipad.jpg',

    launch : function() {

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('JAM.view.MainContainer'));
    }

});
