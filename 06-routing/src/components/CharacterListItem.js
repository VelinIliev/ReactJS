import { Link } from 'react-router-dom'


const CharacterListItem = ({ name, url }) => {
    const id = url.split("/").filter(x => x).pop();
    // const id = data[data.length - 1];
    return (<li><Link to={`/characters/${id}`}>{name}</Link></li>)
}

export default CharacterListItem;