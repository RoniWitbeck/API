import connection from "./index";

const query = (queryString, values) => {
    return new Promise((res, rej) => {
        connection.query(queryString, values, (err, results) => {
            if (err) rej(err);
            res(results);
        });
    });
};

export default query;