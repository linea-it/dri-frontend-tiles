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
        datasets: {
            type: 'datasets'
        },
        surveys: {
            type: 'surveys',
            autoLoad: false
        }
        // tags: {
        //     type: 'fields',
        //     storeId: 'search-tags',
        //     autoLoad: true
        // },
    }

});
