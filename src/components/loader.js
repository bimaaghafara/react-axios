
import { ProgressSpinner } from 'primereact/progressspinner';

const Loader = (props) => {
    return (
        <>
            <style jsx>
            {`
               .overlay {
                position: fixed;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0,0,0,0.1);
                z-index: 2;
                cursor: pointer;
              }
              
              .loader{
                position: absolute;
                top: 50%;
                left: 50%;
                font-size: 50px;
                color: white;
                transform: translate(-50%,-50%);
                -ms-transform: translate(-50%,-50%);
              }
            `}
            </style>
            <div className="overlay">
                <div className="loader">
                    <ProgressSpinner />
                </div>
            </div>
        </>
    );
}

export default Loader;
