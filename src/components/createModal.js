import Vue from 'vue';
import sendMessage from '@/components/sendMessage';

export default function createModal(opts) {
  const modal = window.document.createElement('div');
  modal.setAttribute('id', 'modal');
  window.document.body.appendChild(modal);

  return new Vue({
    data: {
      value: '',
    },
    // eslint-disable-next-line no-unused-vars
    render() {
      return (
        <div id='modal'>
          <div class='modal-container'>
            <div class="title" >新建任务</div>
            <div class="project-name">
              <label for="pname" class="lab-pname">
                项目名称
              </label>
              <input type="text" name="pname" id="pname" on-input={this.handleIpt} />
            </div>
            <div class="btn-group">
              <button class="btn cancel" on-click={this.handleCancel}>取消</button>
              <button class="btn confirm" on-click={this.handleConfirm}>确认</button>
            </div>
          </div>
        </div>);
    },
    methods: {
      handleCancel() {
        // 点击取消,直接移除
        window.document.body.removeChild(this.$el);
      },
      handleConfirm() {
        const { isOk, msg } = opts.confirm(this.value);
        if (!isOk) {
          sendMessage({
            msg,
          });
          return;
        }
        sendMessage({
          msg,
        });
        window.document.body.removeChild(this.$el);
      },
      handleIpt(e) {
        this.value = e.target.value;
      },
    },
  }).$mount('#modal');
}
