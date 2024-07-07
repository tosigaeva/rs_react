// src/components/SearchResult.tsx
import { Component } from 'react';

interface Item {
    uid: string;
    name: string;
}

interface Props {
    items: Item[];
}

class SearchResult extends Component<Props> {
    render() {
        const { items } = this.props;
        return (
            <>
                {items.map(item => (
                    <div key={item.uid}>
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </>
        );
    }
}

export default SearchResult;
