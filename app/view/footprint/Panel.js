Ext.define('Tile.view.footprint.Panel', {
    extend: 'aladin.Panel',

    xtype: 'tile-footprint',

    requires: [
        'aladin.Panel'
    ],

    initComponent: function () {
        var me = this;

        Ext.apply(this, {
            hideFootprint: false,
            auxTools: [
                {
                    xtype: 'button',
                    tooltip: 'Tile Detail',
                    iconCls: 'x-fa fa-info',
                    scope: this
                    //handler: me.onDetail
                }
            ]
        });

        me.callParent(arguments);
    }

});
