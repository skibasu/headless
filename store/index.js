import Vuex from 'vuex';
import pages from './modules/pages';
import options from './modules/options';
import posts from './modules/posts';

const createStore = () => {
   return new Vuex.Store(
      {
         modules: {
            pages,
            options,
            posts
         }
      }
   )
}
export default createStore;