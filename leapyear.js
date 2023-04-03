function leapyear(year) {
    if (year % 4) {
        if (year % 100) {
            if (year % 400) {
                return "Leap Year.";
            } else {
                return "Not Leap Year.";
            }
        } else {
            return "Not Leap Year.";    
        }
    } else {
        return "Leap Year.";
    }
}