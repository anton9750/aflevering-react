type CardProps = {
    title: string;
    color: string;
    filename: string;
};

export const Card = (props: CardProps) => {
    return (
        <div
            style={{
                backgroundColor: props.color,
            }}
        >
            <img src={props.filename} alt={props.title} />
            <h2>{props.title}</h2>
        </div>
    );
};