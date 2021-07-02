<template>
  <KanbanBoard />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import KanbanBoard from "@/components/KanbanBoard.vue";

@Component({
  components: {
    KanbanBoard,
  },
})
export default class Home extends Vue {}
</script>
