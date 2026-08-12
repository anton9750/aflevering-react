type ContainerProps = {
    color: string, 
    width: string
    padding: string
    margin: string
}

export const Container = (props:ContainerProps) => {
    return (
       <div className="reset" style={{ backgroundColor: props.color, width: props.width, padding: props.padding  }}>
        <figure style={{ margin: props.margin, padding: props.padding}}>
        
    </figure>  <img src="src\assets\kratoss.png" alt="" />
       </div>
    )
}

