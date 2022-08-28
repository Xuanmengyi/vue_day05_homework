<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{ completed: item.isDone }" v-for="item in filterList" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.isDone" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="del(item)"></button>
      </div>
    </li>
  </ul>
</template>
  
  <script>
export default {
  props: ["list", "currentStatus"],
  computed: {
    filterList() {
      switch (this.currentStatus) {
        case "全部":
          return this.list;
        case "未完成":
          return this.list.filter((item) => !item.isDone);
        case "已完成":
          return this.list.filter((item) => item.isDone);
        default:
          return [];
      }
    },
  },
  methods:{
    del(item){
     this.$emit('del-task',item)
    }
  }
};
</script>