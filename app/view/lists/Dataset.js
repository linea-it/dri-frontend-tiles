Ext.define('Tile.view.lists.Dataset', {
    extend: 'Ext.grid.Panel',

    xtype: 'tile-lists-dataset',

    requires: [
        'Ext.PagingToolbar',
        'Ext.grid.RowNumberer',
        'Ext.grid.plugin.BufferedRenderer'
    ],

    layout: 'fit',

    initComponent: function () {
        var me = this;

        Ext.apply(this, {
            columns: [
                Ext.create('Ext.grid.RowNumberer'),
                {
                    text: 'Tilename',
                    dataIndex: 'tli_tilename',
                    sortable: false,
                    renderer: function (value, metaData, record) {
                        return record.getTile().get('tli_tilename');
                    },
                    width: 160

                },
                {
                    text: 'RA (deg)',
                    dataIndex: 'tile.ra',
                    sortable: false,
                    renderer: function (value, metaData, record) {
                        return record.getTile().get('tli_ra');
                    }
                },
                {
                    text: 'Dec (deg)',
                    dataIndex: 'dec',
                    sortable: false,
                    renderer: function (value, metaData, record) {
                        return record.getTile().get('tli_dec');
                    }
                },
                {
                    text: 'l (deg)',
                    dataIndex: 'l',
                    sortable: false,
                    renderer: function (value, metaData, record) {
                        return record.getTile().get('tli_l');
                    }
                },
                {
                    text: 'b (deg)',
                    dataIndex: 'b',
                    sortable: false,
                    renderer: function (value, metaData, record) {
                        return record.getTile().get('tli_b');
                    }
                },
                {
                    text: 'Dataset',
                    dataIndex: 'tag',
                    sortable: false,
                    renderer: function (value, metaData, record) {
                        return Ext.data.StoreManager.lookup('Fields')
                                    .getById(value).get('tag_display_name');
                    },
                    flex: 1
                }
            ]
        });

        me.callParent(arguments);
    }
});
