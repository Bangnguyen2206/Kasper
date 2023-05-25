import Image from 'next/image'
import './Login.scss'

export default function Login() {
    return (
        <>
            <div className="h-[90vh] w-[75%] rounded-3xl flex justify-center items-center">
                <div className="w-[50%] h-full bg-white rounded-l-3xl flex justify-center items-center">
                    <div className="content-infor w-[95%] h-[95%] p-3">
                        {/* Title */}
                        <div className="w-full h-[10%] flex justify-between items-center">
                            <h1>HAZE.</h1>
                            <h1>HAZE.</h1>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] h-full border-2 border-blue-500 rounded-r-3xl">

                </div>
            </div>
        </>
    )
}
