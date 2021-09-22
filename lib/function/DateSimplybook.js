
const months = [ "","janv.", "fev.", "mars", "avril", "mai", "juin", 
"juil.", "août", "sept.", "oct.", "nov.", "dec." ];

export const DateSimplybook = (dateString) => {

    const [date,heure] = dateString.split(' ');

    const [year,month,day] = date.split('-');
    const [hours,minutes,secondes] = heure.split(':')

    const newDate = `${day} ${months[Number(month)]}`
    const newHours = `${hours} : ${minutes}`

    return {newDate,newHours}

}