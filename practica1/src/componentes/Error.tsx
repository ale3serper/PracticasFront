import './style.css'


export const ErrorComponent = (params: { message?: string }) => {

    const errorMessage = params.message;

    return(
        <>
            {errorMessage ? 
                <p style={{ color: "red" }}>
                    Error: {errorMessage}
                </p> 
            : null}
        </>
    )
}
