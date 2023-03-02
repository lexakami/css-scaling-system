// Used as an entry point to build CSS from all components.
// Generated JS files are removed after the build.

import Vue from 'vue';

// Components
import Components from './js/components';

new Vue({
    el: '#site',
    components: { ...Components },
});
