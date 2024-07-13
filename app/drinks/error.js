'use client';

import {log} from "next/dist/server/typescript/utils";

const error = (error) => {
    console.log(error)
    return <div>{error.error.message}</div>
    // return <div>there was an error...</div>
};
export default error;