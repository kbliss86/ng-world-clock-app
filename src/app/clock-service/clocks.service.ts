import { Injectable } from '@angular/core';
import { Clock }  from '../clocks-interface/clock.interface';
import { BehaviorSubject } from 'rxjs';
import * as SunCalc from 'suncalc';

@Injectable({
  providedIn: 'root'
})
export class ClocksService {

  clocks: Clock[] = [
    {
      index: 0,
      timeZone: 'UTC',
      timeZoneName: 'Coordinated Universal Time',
      utcOffset: 0,
      imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1280px-Flag_of_the_United_Nations.svg.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: 51.476852,
      longitude: -0.000500,
      sunrise: '',
      sunset: ''
    },
    {
      index: 1,
      timeZone: 'Etc/GMT',
      timeZoneName: 'Greenwich Mean Time',
      utcOffset: 0,
      imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1280px-Flag_of_the_United_Nations.svg.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: 51.482600,
      longitude: -0.007400,
      sunrise: '',
      sunset: ''
    },
    {
      index: 2,
      timeZone: 'Europe/London',
      timeZoneName: 'British Summer Time',
      utcOffset: 1,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: 51.507222,
      longitude: -0.127500,
      sunrise: '',
      sunset: ''
    },
    {
      index: 3,
      timeZone: 'Europe/Berlin',
      timeZoneName: 'Central European Time',
      utcOffset: 1,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: 52.520008,
      longitude: 13.404954,
      sunrise: '',
      sunset: ''
    },
    {
      index: 4,
      timeZone: 'Europe/Kiev',
      timeZoneName: 'Eastern European Time',
      utcOffset: 2,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/ukraine-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: 50.450100,
      longitude: 30.523400,
      sunrise: '',
      sunset: ''
    },
    {
      index: 5,
      timeZone: 'Europe/Moscow',
      timeZoneName: 'Moscow Standard Time',
      utcOffset: 3,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/russia-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: 55.755825,
      longitude: 37.617298,
      sunrise: '',
      sunset: ''
    },
    {
      index: 6,
      timeZone: 'Asia/Kolkata',
      timeZoneName: 'Indian Standard Time',
      utcOffset: 5.5,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: 22.572645,
      longitude: 88.363892,
      sunrise: '',
      sunset: ''
    },
    {
      index: 7,
      timeZone: 'Australia/Perth',
      timeZoneName: 'Australian Western Standard Time',
      utcOffset: 8,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-2048x1024.jpg',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: -31.950527,
      longitude: 115.860457,
      sunrise: '',
      sunset: ''
    },
    {
      index: 8,
      timeZone: 'Australia/Adelaide',
      timeZoneName: 'Australian Central Standard Time',
      utcOffset: 9.5,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-2048x1024.jpg',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: -34.928499,
      longitude: 138.600746,
      sunrise: '',
      sunset: ''
    },
    {
      index: 9,
      timeZone: 'Australia/Sydney',
      timeZoneName: 'Australian Eastern Standard Time',
      utcOffset: 10,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-2048x1024.jpg',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: -33.868820,
      longitude: 151.209290,
      sunrise: '',
      sunset: ''
    },
    {
      index: 10,
      timeZone: 'Pacific/Auckland',
      timeZoneName: 'New Zealand Standard Time',
      utcOffset: 12,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/new-zealand-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: -36.848461,
      longitude: 174.763336,
      sunrise: '',
      sunset: ''
    },
    {
      index: 11,
      timeZone: 'Pacific/Honolulu',
      timeZoneName: 'Hawaii Standard Time',
      utcOffset: -10,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: 21.306944,
      longitude: -157.858337,
      sunrise: '',
      sunset: ''
    },
    {
      index: 12,
      timeZone: 'America/Anchorage',
      timeZoneName: 'Alaska Standard Time',
      utcOffset: -9,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: 61.218056,
      longitude: -149.900284,
      sunrise: '',
      sunset: ''
    },
    {
      index: 13,
      timeZone: 'America/Los_Angeles',
      timeZoneName: 'Pacific Standard Time',
      utcOffset: -8,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: true,
      latitude: 34.052235,
      longitude: -118.243683,
      sunrise: '',
      sunset: ''
    },
    {
      index: 14,
      timeZone: 'America/Denver',
      timeZoneName: 'Mountain Standard Time',
      utcOffset: -7,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: true,
      latitude: 39.739235,
      longitude: -104.990250,
      sunrise: '',
      sunset: ''
    },
    {
      index: 15,
      timeZone: 'America/Chicago',
      timeZoneName: 'Central Standard Time',
      utcOffset: -6,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: true,
      latitude: 41.878113,
      longitude: -87.629799,
      sunrise: '',
      sunset: ''
    },
    {
      index: 16,
      timeZone: 'America/New_York',
      timeZoneName: 'Eastern Standard Time',
      utcOffset: -5,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: 40.712776,
      longitude: -74.005974,
      sunrise: '',
      sunset: ''
    },
    {
      index: 17,
      timeZone: 'America/Halifax',
      timeZoneName: 'Atlantic Standard Time',
      utcOffset: -4,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: 44.648618,
      longitude: -63.585948,
      sunrise: '',
      sunset: ''
    },
    {
      index: 18,
      timeZone: 'America/St_Johns',
      timeZoneName: 'Newfoundland Standard Time',
      utcOffset: -3.5,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: 47.561509,
      longitude: -52.712576,
      sunrise: '',
      sunset: ''
    },
    {
      index: 19,
      timeZone: 'America/Sao_Paulo',
      timeZoneName: 'Brasília Summer Time',
      utcOffset: -2,
      imageLink: 'https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false,
      latitude: -23.550520,
      longitude: -46.633308,
      sunrise: '',
      sunset: ''
    }
  ]; 

  // displayClocks: Clock[];

  private displayClocksSubject = new BehaviorSubject<Clock[]>(this.clocks.filter(clock => clock.display));
  displayClocks$ = this.displayClocksSubject.asObservable();

  constructor() { 

//makes this array equal to the clocks array if the display property is true
// this.displayClocks = this.clocks.filter(clock => clock.display);
  }

//this method returns to clocks array that is meant to be displayed
  getDisplayClocks(): Clock[] {
    return this.displayClocksSubject.getValue();
  }

//this method returns to clocks array that is meant to be used in the settings
  getClocks(): Clock[] {
    return this.clocks;
  }

//this method adds a new clock to the clocks array
  addClock(newClock: Clock): void {
    newClock.index = this.clocks.length;
    newClock.formattedTime = '';
    this.clocks.push(newClock);
  }

//updates the display property of a clock
  editClock(index: number, updateClock: Partial<Clock>): void {
    const clock = this.clocks[index];
    if (clock) {
      this.clocks[index] = { ...clock, ...updateClock };
      this.updateDisplayClocks();
    }
  }

  updateDisplayClocks(): void {
    this.displayClocksSubject.next(this.clocks.filter(clock => clock.display));
    // this.displayClocks = this.clocks.filter(clock => clock.display);
  }
  
  //deletes a clock from the array and updates the index to maintain consistency
  deleteClock(index: number): void {
    this.clocks.splice(index, 1);
    this.updateIndexes();
  }

  // deleteDisplayClock(index: number): void {
  //   this.displayClocksSubject.splice(index, 1);
  //   this.updateIndexes();
  // }

  //updates the indexes of the clocks array to maintain consistency
  updateIndexes(): void {
    this.clocks.forEach((clock, index) => {
      clock.index = index;
    });
  }

  getSunTimes(date: Date, latitude: number, longitude: number): { sunrise: Date, sunset: Date } {
    const times = SunCalc.getTimes(date, latitude, longitude);
    return {
      sunrise: times.sunrise,
      sunset: times.sunset,
    };
  }
}