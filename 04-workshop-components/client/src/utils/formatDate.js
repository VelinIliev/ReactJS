export const formatDate = (input) => {
    const date = new Date(input);
    let day = date.getDate();

    let month = date.getMonth();
    let months = ['Jan', ' Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    let year = date.getFullYear();
    return `${months[month]} ${day},  ${year}`;
}

// export default formatDate;