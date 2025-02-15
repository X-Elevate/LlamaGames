import { useRef, useEffect } from 'react';

export default function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <div id='hero' className='section-offset relative h-1/5 w-full overflow-hidden'>
            <img src="[DEL]VIDEO.jpeg" alt="" className='h-full w-full object-cover'/>
            {/* <video
                ref={videoRef}
                className='absolute top-0 left-0 w-full h-full object-cover'
                autoPlay
                loop
                muted
                playsInline
            >
                <source src='/path-to-your-video.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video> */}
        </div>
    );
}
