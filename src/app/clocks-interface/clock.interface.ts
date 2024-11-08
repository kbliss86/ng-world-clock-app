export interface Clock {
    index: number; 
    timeZone: string;
    timeZoneName: string;
    utcOffset: number;
    formattedTime: string;
    isAnalog: boolean;
    is24Hour: boolean;
    display: boolean;   
}