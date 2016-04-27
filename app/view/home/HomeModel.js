/**
 *
 */
Ext.define('Tile.view.home.HomeModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.home',

    requires: [
        'Tile.store.Releases',
        'Tile.store.Datasets',
        'Tile.store.Surveys',
        'Tile.model.Release',
        'Tile.store.Tags',
        'Tile.model.Dataset'
    ],

    links: {
        currentRelease: {
            type: 'Tile.model.Release',
            create: true
        },
        currentDataset: {
            type: 'Tile.model.Dataset',
            create: true
        }
    },

    stores: {
        releases: {
            type: 'releases'
        },
        tags: {
            type: 'tags',
            storeId: 'AllTags',
            autoLoad: true,
            remoteFilter: false,
        },        
        datasets: {
            type: 'datasets'
        },
        surveys: {
            type: 'surveys',
            autoLoad: false
        }

    }

});
