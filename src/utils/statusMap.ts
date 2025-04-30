type Status = "active" | "paused" | "archived";
type StatusColor = "success" | "danger" | "warning";

export const statusColorMap: Record<Status, StatusColor> = {
  active: "success",
  paused: "danger",
  archived: "warning",
};
