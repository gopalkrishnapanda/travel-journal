import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default function Card(props) {
    return (
        <div className='item'>
            <div class="card">
                <img src={props.img} class="card-img-top" alt="broken" />
                <div class="card-body">
                    <p class="card-text">{props.caption}</p>
                </div>
            </div>
        </div>
    )

}