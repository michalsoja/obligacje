const calcDate = (additionalYears) => {
    const formatter = new Intl.DateTimeFormat('pl', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const date = new Date();
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate();
    const expectedEndDate = new Date(year + Number(additionalYears), month, day);
    return formatter.format(expectedEndDate);
}

export default calcDate