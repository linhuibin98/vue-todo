import Vue from 'vue';

export default function sendMessage(ops) {
  const modal = window.document.createElement('div');
  modal.setAttribute('id', 'message');
  window.document.body.appendChild(modal);

  return new Vue({
    data: {
      msg: ops.msg,
    },
    // eslint-disable-next-line no-unused-vars
    render() {
      return (
        <div id='message'>
          <div class='message-container'>
            {this.msg}
          </div>
        </div>);
    },

    mounted() {
      this.$nextTick(() => {
        this.$el.style.top = '20px';
        const timer1 = setTimeout(() => {
          this.$el.style.top = '-50px';
          const timer2 = setTimeout(() => {
            if (window.document.body.contains(this.$el)) {
              window.document.body.removeChild(this.$el);
            }
            clearTimeout(timer1);
            clearTimeout(timer2);
          }, 2000);
        }, 3000);
      });
    },
  }).$mount('#message');
}
