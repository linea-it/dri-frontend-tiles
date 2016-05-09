Ext.define('Tile.view.eyeballing.Eyeballing', {
    extend: 'Ext.panel.Panel',

    xtype: 'eyeballing',

    requires: [
        'Tile.view.eyeballing.EyeballingController'
    ],

    controller: 'eyeballing',

    viewModel: 'eyeballing',

    config: {
        /**
         * Id release
         * @type {integer}
         */
        release: null
    },

    initComponent: function () {
        var me = this;

        Ext.apply(this, {
            items: [
                {
                    xtype: 'panel',
                    layout: 'border',
                    items: [
                        {
                            xtype: 'tile-footprint',
                            region: 'center',
                            title: '',
                            bind: {
                                storeSurveys: '{surveys}',
                                storeTags: '{tags}',
                                storeTiles: '{tiles}'
                            }
                        },
                        {
                            xtype: 'panel',
                            title: 'Thumbs',
                            region: 'south',
                            height: 200
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    layout: {
                        type:'hbox',
                        align:'stretch'
                    },
                    items:[

                    ]
                }
            ]

        });

        me.callParent(arguments);
    },

    loadPanel: function () {
        this.fireEvent('loadpanel', this);

    },

    updatePanel: function () {
        this.fireEvent('updatePanel', this);

    },

    setRelease: function (release) {
        var me = this,
            vm = me.getViewModel();

        if (release > 0) {
            me.release = release;

            vm.set('release', release);

            me.fireEvent('changerelease', release, me);
        }
    }

});
