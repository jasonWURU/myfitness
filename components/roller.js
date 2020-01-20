import React from 'react'

const Roller = () => (
    <>
    <div className="roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <style jsx>{`
        .roller {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
        }
        .roller div {
            animation: roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            transform-origin: 40px 40px;
        }
        .roller div:after {
            content: " ";
            display: block;
            position: absolute;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #3498db;
            margin: -4px 0 0 -4px;
        }
        .roller div:nth-child(1) {
            animation-delay: -0.036s;
        }
        .roller div:nth-child(1):after {
            top: 63px;
            left: 63px;
        }
        .roller div:nth-child(2) {
            animation-delay: -0.072s;
        }
        .roller div:nth-child(2):after {
            top: 68px;
            left: 56px;
        }
        .roller div:nth-child(3) {
            animation-delay: -0.108s;
        }
        .roller div:nth-child(3):after {
            top: 71px;
            left: 48px;
        }
        .roller div:nth-child(4) {
            animation-delay: -0.144s;
        }
        .roller div:nth-child(4):after {
            top: 72px;
            left: 40px;
        }
        .roller div:nth-child(5) {
            animation-delay: -0.18s;
        }
        .roller div:nth-child(5):after {
            top: 71px;
            left: 32px;
        }
        .roller div:nth-child(6) {
            animation-delay: -0.216s;
        }
        .roller div:nth-child(6):after {
            top: 68px;
            left: 24px;
        }
        .roller div:nth-child(7) {
            animation-delay: -0.252s;
        }
        .roller div:nth-child(7):after {
            top: 63px;
            left: 17px;
        }
        .roller div:nth-child(8) {
            animation-delay: -0.288s;
        }
        .roller div:nth-child(8):after {
            top: 56px;
            left: 12px;
        }
        @keyframes roller {
            0% {
            transform: rotate(0deg);
            }
            100% {
            transform: rotate(360deg);
            }
        }
    `}
    </style>
    </>
)


export default Roller;
