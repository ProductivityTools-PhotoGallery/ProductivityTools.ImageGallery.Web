const dev = {
    PATH_BASE: "https://localhost:5001/api"
}

export const config = process.env.NODE_ENV == "development" ? dev : dev;