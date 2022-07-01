import { useEffect, useState } from "react";
import errorHandler from "./errorHandler";
const instance = axios.create({
    baseURL: "http://localhost:8000/api/v1/",
    timeout: 1000,
    // headers: { "X-Custom-Header": "foobar" },
});

export function useFetchPost({ title, featured, category_id }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await instance
                .get("/articles", {
                    params: {
                        "filter[title]": title,
                        "filter[featured]": featured,
                        "filter[category_id]": category_id,
                    },
                })
                .then((response) => setData(response.data))
                .catch((error) => errorHandler(error));
            setLoading(false);
        }
        fetchData();
    }, []);
    return {
        data,
        loading,
    };
}

export function useFetchCategories() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await instance
                .get("/categories")
                .then((response) => setData(response.data))
                .catch((error) => errorHandler(error));
            setLoading(false);
        }
        fetchData();
    }, []);
    return {
        data,
        loading,
    };
}

export function useFetchPosts({ categoryId, published = "PUBLISHED" }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await instance
                .get("/articles", {
                    params: {
                        // "filter[published]": published,
                        "filter[category_id]": categoryId,
                    },
                })
                .then((response) => setData(response.data))
                .catch((error) => errorHandler(error));
            setLoading(false);
        }
        fetchData();
    }, []);
    return {
        data,
        loading,
    };
}
