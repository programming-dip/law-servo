const dateObj = new Date();
const date = dateObj.toLocaleDateString();
const makeBooking = (id) => {

    const getFromDB = () => {
        const dbDataJSON = localStorage.getItem("bookingData");

        if (dbDataJSON) {
            return JSON.parse(dbDataJSON);
        } else {
            return [];
        }

    }

    const setToDB = (id) => {

        
        const dbDataArr = getFromDB();

        const isBooked = dbDataArr.some((item) => item.lawyerId === id && item.date === date);

        if (isBooked) {
            console.log("!!!Booked!!!");
        } else {
            const bookingObj = {
                lawyerId: id,
                date: date
            }

            const newBookingObj = [...dbDataArr, bookingObj];
            const newBookingJSON = JSON.stringify(newBookingObj);
            localStorage.setItem("bookingData", newBookingJSON);
        }

    }

    setToDB(id);
}

export { makeBooking };