import React, { Fragment } from 'react';

function TestGlossary(props) {
    return (
        <dl>
            {props.items.map(item => (
                // Without the `key`, React will fire a key warning
                <Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </Fragment>
            ))}
        </dl>
    );
}