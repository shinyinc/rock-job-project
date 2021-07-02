<template>
  <div class="kanban">
    <h1>Implement your kanban board here.</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class KanbanBoard extends Vue {
  /* A few example API calls
  import { api, protos } from "@/rock";

  // Fetches all task lists
  await api.taskLists(
    protos.TaskListsReq.create({ spaceId: "R48eLYA0", getAll: true })
  );

  // Fetches a single task by id
  await api.objs(
    protos.ObjsReq.create({
      spaceId: "R48eLYA0",
      get: protos.ObjId.create({
        app: protos.SpaceApp.TASKS,
        id: 1,
      }),
    })
  );

  For more details about the API, read protos file
  */
}
</script>
