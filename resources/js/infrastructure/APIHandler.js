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

// export const getPost = (title, featured, category_id) => {
//     useEffect(() => {
//         let result = null;
//         instance
//             .get("/articles", {
//                 params: {
//                     "filter[category_id]": category_id,
//                     "filter[featured]": featured,
//                     "filter[title]": title,
//                 },
//             })
//             .then((response) => (result = response.data))
//             .catch((error) => getErrors(error));
//         return result;
//     });
// };
