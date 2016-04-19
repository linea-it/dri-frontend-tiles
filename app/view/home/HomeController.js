/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Tile.view.home.HomeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.home',

    onSelectRelease: function (combo, record) {
        console.log('Home - onSelectRelease(%o)', record);

        this.loadDatasets(record);
    },

    /**
     * Filtra a Store Dataset de acordo com o release
     * @param {object} [release] Model Instancia do model Release
     */
    loadDatasets: function (release) {
        console.log('Home - loadDatasets(%o)', release);

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
    }

});
