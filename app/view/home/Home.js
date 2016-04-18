Ext.define('Tile.view.home.Home', {
    extend: 'Ext.tab.Panel',

    xtype: 'home',

    requires: [
        'Tile.view.home.HomeController',
        'Tile.view.home.HomeModel',
        'Tile.view.mosaic.Panel',
        'Tile.view.lists.Dataset'
    ],

    controller: 'home',

    viewModel: 'home',

    initComponent: function () {
        var me = this;

        Ext.apply(this, {
            items: [
                {
                    xtype: 'tile-mosaic',
                    title: 'Mosaic'
                },
                {
                    xtype: 'tile-lists-dataset',
                    title: 'List'
                }
            ]
        });

        me.callParent(arguments);
    },

    loadPanel: function (arguments) {
        console.log('loadPanel(%o)', arguments);

        this.fireEvent('loadpanel', this);
    }

});
