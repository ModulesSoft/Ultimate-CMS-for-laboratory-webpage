import { useEffect, useState } from "react";
import errorHandler from "./errorHandler";
const instance = axios.create({
    baseURL: "/api/v1/",
    timeout: 5000,
    // headers: { "X-Custom-Header": "foobar" },
});

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

export function useFetchPosts({
    slug,
    categoryId,
    status = "PUBLISHED",
    featured,
    tag,
}) {
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
                        "filter[slug]": slug,
                        "filter[tags.keyword]": tag,
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
export function useFetchProfiles({ type, tag, status = "PUBLISHED" }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await instance
                .get(`/${type}/profiles`, {
                    params: {
                        "filter[status]": status,
                        "filter[tags.keyword]": tag,
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
// send contact form email
export function useSendEmail(formData) {
    const [data, setData] = useState({});
    const [status, setStatus] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            await instance
                .post("/sendMail", formData)
                .then((response) => {
                    setStatus(response.status);
                    setData(response.data);
                })
                .catch((error) => {
                    if (error.code === "ECONNABORTED") {
                        setData({
                            message: [
                                "Request timeout!",
                                "Please try again later.",
                            ],
                        });
                        setStatus(408);
                        return;
                    }
                    setStatus(error.response.status);
                    setData(error.response.data);
                });
            setLoading(false);
        }
        if (formData.name && formData.email && formData.message) {
            fetchData();
        }
    }, [formData]);
    return {
        data,
        status,
        loading,
    };
}
