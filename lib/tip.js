import PropTypes from 'prop-types';
import React from 'react';

class Tip extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        direction: PropTypes.string,
        size: PropTypes.number,
    };

    static defaultProps = {
        className: 'Popover-tip',
        size: 24,
    };

    render() {
        const {
            className,
            direction,
            size,
        } = this.props;
        const isPortrait = direction === "up" || direction === "down";
        const mainLength = size;
        const crossLength = size * 2;
        const points = (
            direction === "up" ? `0,${mainLength} ${mainLength},0, ${crossLength},${mainLength}` :
            direction === "down" ? `0,0 ${mainLength},${mainLength}, ${crossLength},0` :
            direction === "left" ? `${mainLength},0 0,${mainLength}, ${mainLength},${crossLength}` :
            `0,0 ${mainLength},${mainLength}, 0,${crossLength}`
        );

        const props = {
            className,
            width: isPortrait ? crossLength : mainLength,
            height: isPortrait ? mainLength : crossLength,
        };

        return (
            <svg {...props}>
                <polygon points={points}>
                </polygon>
            </svg>
        );
    }
}

export default Tip;
