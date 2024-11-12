export interface Clock {
    index: number; 
    timeZone: string;
    timeZoneName: string;
    utcOffset: number;
    imageLink: string;
    formattedTime: string;
    isAnalog: boolean;
    is24Hour: boolean;
    display: boolean;
    latitude: number;
    longitude: number;
    sunrise: string;
    sunset: string;   
}