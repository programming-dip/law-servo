import { Bounce, toast } from "react-toastify";
import { isAvailable } from "./availability";
import Swal from "sweetalert2";

const dateObj = new Date();
const date = dateObj.toLocaleDateString();

const getFromDB = () => {
    const dbDataJson = localStorage.getItem("bookingData");
    if (dbDataJson) {
        return JSON.parse(dbDataJson);
    } else {
        return [];
    }
}

const makeBooking = (targetedLawyerData) => {

    const availability = isAvailable(targetedLawyerData.availability);

    const setToDB = (id) => {
        const dbData = getFromDB();

        const isBooked = dbData.some((item) => item.lawyerId === id && item.date === date);
        if (isBooked) {

            toast.warn(`You've already booked ${targetedLawyerData.name} for the day!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        } else {
            if (availability === "Available") {
                const bookingObj = {
                    lawyerId: id,
                    date: date
                }

                const newBookingObj = [...dbData, bookingObj];
                const newBookingJSON = JSON.stringify(newBookingObj);
                localStorage.setItem("bookingData", newBookingJSON);

                toast.success(`Successfully booked ${targetedLawyerData.name}!`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    onClose: () => { window.location.href = "/my-booking" }
                });



            } else {

                // toast.error(`${targetedLawyerData.name} is not available today`, {
                //     position: "top-right",
                //     autoClose: 3000,
                //     hideProgressBar: false,
                //     closeOnClick: false,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "light",
                //     transition: Bounce,
                // });

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${targetedLawyerData.name} is not available today`
                    
                });
            }
        }


    }

    setToDB(targetedLawyerData.id);
}

export { makeBooking, getFromDB, date };