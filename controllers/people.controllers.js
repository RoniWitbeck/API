import query from "../db/utils";

const findAll = async () => {
    return await query(
        "SELECT id, first_name, last_name, email, gender FROM Columns"
    );
};

const findOne = async (first_name, last_name) => {
    return await query("SELECT id, first_name, last_name, email, gender FROM Columns WHERE first_name OR last_name = ?", [
        first_name,  
        last_name 
    ]);
};

const addOne = async (newPerson) => {
    return await query("INSERT INTO mock_data SET ?", [
        newPerson
    ]);
};

const updateOne = async (updatedPerson, id) => {
    return await query("UPDATE mock_data SET ?", [
        updatedPerson,
        id
    ]);
};

const removeOne = async (id) => {
    return await query("DELETE FROM mock_data WHERE id = ?", [
        id
    ]);
};

export default { findOne, findAll, addOne, updateOne, removeOne };