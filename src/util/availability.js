const isAvailable = (daysArr)=>{
const dayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    if(daysArr.includes(dayName)){
        return "Available";
    }else {
        return "Not Available";
    }
}

export {isAvailable};