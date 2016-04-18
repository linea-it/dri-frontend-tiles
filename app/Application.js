/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Tile.Application', {
    extend: 'Ext.app.Application',

    name: 'Tile',

    stores: [
        // TODO: add global / shared stores here
    ],

    defaultToken : 'home',

    init:function (argument) {
        // Desabilitar os erros de Aria
        Ext.enableAriaButtons = false;
    },

    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        window.location.reload();

    }
});
