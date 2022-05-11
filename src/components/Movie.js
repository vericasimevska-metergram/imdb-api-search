export function Movie({ id, title, image, description }) {
    return (
        <div key={id}>
            <h2>{title} - {description}</h2>
            <img src={image}></img>

        </div>
    )
}