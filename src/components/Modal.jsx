import React from 'react'

export default function Modal(props) {
    if(!props.visible) {
        return null
    }

    return (
        <div onClick={props.onClose} 
            className="fixed left-0 top-0 right-0 bottom-0 bg-gray-500/50 flex items-center justify-center">
            <div className="flex flex-col bg-white rounded-lg h-1/2 w-1/2 p-4 space-y-2" onClick={e=>e.stopPropagation()}>
                <h1 className="text-2xl border-b-2">{props.opts.title}</h1>
                <div className="flex-grow">{props.opts.description}</div>
                <div className="flex flex-row space-x-4">
                    <button onClick={props.onClose} className="bg-gray-400 p-2 rounded-sm text-white w-24 flex-grow">Close</button>
                    <button className="bg-blue-400 p-2 rounded-sm text-white w-24 flex-grow">Continue</button>
                </div>
            </div>
        </div>
    )
}
