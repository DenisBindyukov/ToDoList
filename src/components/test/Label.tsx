import React from 'react'

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({children, className, ...props}) => {

    return(
            <label {...props} className={className}>
                {children}
            </label>
    )
}



