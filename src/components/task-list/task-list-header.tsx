import React from "react";
import styles from "./task-list-header.module.css";

export const TaskListHeaderDefault: React.FC<{
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
}> = ({ headerHeight, fontFamily, fontSize, rowWidth, locale }) => {
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
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: rowWidth,
          }}
        >
          {locale === "zh" ? "任务名称" : "Name"}
        </div>
        {/* <div */}
        {/*   className={styles.ganttTable_HeaderSeparator} */}
        {/*   style={{ */}
        {/*     height: headerHeight * 0.5, */}
        {/*     marginTop: headerHeight * 0.2, */}
        {/*   }} */}
        {/* /> */}
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: rowWidth,
          }}
        >
          {locale === "zh" ? "开始时间" : "From"}
        </div>
        {/* <div */}
        {/*   className={styles.ganttTable_HeaderSeparator} */}
        {/*   style={{ */}
        {/*     height: headerHeight * 0.5, */}
        {/*     marginTop: headerHeight * 0.25, */}
        {/*   }} */}
        {/* /> */}
        <div
          className={styles.ganttTable_HeaderItem}
          style={{
            minWidth: rowWidth,
          }}
        >
          {locale === "zh" ? "结束时间" : "To"}
        </div>
      </div>
    </div>
  );
};
