import { useState, useEffect } from "react";

const useLoader = (action, ...actionParams) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    async function loadData() {
        try {
            setLoading(true);
            const actionData = await action(...actionParams);
            setData(actionData);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    }
    useEffect(() => {
        loadData();
    }, []);
    return [data, loading, error, setData, setLoading, setError];
};

export default useLoader;
