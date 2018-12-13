import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Checkbox = props => (
    <input type="checkbox" {...props} />
)

class Checkbox extends Component {

    constructor(props){
        super(props);

        this.state = {
            isChecked: false,
        }
    }

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label } = this.props;

        this.setState(({ isChecked }) => (
            {
                isChecked : !isChecked,
            }
        ));

        handleCheckboxChange(label);
    }

    render() {
        const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
            border: 0;
            clip: rect(0 0 0 0);
            clippath: inset(50%);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            white-space: nowrap;
            width: 1px;
        `;

        const StyledCheckbox = styled.div`
            display: inline-block;
            width: 16px;
            height: 16px;
            background: ${props => props.checked ? 'salmon' : 'papayawhip'}
            border-radius: 3px;
            transition: all 150ms;
            ${HiddenCheckbox}:focus + & {
                box-shadow: 0 0 0 3px pink;
            }
            ${Icon} {
                visibility: ${props => props.checked ? 'visible' : 'hidden'}
            }
        `;

        const CheckboxContainer = styled.div`
            display: inline-block;
            vertical-align: middle;
        `;

        const Icon = styled.svg`
            fill: none;
            stroke: white;
            stroke-width: 2px;
        `;

        const Checkbox = ({ className, checked, ...props }) => (
            <CheckboxContainer className={className}>
                <HiddenCheckbox checked={checked} {...props} />
                <StyledCheckbox checked={checked}>
                    <Icon viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                    </Icon>
                </StyledCheckbox>
            </CheckboxContainer>
        )
        const {label} = this.props;
        const { isChecked } = this.state;

        return (
            <div className="checkbox">
                <label>
                    <input 
                        type = "checkbox"
                        value = {label}
                        checked = {isChecked}
                        onChange = {this.toggleCheckboxChange}
                    />

                    {label}
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    label : PropTypes.string.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
}

export default Checkbox;