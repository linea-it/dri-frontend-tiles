/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Tile.view.home.HomeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.home',

    /**
     * executada ao selecionar um release.
     * dispara o carregamento da store Datasets.
     * dispara o carregamento da imagens usadas no Aladin.
     * @param  {object} combo  combobox para selecao dos releases
     * @param  {object} record release selecionado
     */
    onSelectRelease: function (combo, record) {

        if (record.get('id') > 0) {
            this.loadDatasets(record);

            this.loadImageSurveys(record);
        }
    },

    /**
     * Filtra a Store Dataset de acordo com o release
     * @param {object} [release] Model Instancia do model Release
     */
    loadDatasets: function (release) {
        var me = this,
            vm = this.getViewModel(),
            datasets = vm.getStore('datasets');

        if (release.get('id') > 0) {
            datasets.filter([
                {
                    property: 'tag',
                    value: 47
                }
            ]);
        }
    },

    loadImageSurveys: function (release) {
        console.log('loadImageSurveys(%o)', release);

        var me = this,
            vm = me.getViewModel(),
            store = vm.getStore('surveys');

        store.filter(
            [
                {
                    property: 'release',
                    value: release.get('id')
                }
            ]
        );

        // surveys = [
        //     {
        //         'id': 'stripe_rgb',
        //         'rootUrl': 'http://10.0.10.30/dri/images/aladin/COSMOS_D04_RGB',
        //         'name': 'survey na banda RGB',
        //         'filter': 'rgb'
        //     },
        //     {
        //         'id': 'stripe_g',
        //         'rootUrl': 'http://10.0.10.30/dri/images/aladin/COSMOS_D04_g_out',
        //         'name': 'survey na banda g',
        //         'filter': 'g'
        //     },
        //     {
        //         'id': 'stripe_i',
        //         'rootUrl': 'http://10.0.10.30/dri/images/aladin/COSMOS_D04_i_out',
        //         'name': 'survey na banda i',
        //         'filter': 'i'
        //     },
        //     {
        //         'id': 'stripe_z',
        //         'rootUrl': 'http://10.0.10.30/dri/images/aladin/COSMOS_D04_z_out',
        //         'name': 'survey na banda z',
        //         'filter': 'z'
        //     }
        // ];
    }

});
