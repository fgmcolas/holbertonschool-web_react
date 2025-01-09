import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '2px solid #e1003c',
    },
    logo: {
        width: '150px',
        height: 'auto',
        marginRight: '10px',
    },
    title: {
        color: '#e1003c',
    },
});

function Header() {
    return (
        <div className={css(styles.header)}>
            <img src={holbertonLogo} alt="holberton logo" className={css(styles.logo)} />
            <h1 className={css(styles.title)}>School dashboard</h1>
        </div>
    );
}

export default Header;
