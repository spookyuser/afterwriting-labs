define(['logger', 'utils/common', 'plugins/layout', 'plugins/open', 'core/module'], function(logger, common, layout, open, Module) {
    
    var module = Module.create('test');
    
    module.prepare = function() {
        // set up logger
        logger.useDefaults();
        logger.setLevel(logger.DEBUG);
        logger.filter = null;

        common.data.static_path = '';
    };

    module.windup = function() {
        var footer = '<span class="version">tester</span>';
        layout.set_footer(footer);


        var DEV_PLUGIN = require('plugins/dev/fquerysandbox');

        if (DEV_PLUGIN) {
            open.open_sample('printing_trouble');

            layout.switch_to(DEV_PLUGIN);

            layout.show_main();
            layout.open_content();
            layout.switch_to_plugin(DEV_PLUGIN.name);
        }

    };

    return module;

});