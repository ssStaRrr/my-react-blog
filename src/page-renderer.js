import React from "react";
import  {useRouteMatch} from "react-router-dom";

const generatePage = page => {
    const component = () => require(`./pages/${page}`).default

    try {
        
    } catch (err) {
        
    }
}

export default function PageRenderer() {
    const {
        params: {page}
    } = useRouteMatch()

    return generatePage(page)
}