import React from "react";
import { Task, ViewMode, Gantt } from "gantt-task-react";
import { ViewSwitcher } from "./components/view-switcher";
import { getStartEndDateForProject, initTasks } from "./helper";
import "gantt-task-react/dist/index.css";

// Init
const App = () => {
  const [view, setView] = React.useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = React.useState<Task[]>(initTasks());
  const [isChecked, setIsChecked] = React.useState(true);
  let columnWidth = 65;
  if (view === ViewMode.Year) {
    columnWidth = 350;
  } else if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  const handleTaskChange = (task: Task) => {
    console.log("On date change Id:" + task.id);
    let newTasks = tasks.map(t => (t.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project = newTasks[newTasks.findIndex(t => t.id === task.project)];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map(t =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    setTasks(newTasks);
  };

  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter(t => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    console.log("On progress change Id:" + task.id);
  };

  const handleDblClick = (task: Task) => {
    alert("On Double Click event Id:" + task.id);
  };

  const handleClick = (task: Task) => {
    console.log("On Click event Id:" + task.id);
  };

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  return (
    <div className="Wrapper">
      <ViewSwitcher
        onViewModeChange={viewMode => setView(viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
      />
      <div style={{ display: "flex", alignItems: "center", padding: "10px", backgroundColor: "#f0f0f0" }}>
        <div>▼</div>
        <div className="rowNumber">I</div>
        <div>第一期设计（A区 + B区）</div>
      </div>
      <Gantt
        tasks={tasks}
        locale="zh"
        viewMode={view}
        showTaskListColumn={["name"]}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onClick={handleClick}
        onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        listCellWidth={isChecked ? "300px" : ""}
        columnWidth={columnWidth}
        barFill={60}
        barCornerRadius={4}
        barProgressColor="rgba(238, 100, 8, 1)"
        barProgressSelectedColor="rgba(238, 100, 8, 0.8)"
        barBackgroundColor="rgba(238, 100, 8, 0.2)"
        barBackgroundSelectedColor="rgba(238, 100, 8, 0.3)"
        projectProgressColor="rgba(238, 100, 8, 1)"
        projectProgressSelectedColor="rgba(238, 100, 8, 0.8)"
        projectBackgroundColor="rgba(238, 100, 8, 0.2)"
        projectBackgroundSelectedColor="rgba(238, 100, 8, 0.3)"
        milestoneBackgroundColor="#65686B"
        milestoneBackgroundSelectedColor="#65686B"
        arrowColor="#65686B"
        todayColor="rgba(238, 100, 8, 0.1)"
      />
    </div>
  );
};

export default App;
