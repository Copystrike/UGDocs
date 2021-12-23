import { Icon } from '@iconify/react';

export const Documents = () => {
    return (
        <div className="flex">
            <ul className='mx-auto'>
                <DocumentItem name='Document one' lastModified='20/12/2021' />
                <DocumentItem name='Document two' lastModified='19/12/2019' />
                <DocumentItem name='Document three' lastModified='18/12/2020' />
            </ul>
        </div>
    )
}

type DocumentItemProps = {
    name: string,
    lastModified: string,
}

const DocumentItem = (props: DocumentItemProps) => {
    return (
        <li className="flex items-center p-3 px-10 my-1 bg-gray-200 rounded-md cursor-pointer hover:bg-slate-300">
            <button className='flex text-left' onClick={() => console.log("HGey")}>
                <div className="flex-initial">
                    <Icon icon="teenyicons:doc-outline" width="50" fill="" />
                </div>
                <div className="flex-initial ml-3.5">
                    <p className='font-medium'>{props.name}</p>
                    <p className="text-sm font-light">Last modified: {props.lastModified}</p>
                </div>
            </button>
        </li>
    )
}