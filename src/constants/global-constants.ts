// This constant allows you to store the "pico y placa" schedule list for days
export const LIST_OF_LICESE_PLATE_END_DIGIT_ALLOWED_PER_DAY = {
    MONDAY: [1, 2],
    TUESDAY: [3, 4],
    WEDNESDAY: [5, 6],
    THURSDAY: [7, 8],
    FRIDAY: [9, 0],
    SATURDAY: [],
    SUNDAY: []
}

// MOMENTS DAY OF THE WEEK 0=THURSDAY .... 7=WEDNESDAY 
export const DAYS_OF_WEEK = [ 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY' ]

// HOURS LOCKED

export const HOURS_LOCKED = {
    DAY_START: {HOUR: 7, MIN: 0},
    DAY_END: {HOUR: 9, MIN: 30},
    NIGHT_START: {HOUR: 16, MIN: 0},
    NIGHT_END: {HOUR: 19, MIN: 30},
}

// ANGULAR IMAGE
export const WIDTH_IMAGE = 200;

// PATTERN
export const PATTERN_LICENSE_PLATE = '^[A-Za-z]{3}-?[0-9]{3,4}$';