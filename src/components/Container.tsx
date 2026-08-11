type ContainerProps = {
    color: string, 
    width: string
    padding: string
    margin: string
}

export const Container = (props:ContainerProps) => {
    return (
       <div style={{ backgroundColor: props.color, width: props.width, padding: props.padding  }}>
       container
       </div>
    )
}