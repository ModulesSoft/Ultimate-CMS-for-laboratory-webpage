import { useEffect, useState } from "react";
import errorHandler from "./errorHandler";
const instance = axios.create({
    baseURL: "http://localhost:8000/api/v1/",
    timeout: 1000,
    // headers: { "X-Custom-Header": "foobar" },
});

export function useFetchPost({ slug }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await instance
                .get("/articles", {
                    params: {
                        "filter[slug]": slug,
                    },
                })
                .then((response) => setData(response.data))
                .catch((error) => errorHandler(error));
            setLoading(false);
        }
        fetchData();
    }, [slug]);
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

export function useFetchPosts({ categoryId, status = "PUBLISHED", featured }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await instance
                .get("/articles", {
                    params: {
                        "filter[status]": status,
                        "filter[category_id]": categoryId,
                        "filter[featured]": featured,
                    },
                })
                .then((response) => setData(response.data))
                .catch((error) => errorHandler(error));
            setLoading(false);
        }
        fetchData();
    }, [categoryId, status]);
    return {
        data,
        loading,
    };
}
export function useFetchPages() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await instance
                .get("/pages")
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
export function useFetchFooters() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await instance
                .get("/footers")
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

export function useFetchGalleries() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await instance
                .get("/galleries")
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
export function useFetchProfiles({ type, status = "PUBLISHED" }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await instance
                .get(`/${type}/profiles`, {
                    params: {
                        "filter[status]": status,
                    },
                })
                .then((response) => setData(response.data))
                .catch((error) => errorHandler(error));
            setLoading(false);
        }
        fetchData();
    }, [type, status]);
    return {
        data,
        loading,
    };
}

export function useFetchProfile({ user, status = "PUBLISHED" }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await instance
                .get("/users/" + user + "/profile", {
                    // params: {
                    //     "filter[status]": status,
                    //     "filter[category_id]": categoryId,
                    // },
                })
                .then((response) => setData(response.data))
                .catch((error) => errorHandler(error));
            setLoading(false);
        }
        fetchData();
    }, [user, status]);
    return {
        data,
        loading,
    };
}
export function useFetchSetting({ key }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await instance
                .get("/settings", {
                    params: {
                        "filter[key]": key,
                    },
                })
                .then((response) => setData(response.data))
                .catch((error) => errorHandler(error));
            setLoading(false);
        }
        fetchData();
    }, [key]);
    return {
        data,
        loading,
    };
}
export function useFetchSlides() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await instance
                .get("/slides", {})
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
