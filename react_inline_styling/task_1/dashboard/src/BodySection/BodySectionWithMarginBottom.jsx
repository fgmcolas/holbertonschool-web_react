import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
    },
});

function BodySectionWithMarginBottom({ title, children }) {
    return (
        <div className={css(styles.bodySectionWithMargin)}>
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
    );
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

BodySectionWithMarginBottom.defaultProps = {
    children: null,
};

export default BodySectionWithMarginBottom;
