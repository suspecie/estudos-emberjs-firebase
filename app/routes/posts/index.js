import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        let posts = this.store.findAll('post');

        return posts;
    }
});