import Vuex from 'vuex';
import pages from './modules/pages';
import options from './modules/options';

const createStore = () => {
    return new Vuex.Store(
        {
            modules: {
                pages,
                options
            }
        }
    )
}
export default createStore;