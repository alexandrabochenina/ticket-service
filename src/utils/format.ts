export function formatData(data: string) {
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ]

    const daysOfWeeks = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]

    const [day, month, year] = data.split('.')

    const fullYear = `20${year}`
    const date = new Date(`${fullYear}-${month}-${day}`)
    const formattedDate = `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${fullYear}, ${daysOfWeeks[date.getDay()]}`;
    
    return formattedDate;
}