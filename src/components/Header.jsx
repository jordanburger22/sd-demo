// pascal - MyFirstComponent
// camelcase - camelCase

export default function Header({title, anotherValue}){

    // const {title, anotherValue} = props
    // return a single parent
    return(
        <div>
            {/* <h1>{props.title}</h1>
            <p>{props.anotherValue}</p> */}
            <h1>{title}</h1>
            <p>{anotherValue}</p>
        </div>
    )
}

// export default Header