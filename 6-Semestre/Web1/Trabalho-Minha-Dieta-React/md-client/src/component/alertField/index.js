import React from 'react';

function AlertField({msgTipo, msg, func}) {
 
    return(
        <>
            {
                msgTipo === 'erro' &&   
                <div class="mt-1 alert alert-danger alert-dismissible fade show" role="alert">
                    {msg}
                    <button  type="button" class="btn-close" onClick={func} aria-label="Close"></button>
                </div>
            }
            {msgTipo === 'ok' && <div className="mt-2 alert alert-success" role="alert"> {msg} </div>}
        </>
    );
}

export default AlertField;