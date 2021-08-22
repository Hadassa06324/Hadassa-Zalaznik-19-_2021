import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../index.css';
import { Card } from 'primereact/card';


export const MyCard = (props) => {

    return (
        <div>
            <Card style={{ width: '15rem', marginBottom: '2em' }} >
                <div className="p-m-0" style={{ lineHeight: '1.5' }}>{props.children}</div>
            </Card>
        </div>
    )
}