/*  yahan classes aik object hai jis mein different styles as a property save hain aur hum inko
    .dot sy access karain gy. modules banany ka aik faida yeh hai keh har file mein har element unique
    hota hai yani styling ky clashes nahi aaty
*/
import classes from './MeetupDetail.module.css';

export default function MeetupDetail(props) {
    return (
        <section className={classes.detail}>
            <img
                src={props.image} alt={props.title}
            />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    );
}
