import './Profile.css';


export function Profile(): React.ReactElement {
    return (
        <div id='profile-container' className="inline-flex float-right w-1/3 h-auto top-0 mt-44 mr-10 ml-10 pb-8 border border-gray-300 rounded-lg">
            <div className="p-2">
                {/* <p className='text-2xl'>&nbsp;</p> */}
                <br></br>
                <img src='/my-icon.jpg' className='rounded-full max-w-20'/>
                <p className='text-2xl'>Masato</p>
                <br></br>
                <p>未経験からフロントエンジニアを目指し学習中です。</p>
                <br></br>
                <a className='bg-black text-white mt-4 py-1 px-2 rounded-md' href="https://x.com/masato24524">
                &nbsp;&#x1D54F;:masato24524
                    {/* <img src="logo-handle.jpg" className='mt-5 ml-1 w-24 h-6'></img> */}
                </a>
                <br></br>
                <br></br>
                <p>JavaScript, TypeScript, React, Next.js</p>
            </div>
        </div>
    )
}