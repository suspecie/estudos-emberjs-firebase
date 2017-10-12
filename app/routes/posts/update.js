import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        save (model) {
            model.save(); //persistindo os dados
            this.transitionTo('posts');
        }
    },
    model: function (params) {
        return this.store.findRecord('post', params.id);
    }
});
