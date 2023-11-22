
export default function CertCard(props){
    
    return(
        <div className={`border border-gray-500 p-4 flex flex-col gap-4 rounded bg-primary hover:border-0 ${props.lightMode ? 'hover:shadow-lg hover:shadow-black' : 'hover:shadow-lg hover:shadow-btnB'}`}>
            <img src={props.item.img} alt="Certificate of Christian Benson Capon" />
        </div>
    );
}