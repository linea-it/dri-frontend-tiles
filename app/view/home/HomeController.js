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

            this.loadSurveys(record);
        }
    },

    /**
     * Filtra a Store Dataset de acordo com o release
     * @param {object} [record] Model Instancia do model Release
     */
    loadDatasets: function (record) {
        var me = this,
            release = record.get('id'),
            vm = this.getViewModel(),
            datasets = vm.getStore('datasets'),
            filters = [],
            tags= [];

        if (release > 0) {

            tags = me.tagsByRelease(release);

            console.log(tags)

            if (tags.length == 1) {               
                filters.push(
                    {
                        property: 'tag',
                        value: tags[0]
                    }
                )

            } else if (tags.length > 1) {
                filters.push(
                    {
                        property: 'tag',
                        operator: 'in',
                        value: tags
                    }
                )

            } else {
                console.log('Nenhum field encontrado para o release.')
                return false;
            }

            if (filters.length > 0) {
                datasets.filter(filters);
                
            }
        }
    },

    loadSurveys: function (release) {
        var me = this,
            vm = me.getViewModel(),
            store = vm.getStore('surveys');

        store.filter(
            [
                {
                    property: 'srv_project',
                    value: 'DES'
                },

                {
                    property: 'srv_release',
                    value: release.get('id')
                }
            ]
        );
    },

    tagsByRelease: function (release) {
        var me = this,
            vm = me.getViewModel(),
            store = vm.getStore('tags'),
            ids = [],
            tags;

        tags = store.query('tag_release', release);

        tags.each(function(tag){
            ids.push(tag.get('id'));

        }, this);

        return ids;
    }

});
