import React from 'react';
import './preView.styles.scss';
import CollecvtionItem from './../../components/collectioItem/collectionItem.component'

const preView = (props) => {
    return (
        <div className = 'collection-preview'>
            <h1 className = 'title'>{props.title.toUpperCase()}</h1>
            <div className = 'preview'>
                {props.items.filter((item,idx) => idx<4).map((item) => {
                    return(
                         <CollecvtionItem key = {item.id} image = {item.imageUrl} name = {item.name} price = {item.price}/>
                    );
                })}
            </div>            
        </div>
    );
}

export default preView;