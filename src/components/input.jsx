import { AutoComplete } from 'primereact/autocomplete';
import { useRef, useEffect, useState } from 'react';
import { Toast } from 'primereact/toast';
import getLocation from '../api/Api';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export const Input = (props) => {
    const { setSelector } = props
    const toast = useRef(null);

    const [locations, setLocations] = useState([]);
    const [selectedLocation, setselectedLocation] = useState(null);
    const [filteredLocations, setFilteredLocations] = useState(null);

    const searchLocation = (event) => {
        setTimeout(() => {
            setFilteredLocations(locations);
        }, 250);
    }

    useEffect(() => {
        getLocation(selectedLocation).then((data) => {
            setLocations(data)
        })
    }, [selectedLocation]);

    function alphacheck(e) {
        const key = e.keyCode || e.which;
        if (key == 13)
            setSelector(selectedLocation)
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
                    <AutoComplete onKeyUp={(e) => { alphacheck(e) }}
                        value={selectedLocation} suggestions={filteredLocations}
                        completeMethod={searchLocation} field="LocalizedName"
                        onChange={(e) => setselectedLocation(e.value)} />
                    <label htmlFor="lefticon">City name</label>
                </span>
                <IconButton color="primary" aria-label="add to shopping cart"
                    onClick={(e) => { setSelector(selectedLocation) }}>
                    <SearchIcon />
                </IconButton>
            </div>
        </>
    )
}






