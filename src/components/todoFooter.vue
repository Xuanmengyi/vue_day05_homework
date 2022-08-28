<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>数量值</strong>{{ count }}</span>
    <ul class="filters">
      <li v-for="item in lis" :key="item.id" @click="changeStatus(item)">
        <a :class="{ selected: item.isSelect }" href="javascript:;">{{
          item.name
        }}</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clearDone">清除已完成</button>
  </footer>
</template>
  
  <script>
import { v4 as uuidv4 } from "uuid";
export default {
  props: ["list"],
  data() {
    return {
      lis: [
        {
          id: uuidv4(),
          name: "全部",
          isSelect: true,
        },
        {
          id: uuidv4(),
          name: "未完成",
          isSelect: false,
        },
        {
          id: uuidv4(),
          name: "已完成",
          isSelect: false,
        },
      ],
    };
  },
  methods: {
    changeStatus(i) {
      this.lis.forEach((item) => (item.isSelect = i === item));
      this.$emit("change-status", i.name);
    },
    clearDone(){
     this.$emit('clear-done')
    }
  },
  computed: {
    count() {
     return this.list.reduce((prev, curr) => {
        if (!curr.isDone) {
          return ++prev;
        } else {
          return prev;
        }
      }, 0);
    },
  },
};
</script>