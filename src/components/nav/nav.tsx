import React from 'react';

type NavProps = {
    title1:string;
    title2:string;
    title3:string;
};

export default function Nav(props: NavProps) {
    const {title1, title2, title3} = props;
    return(
        <div id="menubar">
        <ul>
            <li><a>{title1}</a></li>
            <li><a>{title2}</a></li>
            <li><a>{title3}</a></li>
        </ul>
    </div>
    );
}