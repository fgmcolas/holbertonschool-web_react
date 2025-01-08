import { getCurrentYear, getFooterCopy } from '../utils/utils.js'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        minWidth: '100vw',
        fontSize: '16px',
        borderTop: '2px solid #e1003c',
        textAlign: 'center',
        fontStyle: 'italic',
    },
});

function Footer() {
    return (
        <div className={css(styles.footer)}>
            <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
        </div>
    );
}

export default Footer;
