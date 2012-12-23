Ext.define('JAM.controller.MainContainer', {
    extend : 'Ext.app.Controller',

    config : {
        views : ['MainContainer', 'Menu', 'Home'],

        refs : {
            mainContainer : '[id=mainContainer]'
        }

    },
    
    onContainerDrag: function(draggable, e, offset, eOpts) {
       var view = this.getMainContainer(); 
        if(view.config.canDrag)
        {
            if (offset.x < 1) {
                this.setClosed(true);
            } else {
                this.setClosed(false);
            }
        } else {
            return false;        
        }
        view = null;
    },
    
    onContainerDragstart: function(draggable, e, offset, eOpts) {
        var view = this.getMainContainer();
        if(view.config.canDrag)
        {
            if (view.config.slideSelector === false) {
                return false;
            }
            
            if (view.config.slideSelector) {
                node = e.target;
                while (node = node.parentNode) {
                    if (node.className && node.className.indexOf(view.config.slideSelector) > -1) {
                        return true;
                    }
                }
                return false;
            }
        } else {
            return false;
        }
        view = null;
    },
    
    onContainerDragend: function(draggable, e, eOpts) {
        var view = this.getMainContainer();
        var velocity  = Math.abs(e.deltaX / e.deltaTime),
            direction = (e.deltaX > 0) ? "right" : "left",
            offset    = Ext.clone(draggable.offset),
            threshold = parseInt(view.config.menuPlaceholder.width * 0.7);
        if(view.config.canDrag)
        {
            switch (direction) {
                case "right":
                    offset.x = (velocity > 0.75 || offset.x > threshold) ? view.config.menuPlaceholder.width : 0;
                    break;
                case "left":
                    offset.x = (velocity > 0.75 || offset.x < threshold) ? 0 : view.config.menuPlaceholder.width;
                    break;
            }
            
            this.moveContainer(offset.x);
         } else {
            return false;
         }   
        view, velocity, direction, offset, threshold = null;
    },
    
    isClosed: function() {
        
        return (this.getMainContainer().containerPlaceholder.draggableBehavior.draggable.offset.x === 0);
    },
    
    setClosed: function(closed) {
        if (closed) {
            this.getMainContainer().containerPlaceholder.removeCls('open');
            this.getMainContainer().containerPlaceholder.unmask();
        } else {
            this.getMainContainer().containerPlaceholder.addCls('open');
            this.getMainContainer().containerPlaceholder.setMasked({
                xtype : 'loadmask',
                floatingCls : 'alpha'
            });
        }
    },
    
    openContainer: function() {
        var duration = this.getMainContainer().config.slideOpenDuration;
        this.getMainContainer().containerPlaceholder.addCls('open');
        this.moveContainer(this.getMainContainer().config.menuPlaceholder.width, duration);
        duration = null;
    },
    
    closeContainer: function() {
        var duration = this.getMainContainer().config.slideCloseDuration;
        this.moveContainer(0, duration);
        duration = null;
    },
    
    toggleContainer: function() {
        var duration;
        if (this.isClosed()) {
            duration = this.getMainContainer().config.slideOpenDuration;
            this.openContainer(duration);
        } else {
            duration = this.getMainContainer().config.slideCloseDuration;
            this.closeContainer(duration);
        }
        duration = null;
    },

    moveContainer: function(offsetX, dur) {
        var duration =  dur;
        var draggable = this.getMainContainer().containerPlaceholder.draggableBehavior.draggable;
        draggable.setOffset(offsetX, 0, {
            duration: duration
        });
    },
    
    createContainer: function() {
        var view = this.getMainContainer();
        var cntrl = this;
        return Ext.create('Ext.Panel', Ext.merge({}, view.config.containerPlaceholder, {
            
            draggable: {
                direction: 'horizontal',
                constraint: {
                    min: { x: 0, y: 0 },
                    max: { x: view.config.menuPlaceholder.width || Math.max(screen.width, screen.height), y: 0 }
                },
                listeners: {
                    dragstart: {
                        fn: cntrl.onContainerDragstart,
                        order: 'before',
                        scope: cntrl
                    },
                    drag: Ext.Function.createThrottled(cntrl.onContainerDrag, 100, cntrl),
                    dragend: cntrl.onContainerDragend,
                    scope: cntrl
                },
                translatable: {
                    listeners: {
                        animationend: function(translatable, b, c) {
                            cntrl.setClosed(cntrl.isClosed());
                        },
                        scope: cntrl 
                    }
                }
                
            }
            
        }));
        
    },

    createMenu: function() {
        var view = this.getMainContainer();
        return Ext.create('Ext.Container', Ext.merge({}, this.getMainContainer().config.menuPlaceholder, {}));
    }

});
