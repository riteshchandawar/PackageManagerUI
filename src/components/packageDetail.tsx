import * as React from "react";

export interface PackageDetailProps {
    changeLog: string;
    content: string;
    dependencies: string[];
    name: string;
}

export class PackageDetail extends React.Component<PackageDetailProps, undefined> {
    constructor(props: PackageDetailProps) {
        super(props);
    }

    render() {
        return (
            <div className="Detail">
                <div className="Descrition">Hello from Description {this.props.name}</div>
                <div className="DetailSectionHeader">What's New:</div>
                <div className="DetailSection">{this.props.changeLog}</div>
                <div className="DetailSectionHeader">KnownIssue</div>
                <div className="DetailSection"></div>
                <div className="DetailSectionHeader">Dependencies</div>
                <div className="DetailSection"></div>
                <div className="DetailSectionHeader">Content of Package</div>
                <div className="DetailSection"></div>
                
            </div>);
    }
}