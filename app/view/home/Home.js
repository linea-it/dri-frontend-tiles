Ext.define('Tile.view.home.Home', {
    extend: 'Ext.panel.Panel',

    xtype: 'home',

    requires: [
        'Tile.view.home.HomeController',
        'Tile.view.home.HomeModel'
    ],

    controller: 'home',

    viewModel: 'home',

    title: 'Home',

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
    },

    loadPanel: function (arguments) {
        console.log('loadPanel(%o)', arguments);

        this.fireEvent('loadpanel', this);
    }

});
