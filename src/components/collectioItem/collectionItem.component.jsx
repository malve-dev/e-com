import React from 'react';
import './collectionItem.styles.scss';

const CollectionItem = (props) => {
    console.log(props);
    return(
        
        <div className = 'collection-item'>
            <div className = 'image' style = {{
                backgroundImage : `url(${props.image})`
            }}>
            </div>


            <div className = 'collection-footer'>
                <span className = 'name'>{props.name}</span>
                <span className = 'price'>{props.price}</span>
            </div>
        </div>

    );
}

export default CollectionItem;