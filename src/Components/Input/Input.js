import React, { useState } from 'react'

import ProgressBar from '../ProgressBar/ProgressBar'

const InputPhoto = () => {
    const [file, setFile] = useState('')
    const [error, setError] = useState('')
    const types = ['image/png', 'image/jpeg']

    const inputHandler = (e) => {
        let selectedFile = e.target.files[0]
        if (selectedFile && types.includes(selectedFile.type)) {
            setFile(selectedFile)
            setError('')
        } else {
            setFile('')
            setError('Please select an image file (png or jpeg)')
        }
    }

    return (
        <>
            <form>
                <label>
                    <input type='file' onChange={inputHandler} />
                    <span className='input_sign'>+</span>
                </label>
                <div className='output'>
                    {error && <div className='error'>{error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
            </form>
        </>
    )
}

export default InputPhoto
