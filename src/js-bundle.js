import Vue from 'vue';

// Components
import Components from './js/components';

import store from './js/store/index';

new Vue({
    el: '#site',
    store,
    components: {
        ...Components,
    },
});
