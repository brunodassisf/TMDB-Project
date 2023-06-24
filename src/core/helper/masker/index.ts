import moment from "moment";

export const convertDate = (date: string) => {
  return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
};
