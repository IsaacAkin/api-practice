import * as db from '../src/database.js';


export const createUser = async (req, res) => {
    const { user_id, first_name, last_name, age } = req.body;
    await db.createUser(user_id, first_name, last_name, age);
    
    res.send(`User with the name '${first_name}' added to the database`);
};

export const getAllUsers = async (req, res) => {
    // res.send(await db.getAllUsers());
    res.json(await db.getAllUsers());
};

export const getUserById = async (req, res) => {
    const id = req.params.id;
    const foundUser = await db.getUserById(id);

    if (foundUser) res.send(foundUser);
    res.send(`User with the id: '${id}' not found.`)
};

export const updateUserParameter = async (req, res) => {
    const id = req.params.id;
    const { first_name, last_name, age } = req.body;

    if(first_name) { await db.updateUserField(id, "first_name", first_name); };
    if(last_name) { await db.updateUserField(id, "last_name", last_name); };
    if(age) { await db.updateUserField(id, "age", age); };

    res.send(`User with the id '${id}' has been updated`);
};

export const deleteUserById = async (req, res) => {
    const { id } = req.params;

    await db.deleteUser(id);

    res.send(`User with the id: '${id}' has been deleted from the database.`);
};