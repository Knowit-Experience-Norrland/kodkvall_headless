/**
 * Formats a date string to the format "YYYY-MM-DD HH:MM".
 *
 * ````typescript
 * // You can call this function with a string representing a date, like this:
 * const dateString = '2021-05-01T12:34:56';
 * const formattedDate = formatDate(dateString);
 * console.log(formattedDate); // Output: "2021-05-01 12:34"
 * ````
 * @param dateString The date string to format.
 * @returns The formatted date string.
 */
export function formatDate(dateString: string): string {
	// Convert the string to a Date object
	const date = new Date(dateString);

	// Get the year, month, date, hour, and minute from the Date object
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hour = date.getHours();
	const minute = date.getMinutes();

	// Add leading zeros to the month, date, hour, and minute if necessary
	const formattedMonth = month < 10 ? `0${month}` : month;
	const formattedDay = day < 10 ? `0${day}` : day;
	const formattedHour = hour < 10 ? `0${hour}` : hour;
	const formattedMinute = minute < 10 ? `0${minute}` : minute;

	// Return the formatted string
	return `${year}-${formattedMonth}-${formattedDay} ${formattedHour}:${formattedMinute}`;
}
