import { Bounce, toast } from "react-toastify";
import { getFromDB } from "./makeBooking"

const removeBooking = (bookedLawyerData) => {
    const currentBooking = getFromDB();

    console.log("removed", bookedLawyerData.name);

    const removedBooking = currentBooking.filter((item) => item.lawyerId !== bookedLawyerData.id);
    const removeBookingJSON = JSON.stringify(removedBooking);

    localStorage.setItem("bookingData", removeBookingJSON);

     toast.warn(`Cancelled your booking with ${bookedLawyerData.name} today!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    setTimeout(()=>{
        window.location.reload();
    },2000);

}

export { removeBooking };