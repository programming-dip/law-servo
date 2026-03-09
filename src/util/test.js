import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router"

export const useDynamicTitle = () => {
    const location = useLocation();
    const [lawyerData, setLawyerData] = useState({});


    useMemo(() => {
      fetch("/lawyerData.json")
            .then(res => res.json())
            .then(data => setLawyerData(data));
    }, []);

    console.log("dyPag", lawyerData);
    useEffect(() => {
        const path = location.pathname;

        const pageTitles = {
            '/': 'Home - LawServo',
            "/my-booking": "Bookings - LawServo",
            "/blogs": "Blogs - LawServo",

        };

        if (pageTitles[path]) {
            document.title = pageTitles[path];
        } else if (path.startsWith("/lawyerDetails")) {
            const segments = path.split("/");
            const id = segments[2];
            const lawyerName = lawyerData[id-1]?.name;
            
                document.title = `${lawyerName} - LawServo`;
            
        }
    }, [location,lawyerData])
}