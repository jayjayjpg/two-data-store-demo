import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  customStore: service(),
  
  model() {
    let store = this.store;
    let customStore = this.customStore;
    let comment = store.push({
      data: {
        id: "comment-1",
        type: "comment",
        attributes: {
          text: "My comment"
        }
      }
    });
    
    let post = customStore.createRecord('post', {
      title: 'My post'
    });
    
    post.set('comment', comment);
    
    return post;
  }
});

