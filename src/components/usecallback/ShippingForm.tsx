import {FormEvent, memo,useState} from "react";

interface ShippingFormTypeProps{
    onSubmit: ({}) => void;
}


const ShippingForm: React.FC<ShippingFormTypeProps> = memo(({onSubmit}) => {
    const [count, setCount] = useState<number>(0)

    console.log('Artificially slowing Rendering <ShippingForm>');
    let startTime = performance.now();
    while(performance.now() - startTime < 500){

    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        console.log(e.target);
        console.log(e.currentTarget);

        const formData = new FormData(e.currentTarget);
        const orderDetails = {
            ...Object.fromEntries(formData),
            count
        }
    
        onSubmit(orderDetails)
    }
    return (
        <form onSubmit={handleSubmit}>
            <p><b>Note: <code>ShippingForm</code> is artificially slowed down!</b></p>
            <label>
                Number of items:
                <button type="button" onClick={() => setCount(count - 1)}>–</button>
                {count}
                <button type="button" onClick={() => setCount(count + 1)}>+</button>
            </label>
            <br/>
            <label>
                Street:
                <input name="street" />
            </label>
            <br/>
            <label>
                City:
                <input name="city" />
            </label>
            <br/>
            <label>
                Postal code:
                <input name="zipCode" />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
});

export default ShippingForm;
