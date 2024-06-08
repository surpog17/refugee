export function date(dates) {
  const dateStr = dates;
  const date = new Date(dateStr);
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  console.log(formattedDate, "formattedDatem"); // Output: "Saturday, March 25, 2023"

  return formattedDate;
}
