Ext.define('Chapter6Controllers.controller.tablet.TabletController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            splitView: 'akosplitview',
            listView: 'indexview > #listView'
        },
        control: {
            listView: {
                itemtap: 'listViewItemTap' 
            }
        }
    },

    init: function () {
        console.log('INIT from TabletController');
    },
    launch: function () {
        console.log('LAUNCH from TabletController');
    },
    listViewItemTap: function(list, index, target, record, e, eOpts) {
        var splitView = this.getSplitView();
        var text = record.get('text');
        var screenName = record.get('screen');
        var widget = Ext.widget(screenName);
        splitView.setTitle(text);
        splitView.displayComponent(widget);
    }
});

