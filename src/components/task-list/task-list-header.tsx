import React from "react";
import styles from "./task-list-header.module.css";

export const TaskListHeaderDefault: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  showTaskListColumn: string[];
}> = ({ headerHeight, fontFamily, fontSize, rowWidth, locale, showTaskListColumn }) => {
  return (
    <div
      className={styles.ganttTable}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      <div
        className={styles.ganttTable_Header}
        style={{
          height: headerHeight - 2,
        }}
      >
        {showTaskListColumn.includes("name") && (
          <div
            className={styles.ganttTable_HeaderItem}
            style={{
            minWidth: rowWidth,
          }}
          >
            {locale === "zh" ? "任务名称" : "Name"}
          </div>
        )}
        {showTaskListColumn.includes("start") && (
          <div
            className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: rowWidth,
          }}
        >
            {locale === "zh" ? "开始时间" : "From"}
          </div>
        )}
        {showTaskListColumn.includes("end") && (
          <div
            className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: rowWidth,
          }}
        >
            {locale === "zh" ? "结束时间" : "To"}
          </div>
        )}
      </div>
    </div>
  );
};
