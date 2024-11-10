import { Injectable } from '@angular/core';
import { Clock }  from '../clocks-interface/clock.interface';
import { BehaviorSubject } from 'rxjs';

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
      imageLink: '',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
    },
    {
      index: 1,
      timeZone: 'Etc/GMT',
      timeZoneName: 'Greenwich Mean Time',
      utcOffset: 0,
      imageLink: '',
      formattedTime: '',
      isAnalog: false,
      is24Hour: false,
      display: false
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
      display: false
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
      display: false
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
      display: false
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
      display: false
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
      display: false
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
      display: false
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
      display: false
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
      display: false
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
      display: false
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
      display: false
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
      display: false
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
      display: true
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
      display: true
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
      display: true
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
      display: false
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
      display: false
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
      display: false
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
      display: false
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
}