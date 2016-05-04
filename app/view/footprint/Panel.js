Ext.define('Tile.view.footprint.Panel', {
    extend: 'aladin.Panel',

    xtype: 'tile-footprint',

    requires: [
        'aladin.Panel',
        'Tile.view.footprint.FootprintController'
    ],

    config: {
        tileInfo: null
    },

    initComponent: function () {
        var me = this;

        Ext.apply(this, {
            //hideFootprint: false,
            auxTools: [
                {
                    xtype: 'button',
                    tooltip: 'Tile Detail',
                    iconCls: 'x-fa fa-info',
                    scope: this,
                    handler: me.onDetail
                }
            ]
        });

        me.callParent(arguments);
    },

    onDetail: function () {
        var me = this, 
            w = me.getTileInfo(),
            tile;

        tile = me.getTileByPosition();
        
        if (w) {
            w.close();
        }

        w = me.createWindowDetail(tile);
        w.show();

        me.setTileInfo(w);
    },

    createWindowDetail: function (tile) {
        var me = this;
        return Ext.create('Ext.window.Window', {
            title: tile.get('tli_tilename'),
            closeAction:'destroy',
            width: 180,
            height: 150,
            constrainHeader:true,
            layout: 'fit',
            autoScroll: true,
            renderTo: me.body,
            x: 50,
            y: 50,
            items:[
            ]
        });

    },


});
