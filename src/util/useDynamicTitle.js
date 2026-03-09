import { useEffect, useState } from "react";
import { useLocation } from "react-router"

export const useDynamicTitle = ()=>{
    const location = useLocation();
    const [lawyerData, setLawyerData] = useState({});

    useEffect(()=>{
        fetch("/lawyerData.json")
        .then(res=>res.json())
        .then(data=>setLawyerData(data));
    },[])
    

    useEffect(()=>{
         const pageTitles = {
        "/": "Home - LawServo",
        "/my-booking": "Booking - LawServo",
        "/blogs": "Blogs - LawServo"

    }

    const path = location.pathname;
        if(pageTitles[path]){
            document.title = pageTitles[path];
        }else if(path.startsWith("/lawyerDetails")){
            const segments = path.split("/");
            const lawyerId = parseInt(segments[2]);
            const lawyerName = lawyerData[lawyerId-1]?.name;

            document.title = `${lawyerName} - LawServo`

        }
        
    },[location,lawyerData])
}