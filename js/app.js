const vm = new Vue({
  el: "#app",
  data: {
    inputText: '',
    todos: [
      { id: 1, title: '吃饭', done: false },
      { id: 2, title: '睡觉', done: false },
      { id: 3, title: '跳舞', done: false },
      { id: 4, title: '敲代码', done: false },
    ],
    currentEdit: null
  },
  methods: {
    //   新增数组
    onkeydown() {
      this.todos.push({
          id: Math.random(),
          title: this.inputText,
          done: false
        })
        //   清空
      this.inputText = ""
    },
    // 删除单个项
    onclick(index) {
      this.todos.splice(index, 1)
    },
    // 删除所有选中的项
    onDelAll() {

      //   for (let i = 0; i < this.todos.length; i++)
      //     if (this.todos[i].done === true) {
      //       this.todos.splice(i, 1)
      //       i--;
      //     }

      //  使用filter过滤的方法
      this.todos = this.todos.filter((item, index) => {
        return item.done == false
      })

    },
    // 实现全选
    onchange(e) {
      //   console.log(e.target.checked)
      const checked = e.target.checked
      this.todos.forEach(item => {
        item.done = checked
      })
    },
    // 实现双击,回车保存(实现编辑功能)
    onsave(e) {
      this.currentEdit.title = e.target.value
      this.currentEdit = null
    },
    // 实现退出编辑
    onesc() {
      this.currentEdit = null
    }
  },
  // 计算属性
  computed: {
    // 当有一个项被选中时，底下的button就显示，没有就不现实
    isonlyone() {
      return this.todos.some(item => {
        return item.done === true
      })
    },
    // 实现未完成任务的个数
    todo() {
      return this.todos.filter((item, index) => {
        return item.done == false
      })
    },
    // 实现反选
    checkedAll() {
      return this.todos.every(item => {
        return item.done === true
      })
    }
  }

})