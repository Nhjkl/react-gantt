import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 1),
      name: "建筑设计（A区+B区）",
      id: "architecture",
      progress: 25,
      type: "project",
      hideChildren: false,
      displayOrder: 1,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 25),
      name: "建筑概念方案设计",
      id: "concept",
      progress: 45,
      type: "task",
      project: "architecture",
      displayOrder: 2,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 5),
      name: "建筑方案深化设计",
      id: "detailed",
      progress: 25,
      type: "task",
      project: "architecture",
      displayOrder: 3,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 20),
      name: "建筑扩初设计（A区酒店）",
      id: "hotel",
      progress: 10,
      type: "task",
      project: "architecture",
      displayOrder: 4,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 1),
      name: "景观设计（A区酒店）",
      id: "landscape",
      progress: 15,
      type: "project",
      hideChildren: false,
      displayOrder: 5,
    },
    {
      start: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        15
      ),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 1),
      name: "概念设计",
      id: "landscape_concept",
      progress: 0,
      type: "task",
      project: "landscape",
      displayOrder: 6,
    },
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
