type CircleProps = {
    color: string, 
    width: string
    padding: string
    margin: string
}

export const div = (props:CircleProps) => {
    return (
       <div style={{ backgroundColor: props.color, width: props.width, padding: props.padding, margin: props.margin  }}>
       container
       </div>
    )
}