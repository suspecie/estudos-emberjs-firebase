import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        save (model) {
            let newPost = this.store.createRecord('post', model); //criei o registro
            newPost.save(); //persistindo os dados
            this.transitionTo('posts');
        }
    },
    model () {
        return {};
    }
});
