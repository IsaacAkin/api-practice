import { MongoClient } from 'mongodb';
import {v4 as randomId} from 'uuid';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env'});

const uri = process.env.URI;

const client = new MongoClient(uri);

export const createUser = async (id, firstName, lastName, age) => {
    try {
        const database = client.db('accounts');
        const users = database.collection('users');

        const query = {
            user_id: randomId(),
            first_name: firstName,
            last_name: lastName,
            age: age
        };

        await users.insertOne(query);
    } catch (err) {
        console.error(err);
    }
}

export const getAllUsers = async () => {
    try {
        const database = client.db('accounts');
        const users = database.collection('users');

        const query = await users.find().project({_id: 0}).toArray();

        if (query.length === 0) {
            return 'No documents found.';
        }

        return query;
    } catch (err) {
        console.error(err);
    }
};

export const getUserById = async (id) => {
    try {
        const database = client.db('accounts');
        const users = database.collection('users');

        const query = { user_id: id };
        const result = await users.findOne(query);

        return result;
    } catch (err) {
        console.error(err);
    }
};

export const updateUserField = async (id, field, val) => {
    try {
        const database = client.db('accounts');
        const users = database.collection('users');

        const filter = { user_id: id };
        const query = { $set: { [field]: val } };
        const result = await users.updateOne(filter, query);

        return result;
    } catch (err) {
        console.error(err);
    }
};

export const deleteUser = async (id) => {
    try {
        const database = client.db('accounts');
        const users = database.collection('users');

        const query = { user_id: id };
        const documentToDelete = await users.deleteOne(query);

        return documentToDelete.deletedCount;
    } catch (err) {
        console.error(err);
    }
}