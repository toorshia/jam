![JAM](https://dl.dropbox.com/u/6211055/IMG/jam_logo.png)

JAM - Just App Menu is a simple "Facebook-like" menu for Sencha Touch 2.
It is based on wnielson's menu https://github.com/wnielson/sencha-SlideNavigation, but made more simple by decoupling logic and markup that binds menu items with corresponding views.

JAM serves as a container for your menu and app contents - you can pretty much stuff any kind of app inside of it, as long as your menu contents and app contents are separate views.
It is you who defines and handles menu button events - JAM just gives you a nice open/close transitions.

You get only bare essentials you need:

*  Main Container view/controller - these hold config params and logic to build side menu
*  Couple of demo views and controllers to get you started

And you can configure following options:

*  Turn on/off dragging to open
*  A specific component class reacting to drag
*  Slide entry/exit speeds

Check http://bit.ly/RMQrng for a live demo.

###Update log

######March 02, 2013.

 * Moved Header.js to MainContainer.js for easier view switch operation
 * Made couple of switchin' views to help you get started :)
 * Added DEMO folder with packaged files
 * Added apk folder with android level 7 build via sencha SDK tools 2 (Sencha CMD version soon to follow, along with 2.1.1 support)
 * Me tired. Me need sleep. Zzzzzz....





