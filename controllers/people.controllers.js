import query from "../db/utils.js";

const findAll = async () => {
    return await query(
        "SELECT id, first_name, last_name, email, gender FROM mock_data"
    );
};

const findOne = async (id) => {
    return await query("SELECT id, first_name, last_name, email, gender FROM mock_data WHERE id = ?", [id]
    );
};

const addOne = async (newPerson) => {
    return await query("INSERT INTO mock_data SET ?", [newPerson]
    );
};

const updateOne = async (updatedPerson, id) => {
    return await query("UPDATE mock_data SET ?", [updatedPerson, id]
    );
};

const removeOne = async (id) => {
    return await query("DELETE FROM mock_data WHERE id = ?", [id]
    );
};

export default { findOne, findAll, addOne, updateOne, removeOne };