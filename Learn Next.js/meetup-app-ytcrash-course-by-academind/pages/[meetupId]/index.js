import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';


export default function MeetupDetails(props) {
    return (
        <MeetupDetail
            // image='https://image.shutterstock.com/image-vector/team-communication-abstract-concept-vector-600w-1860019639.jpg'
            image = {props.meetupData.image}
            title = {props.meetupData.title}
            address = {props.meetupData.address}
            description = {props.meetupData.description}
        />
    );
}

export async function getStaticPaths() {
    // waisy db ya api sy aye gi dynamically...

    const client = await MongoClient.connect('mongodb+srv://hawk:123@cluster0.ntn1c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    client.close();

    return {
        /*  fallback: false => your path contains all supported meetupId values, which means the user enters
            anything except below values like id=3 or id=1u23io it will get a 404 error */
        /*  fallback: true => next.js would try to generate a page for this meetupId dynamically on the server
            for the incoming request whether the id is correct or not */
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            },
        })),
    };
}

export async function getStaticProps(context) {
    // Fetch Data for a Single Meetup
    const meetupId = context.params.meetupId;
    // yeh log console mein nahi balkeh IDE ky terminal ya build time py display hoga
    console.log('meetupId: ', meetupId);

    const client = await MongoClient.connect('mongodb+srv://hawk:123@cluster0.ntn1c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne( {_id: ObjectId(meetupId)} );
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            }
        },
        // revalidate: 10
    };
}
