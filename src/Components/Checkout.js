import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Checkout = () => {

    //navigate through pages
    const navigate = useNavigate();
    //required fields
    const [form, setForm] = useState({
        name: "",
        email: "",
        shippingAddress1: "",

        touched: {
            email: false,
            password: false,
            shippingAddress1: false
        },
    });

    //shipping and billing properties 
    const [checked, setChecked] = useState(false);
    const [billingAdd, setBillingAdd] = useState({billingAdd1: "", billingAdd2: ""});
    const [shippingAddress, setShippingAddress] = useState({shippingAddress1: "", shippingAddress2: ""});
    const [disableAdd, setDisableAdd] = useState(false);

    //check if required fields are empty
    const errors = {
        "name": form.name.length === 0,
        "email": form.email.length === 0,
        "shippingAddress1": form.shippingAddress1.length === 0,
    };
    //disable confirm order button
    const disabled = Object.keys(errors).some((x) => errors[x]);

    //handle change of required fields
    const handleChange = (ev) => {
        const { name, value } = ev.target;

        setForm((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    //handle blur of required fields
    const handleBlur = (ev) => {
        const { name } = ev.target;
        setForm((prevState) => {
            return {
                ...prevState,
                touched: { ...form.touched, [name]: true },
            };
        });
    };

    //submit forms and navigate to order confirmation page
    const handleSubmit = (ev) => {
        if (disabled) {
            ev.preventDefault();
            return;
        }
        navigate("/orderconfirmation");
    };

    //show if required fields are empty and activate invalid property of the corresponding element
    const showError = (field) => (errors[field] ? form.touched[field] : false);

    //handle checkbox change of the same shipping and billing address
    const handleChangeCheckBox = () => {
        setChecked(!checked);
        setDisableAdd(!checked);
    }

    //handle blur of the same shipping and billing address
    // and copy the billing address to shipping address in case checkbox is checked
    const handleBlurAdd = (ev) => {
        const { name, value } = ev.target;

        setBillingAdd((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
        if(checked) {
            const shippingAdd = {shippingAddress1: billingAdd.billingAdd1, 
                                 shippingAddress2: billingAdd.billingAdd2};
            setShippingAddress(shippingAdd);        
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CheckoutContainer>
                {/* Row 1 */}
                <CheckoutTitle>Checkout</CheckoutTitle>

                {/* Row 4 */}
                <CheckoutHeader>
                    <h4>Your Details</h4>
                </CheckoutHeader>

                {/* Row 5 */}
                <CheckoutHeaderLine />

                {/* Row 6 */}
                <CheckoutTable>
                    <CheckoutFormLabel>Name *</CheckoutFormLabel>
                    <CheckoutInput
                        type="text"
                        name="name"
                        $invalid={showError("name")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter name"
                    />
                    <CheckoutFormLabel>Email *</CheckoutFormLabel>
                    <CheckoutInput
                        type="text"
                        name="email"
                        $invalid={showError("email")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter email"
                    />
                </CheckoutTable>

                {/* Row 7 */}
                <CheckoutHeader>
                    <h4>Address Details</h4>
                </CheckoutHeader>

                {/* Row 8 */}
                <CheckoutHeaderLine />

                {/* Row 9 */}
                <CheckoutTable>
                    <CheckoutFormLabel>Same as shipping</CheckoutFormLabel>
                    <CheckoutFormCheckbox 
                        type="checkbox"
                        checked={checked}
                        onChange={handleChangeCheckBox} />

                    <CheckoutFormLabel>Billing Address</CheckoutFormLabel>

                    <CheckoutAddress>
                        <input
                            type="text"
                            name="billingAdd1"
                            defaultValue={billingAdd.billingAdd1}
                            onBlur={handleBlurAdd}
                        />
                        <input 
                            type="text" 
                            name="billingAdd2"
                            defaultValue={billingAdd.billingAdd2} 
                            onBlur={handleBlurAdd}
                        />
                        
                    </CheckoutAddress>

                    <CheckoutFormLabel>Shipping Address *</CheckoutFormLabel>

                    <CheckoutAddress>
                        <CheckoutInput
                            type="text"
                            name="shippingAddress1"
                            $invalid={showError("shippingAddress1")}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={disableAdd}
                            defaultValue={shippingAddress.shippingAddress1}
                            placeholder={"Enter first address line"}
                        />
                        <input 
                            type="text" 
                            name="shippingAddress2" 
                            disabled={disableAdd} 
                            defaultValue={shippingAddress.shippingAddress2}
                        />
                        
                    </CheckoutAddress>
                </CheckoutTable>

                <CancelButton onClick={() => navigate("/cart")}>
                    Cancel
                </CancelButton>

                <CheckoutButton disabled={disabled} onClick={() => navigate("/orderconfirmation")}>
                    Confirm Order
                </CheckoutButton>
            </CheckoutContainer>
        </form>
    );
}

export default Checkout;


const CheckoutContainer = styled.div`
    display: grid;
    padding: 20px;
    grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr 0.25fr 0.5fr;
    grid-template-columns: 0.1fr 1fr 0.1fr;
`;
const CheckoutTable = styled.div`
    grid-column: 1 / span 3;
    display: grid;
    grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
    grid-template-columns: 0.2fr 0.4fr 0.2fr 0.4fr;
    column-gap: 20px;
    padding-left: 10px;
`;

const CheckoutHeader = styled.div`
    grid-column: 1 / span 3;
    padding-top: 20px;
`;
const CheckoutHeaderLine = styled.hr`
    grid-column: 1 / span 3;
    margin-bottom: 20px;
    border: 1px solid gray;
`;
const CheckoutTitle = styled.h2`
    grid-column: 1 / span 2;
    padding-bottom: 20px;
`;

const CheckoutAddress = styled.div`
    display: grid;
    grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
`;

const CheckoutFormLabel = styled.label`
    justify-self: end;
`;

const CheckoutInput = styled.input`
    border-width: 1px;
    border-style: solid;

    ${(props) =>
        props.$invalid &&
        `
        border-color: red;
        border-width: 3px;
        `
    };
`;

const CheckoutFormCheckbox = styled.input`
    grid-column: 2 / span 3;
    justify-self: start;
    margin-bottom: 20px;
`;

const CheckoutButton = styled.button`
    border-radius: 8px;
    height: 40px;
    grid-column: 3;
`;

const CancelButton = styled.button`
    border-radius: 8px;  
    height: 40px;
    grid-column: 1;
`;