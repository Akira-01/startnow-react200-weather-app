import React from 'react';


export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='card border col-md-6 mb-4'>
                <div className='card-header mb-4'>City Information</div>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='expense-description'>Description</label>
                        </div>
                    </form>
                </div>
            </div>

        )

    }
};
