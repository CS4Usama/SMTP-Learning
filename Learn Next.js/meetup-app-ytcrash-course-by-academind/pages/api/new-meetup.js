/*      /api/new-meetup     */

import { MongoClient } from 'mongodb';

export const Handler = async(req, res) => {
    /* try-catch can be used here for better error handling */
    if(req.method === 'POST') {
        const data = req.body;

        /*  This is the code that you never want to run on the client-side because you would expose your
            credentials to your visitors which is a security problem but here in this api route it's not
            a problem because the code defined here will never end up on the client-side. So, this is a
            secure place to store credentials. */
        await MongoClient.connect('mongodb+srv://hawk:123@cluster0.ntn1c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        // above returns promise

        const db = client.db();
        // collection => table ,     document => entries (js object)
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);     // returns promise so we use await
        console.log(result);

        client.close();

        res.status(201).json( { message: 'Meetup Inserted!' } );
    }
}
