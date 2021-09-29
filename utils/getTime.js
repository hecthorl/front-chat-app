const getTime = fecha => {
   const yearDayAndMonth = new Intl.DateTimeFormat(navigator.language, {
      day: 'numeric',
      month: 'short',
      year: '2-digit'
   }).format(fecha)
   const minuteSecondAndHour = new Intl.DateTimeFormat(navigator.language, {
      second: '2-digit',
      minute: '2-digit',
      hour: '2-digit',
      hourCycle: 'h12'
   }).format(fecha)

   return { yearDayAndMonth, minuteSecondAndHour }
}

export default getTime
