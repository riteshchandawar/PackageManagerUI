import * as React from "react";
export interface DescriptionProps{
    name: string
}

export class Description extends React.Component<DescriptionProps, undefined>{

constructor(props:DescriptionProps)
{
        super(props);     
}

    render(){
        return <div className="Description">Hello from {this.props.name}!</div>;
    }
}