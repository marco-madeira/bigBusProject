// export const convertDate = (date: number) => {
//     const [year, month, day] = dataString.split('-');
//     return `${day}/${month}/${year}`;
// }

export const formatDate = (date: number) => {
    const day = Math.floor(date / 1000000).toString().padStart(2, '0');
    const month = Math.floor((date % 1000000) / 10000).toString().padStart(2, '0');
    const year = (date % 10000).toString();
    return `${day}/${month}/${year}`;
}