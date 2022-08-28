<template>
  <div>
    <todo-header @add-task="addTask" :list="list"></todo-header>
    <todo-main
      :list="list"
      :currentStatus="currentStatus"
      @del-task="delTask"
    ></todo-main>
    <todo-footer
      @change-status="changeStatus"
      :list="list"
      @clear-done="clearDone"
    ></todo-footer>
  </div>
</template>

<script>
import "./styles/base.css";
import "./styles/index.css";
import { v4 as uuidv4 } from "uuid";
import todoHeader from "@/components/todoHeader.vue";
import todoMain from "@/components/todoMain.vue";
import todoFooter from "@/components/todoFooter.vue";

export default {
  components: {
    todoHeader,
    todoMain,
    todoFooter,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem("todo")) || [],
      currentStatus: "全部",
    };
  },
  watch: {
    list: {
      deep: true,
      immediate: true,
      handler: "localSave",
    },
  },
  methods: {
    localSave(newList) {
      window.localStorage.setItem("todo", JSON.stringify(newList));
    },
    addTask(task) {
      if (task === "") {
        return alert("输入的任务不能为空");
      }
      this.list.push({
        id: uuidv4(),
        name: task,
        isDone: false,
      });
    },
    changeStatus(status) {
      this.currentStatus = status;
    },
    delTask(i) {
      this.list = this.list.filter((item) => item !== i);
    },
    clearDone() {
      this.list = this.list.filter((item) => !item.isDone);
    },
  },
};
</script>

<style>
</style>