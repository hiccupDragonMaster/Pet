import { Fragment } from 'react';
import { Spinner } from 'flowbite-react';

const Loading = () => {
    return (
        <Fragment>
            <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-100 bg-opacity-50 z-50">
                <Spinner size="lg" />
            </div>
        </Fragment>
    );
};

export default Loading;
