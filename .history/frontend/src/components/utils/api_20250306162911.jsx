import axios from "axios";

export const fetchProtectedData = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
        console.log("No token found");
        return;
    }

    try {
        const response = await axios.get("http://localhost:5000/api/protected-route", {
            headers: { Authorization: `Bearer ${token}` }
        });

        console.log("Protected Data:", response.data);
        return response.data;
    } catch (error) {
        console.log("Unauthorized:", error.response?.data);
    }
};
