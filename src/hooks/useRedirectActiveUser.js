import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function useRedirectActiveUser(user, path) {
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate(path)
        }
    }, [user])
}