import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';


const DUMMY_MEETUPS = [
    {
        id: 1,
        title: 'Usama',
        image: 'https://image.shutterstock.com/image-vector/team-communication-abstract-concept-vector-600w-1860019639.jpg',
        address: 'Address 1',
        description: 'Description 1'
    },
    {
        id: 2,
        title: 'Cyber Hawk',
        image: 'https://image.shutterstock.com/image-vector/team-communication-abstract-concept-vector-600w-1860019639.jpg',
        address: 'Address 2',
        description: 'Description 2'
    }
];


export default function HomePage(props) {
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    /* useEffect(() => {
        // send an http request and fetch data
        setLoadedMeetups(DUMMY_MEETUPS);
    }, []);
    empty dependency array => whenever component is first rendered but never thereafter */

    return (
        <MeetupList meetups={props.meetups} />
    );
}

export async function getStaticProps() {
    // Fetch Data from an API or Database or a File System
    // always return an object and neither runs on the server nor the client

    const client = await MongoClient.connect('mongodb+srv://hawk:123@cluster0.ntn1c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        // Incremental Static Generation => itny seconds baad data update hoga re-fetch
        // re-pre-generated on the server after deployment, bar bar deploy ya build nahi karna parta
        revalidate: 10      // validate on every x seconds
    };
}

/* export async function getServerSideProps(context) {
    // middleware mein request aur response ky objects
    const req = context.req;        // auth mein session aur cookies wagera mein helpful hai req
    const res = context.res;
    // Fetch Data from an API or Database or a File System
    // always return an object and runs on the server
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
    };
} */
