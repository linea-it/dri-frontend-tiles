Ext.define('Tile.view.mosaic.Panel', {
    extend: 'Ext.panel.Panel',

    xtype: 'tile-mosaic',

    requires: [
        // 'Tile.view.home.HomeController',
        // 'Tile.view.home.HomeModel'
    ],

    // controller: 'home',

    // viewModel: 'home',

    // title: 'Home',

    initComponent: function () {
        var me = this;

        // Ext.apply(this, {
        //     items: [
        //         {
        //             xtype: 'targets-catalog-tree',
        //             reference: 'CatalogTree'
        //         }
        //     ]
        // });

        me.callParent(arguments);
    }
});
