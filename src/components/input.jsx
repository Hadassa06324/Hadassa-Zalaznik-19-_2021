import { AutoComplete } from 'primereact/autocomplete';
import { InputText } from 'primereact/inputtext';
import { useRef } from 'react';
import { Toast } from 'primereact/toast';


export const Input = (props) => {
    const { setSelector } = props
    const toast = useRef(null);

    function alphacheck(e) {
        const regex = /[A-Za-z]/;
        const chars = e.target.value.split('');
        const char = chars.pop();
        if (!regex.test(char) && char != " ") {
            e.target.value = chars.join('');
            toast.current.show({ severity: 'error', summary: 'Error Message', detail: 'Please enter only English', life: 3000 });
            e.preventDefault();
            return false;

        }
        else {
            return true;
        }
    }

    return (
        <>
            <Toast ref={toast} />
            <div className="p-field p-col-12 p-md-4">
                <span className="p-float-label p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText onKeyPress={(e) => { alphacheck(e) }} id="lefticon" pattern="[a-zA-Z]*" onBlur={(e) => { setSelector(e.target.value) }} />
                    <label htmlFor="lefticon">City name</label>
                </span>
            </div>
        </>
    )
}