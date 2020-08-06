export default function convertHourToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number)
    const TimeinMinutes = (hour * 60) + minutes;
    
    return TimeinMinutes;
}