import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':x-file-input', 'disabled:x-file-input--disabled'],
  attributeBindings: ['accept'],
  tagName: 'span',
  tabindex: 0,

  /**
   * The text displayed when no block is passed.
   *
   * @property alt
   * @default "Upload"
   */
  alt: "Upload",

  /**
   * Listens for change events on the native file input and dispatches
   * the corresponding action up the context chain.
   *
   * @private
   * @method
   * @param {$.Event} e Native change event
   */
  change(e) {
    this.sendAction("action", e.target.files[0], this.resetInput.bind(this));
  },

  /**
   * Resets the value of the input so you can select the same file
   * multiple times.
   *
   * @method
   */
  resetInput() {
    this.$('.x-file--input').val('');
  },
  /** 
   * even onchange listen the resetComp to reset from the controller this upload
   * you need set resetComp  like this: resetComp=resetInputFileComp
   * resetInputFileComp is a bool property from you controller
  **/
   onChange: function () {
       this.resetInput();
    }.observes('resetComp'),
    
  /**
   * Generates a random ID to relate the label to the input.
   *
   * @method
   * @private
   */
  randomId: Ember.computed(function() {
    return  Ember.guidFor(this);
  })
});
