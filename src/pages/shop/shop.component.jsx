import React, {Component} from 'react';
import './shop.styles.scss';
import {SHOP_DATA} from './shop.data';
import Preview from '../../components/preView/preView.component';


class Shop extends Component{
    constructor(props){
        super(props);
        this.state = {
            collections : SHOP_DATA
        }
    }

    render () {
        const {collections} = this.state;
        return(
            <div>
                {collections.map(collection => {
                    return (
                        <Preview key = {collection.id} title = {collection.title} items = {collection.items}/>
                    );
                })}
            </div>
        );
    }
}

export default Shop;