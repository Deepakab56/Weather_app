import React from 'react';

function ColummData(props) {
    const{data} = props
    return (
        <div>
            <div class="container-fluid text-center bg-dark text-white p-3">
                <div class="row">
                    <div class="col">
                       {data?.name}
                    </div>
                    <div class="col">
                       
                    </div>
                    <div class="col">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColummData;