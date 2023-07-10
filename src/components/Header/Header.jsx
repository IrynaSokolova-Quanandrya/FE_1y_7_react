

export function Header(props) {
    console.log(props);
    return (
        <header>
        <a href="./">{props.text}</a>
        <ul>
            <li><a href="">LINK</a></li>
            <li><a href="">LINK</a></li>
            <li><a href="">LINK</a></li>
        </ul>
        </header>
    )
}