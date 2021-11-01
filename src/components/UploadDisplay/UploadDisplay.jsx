import React from 'react';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'

function UploadDisplay () {

    const handleFinishedUpload = info => {
        console.log("image info: ", info);
        // console.log('File uploaded with filename', info.filename)
        console.log('Access it on s3 at', info.fileUrl)
        
      }

    const uploadOptions = {
        server: 'http://localhost:5000',
        // signingUrlQueryParams: {uploadType: 'avatar'},
    }

    const s3Url = 'https://climbtags1.s3.amazonaws.com';

    return (
        <DropzoneS3Uploader
            onFinish={(event) => handleFinishedUpload(event)}
            s3Url={s3Url}
            maxSize={1024 * 1024 * 5}
            upload={uploadOptions}
        />
    )
}

export default UploadDisplay;