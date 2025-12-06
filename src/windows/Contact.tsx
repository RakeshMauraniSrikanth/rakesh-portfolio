import { WindowControls } from '#components';
import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact me</h2>
            </div>

            <div className='p-5 space-y-5'>
                <img src="images/rakesh.jpg" alt="Rakesh" className='w-20 rounded-full' />
                <h3>Let's connect!</h3>
                <p>Phone: 0767602624</p>
                <p>Email: rakeshsrikanth08@gmail.com</p>
                <ul>
                    {
                        socials.map(({ id, text, link, icon, bg }) => (
                            <li key={id} style={{ backgroundColor: bg }}>
                                <a href={link} target="_blank" rel="noreferrer" title={text} >
                                    <img src={icon} alt={text} className="size-5" />
                                    <span>{text}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow