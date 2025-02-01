export function formatDate(date: Date): string {
    const currentDate = new Date();
    if (date.getFullYear() === currentDate.getFullYear() 
        && date.getMonth() === currentDate.getMonth() 
        && date.getDay() === new Date().getDay()) {
        return "Present";
    }

    return `${date.toLocaleString('default', { month: "short"})} ${date.getFullYear()}`
}