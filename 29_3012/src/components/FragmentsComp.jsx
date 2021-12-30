import React from "react";


/* Fragments
    1. <React.Fragment>
        <ChildA />
        <ChildB />
        <ChildC />
        </React.Fragment>
    2. <> </> also defined as empty tag.
*/



const FragmentsComp = () => {

    return (
        <React.Fragment>
            <table>
                <tr>
                    <td>Hello</td>
                    <td>World</td>
                </tr>
            </table>
        </React.Fragment>

    )
}

export default FragmentsComp;